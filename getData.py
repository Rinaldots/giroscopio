from urllib.parse import urlparse, parse_qs
import requests, json, time, csv

def getIpList():
    url = '/api/idList'
    respose = requests.get(url)
    ipList = json.loads(respose.content)
    return ipList

def getData(id):

    url = '/api/gyroData?id='+str(id)
    respose = requests.get(url)
    gyroData = json.loads(respose.content)
    return gyroData



while 1 < 2:
    idlist = getIpList()
    for id in idlist:
        data = getData(id)
        if data['x'] > 20:
            print('x : ',data['x'])
            
    time.sleep(1)

def dataLogger():
    idlist = getIpList()
    for id in idlist:
        data = getData(id)
        with open('./data'+data['client']+'.csv', 'a') as csvfile:
            spamwriter = csv.writer(csvfile)
            spamwriter.writerow(['x : ']+[data['x']] + ['y : ']+[data['y']] + ['z : ']+[data['z']])
    time.sleep(1)        

