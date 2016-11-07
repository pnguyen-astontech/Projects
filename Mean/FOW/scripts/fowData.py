# FOW CARD DB

# Types: Light, Flame, Water, Wind, Darkness, Void
# release: LEL, CFC, SDL, VIN002, BFA, TMS, TTW, SKL, VS01, VIN001, MOA, MPR, TAT, CMF, SD


# void/LEL : 2528 - 2499
# darkness/LEL : 2498 - 

# <div id="page_navi">
# 		<a href="/cards/light/SD/17" class="prev">Prev</a>
# 		<a href="/cards/light/SD/2" class="next">Next</a>
# </div>

# <img src="/cards/images/300xNxca0a1397856ef04c8241e6d62ede100c840e1341ebc26b0873e098dac5a962a547224bffcff95bb5.jpg.pagespeed.ic.sEDSXIsM94.webp" alt="Beast of Holy Light" width="300" data-pagespeed-url-hash="23869118" onload="pagespeed.CriticalImages.checkImageForCriticality(this);">

# <tr class="card_info">
# 	<td class="">LEL-003</td>
# 	<td class="">C</td>
# 	<td class="">Resonator</td>
# 	<td class="tail">Beast</td>
# </tr>

# -----------------------------------------


#---------------------------------------------------------------------
# IMPORTS
#---------------------------------------------------------------------
import http.client
from pymongo import MongoClient

#---------------------------------------------------------------------
# HELPER FUNCTIONS
#---------------------------------------------------------------------


def getCardsNumber(type, release):
	server.putrequest('GET', '/cards/' + type + '/' + release + '/')
	server.putheader('Accept', 'text/html')
	server.endheaders()
	response = server.getresponse()
	if response.status == 200:
		cardNumbers = []
		data = response.readlines()
		for line in data:
			line = line.decode('utf-8')
			if "<a href=\"/cards/" + type + "/" + release in line:
				cardNumbers.append(line[37:-4])
	return cardNumbers

def getCardData(type, release, number): 
	server.putrequest('GET', '/cards/' + type + '/' + release + '/' + number + '/')
	server.putheader('Accept', 'text/html')
	server.endheaders()
	response = server.getresponse()
	if response.status == 200:
		data = response.readlines()
		info = {}
		for line in data:
			line = line.decode('utf-8')
			if "<img src=\"/cards/images" in line:				
				info["picture"] = "http://fowtcg.com" + line[13:line.find("alt")-2]
			if "<td class=\"card_name" in line:
				info["name"] = line[38:-6]
	return info

#---------------------------------------------------------------------
# MAIN
#---------------------------------------------------------------------
client = MongoClient()
db = client['fow']

post1 = { 
	"name": "python",
	"type": "python",
	"picture": "python"
}

results = db.cards.find()
for record in results:
	print(record)

client.close()

server = http.client.HTTPConnection('fowtcg.com')

types = ['light', 'flame', 'water', 'wind', 'darkness', 'void']
releases = ['LEL', 'CFC']

cardNumbers = getCardsNumber(types[0], releases[0])
for n in cardNumbers:
	print(getCardData(types[0], releases[0], n))

server.close()
