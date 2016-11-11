# FOW CARD DB

# As of 11/09/2016
# Attributes: Light, Flame, Water, Wind, Darkness, Void
# Releases: LEL, CFC, SDL, VIN002, BFA, TMS, TTW, SKL, VS01, VIN001, MOA, MPR, TAT, CMF, SD

# NOTES: 
# Data collected from http://fowtcg.com/cards/
# If webpage structure changes from 11/09/2016 code will need to be updated to match the html strucuture of the data.

#---------------------------------------------------------------------------------------------------------------------------

#---------------------------------------------------------------------------------------------------------------------------
# IMPORTS
#---------------------------------------------------------------------------------------------------------------------------
import http.client
from pymongo import MongoClient

#---------------------------------------------------------------------------------------------------------------------------
# HELPER FUNCTIONS
#---------------------------------------------------------------------------------------------------------------------------

def getCardsNumber(attr, release):
	server.putrequest('GET', '/cards/' + attr + '/' + release + '/')
	server.putheader('Accept', 'text/html')
	server.endheaders()
	response = server.getresponse()
	if response.status == 200:
		cardNumbers = []
		data = response.readlines()
		for line in data:
			line = line.decode('utf-8')
			if "<a href=\"/cards/" + attr + "/" + release in line:
				cardNumbers.append(line[37:-4])
	return cardNumbers

def getCardData(attr, release, number): 
	server.putrequest('GET', '/cards/' + attr + '/' + release + '/' + number + '/')
	server.putheader('Accept', 'text/html')
	server.endheaders()
	response = server.getresponse()
	if response.status == 200:
		data = response.readlines()
		info = {}
		info["details"] = []
		cnt = 0;
		cont = False
		for line in data:
			line = line.decode('utf-8')
			if "<img src=\"/cards/images" in line:
				info["picture"] = "http://fowtcg.com" + line[13:line.find("alt")-2]
			if "<td class=\"card_name" in line:
				info["name"] = line[38:-6]
			if cont == True:
				if cnt == 3:
					info["details"].append(line[21:-6])
					cont = False
				else:
					info["details"].append(line[17:-6])
					cnt += 1;
			if "<tr class=\"card_info" in line:
				cont = True
	return info

#---------------------------------------------------------------------------------------------------------------------------
# MAIN
#---------------------------------------------------------------------------------------------------------------------------
client = MongoClient()
db = client['fow']

# Emtpy db
cards = db.cards.delete_many({})
print("cards table: ", cards.deleted_count)

attributes = db.attributes.delete_many({})
print("attributes table: ", attributes.deleted_count)

releases = db.releases.delete_many({})
print("releases table: ", releases.deleted_count)

server = http.client.HTTPConnection('fowtcg.com')

attr = ['light', 'flame', 'water', 'wind', 'darkness', 'void']
releases = ['LEL', 'CFC', 'SDL', 'VIN002', 'BFA', 'TMS', 'TTW', 'SKL', 'VS01', 'VIN001', 'MOA', 'MPR', 'TAT', 'CMF', 'SD']

for data in attr:
	results = db.attributes.insert_one({
		"attribute": data
	})

for data in releases:
	results = db.releases.insert_one({
		"release": data
	})

for a in attr:
	for r in releases:
		cardNumbers = getCardsNumber(a, r)
		for n in cardNumbers:
			data = (getCardData(a, r, n))
			try:
				results = db.cards.insert_one({
					"name": data["name"],
					"card_id": data["details"][0],
					"rarity": data["details"][1],
					"type": data["details"][2],
					"sub_type": data["details"][3],
					"picture": data["picture"]
				})
			except:
				try:
					print(data)
				except:
					print("Error")

# Clean up
client.close()
server.close()
