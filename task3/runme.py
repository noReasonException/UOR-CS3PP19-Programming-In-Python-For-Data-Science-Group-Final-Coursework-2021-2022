import os
import pandas as pd
import json
import re
import requests
import time
import multiprocessing
# https://github.com/dr5hn/countries-states-cities-database
#load to mysql , format and export as .csv
#"""
#SELECT countries.name as country_name,states.name as state_name,cities.name as city_name from cities
#    join states on states.id = cities.state_id
#    join countries on states.country_id = countries.id;
#
#"""

tweets =pd.read_csv("tweetMap.csv")
retweets = pd.read_csv("retweetMap.csv")
world = pd.read_csv("places_of_the_world.csv")
populations = pd.read_html('/Users/stefanosstefanou/Desktop/Python Coursework/populations/populations.html')[0]
populations=populations[['Country (or dependency)','Population (2020)']]




def getCountryWeight(country:str):
    try:
        populationOfCountry = populations.loc[populations['Country (or dependency)']==country]
        return int(populationOfCountry['Population (2020)'])
    except:
        return 0
    countries.sort(reverse=True,key=lambda x:x[1])
    if(len(countries)==0):
        return 'None'
    return(countries[0][0])


def translateToCountry(vagueLocation,world):
    #Sometimes split by comma, others by empty, include both
    if("," in vagueLocation):
        elements=list(map(lambda x:x.strip().lower(),vagueLocation.split(",")))
    elif("_" in vagueLocation):
        elements=list(map(lambda x:x.strip().lower(),vagueLocation.split("_")))
    else:
        elements=list(filter(lambda x:len(x)>1,vagueLocation.split(" ")))
        elements=list(map(lambda x:x.lower(),elements))
    if(len(elements)==0):
        return 'None'
        
    countries=[]
    for index,row in world.iterrows():
        if(row['country_name'].lower() in elements or row['state_name'].lower() in elements):
            return row['country_name']
        elif(row['city_name'].lower() in elements):
            countries.append((row['country_name'],getCountryWeight(row['country_name'])))
    countries.sort(reverse=True,key=lambda x:x[1])
    
    if(len(countries)==0):
        return 'None'
    return(countries[0][0])
def passAndPrint(vague):
    ans=translateToCountry(vague,world)
    print("vague "+str(vague)+" = true "+str(ans))
    return ans

#Eliminate entries with unknown location
retweets['retweeter_location']=retweets['retweeter_location'].map(lambda x:str(x))
retweets=retweets.loc[retweets['retweeter_location']!='nan']


parMapList=retweets['retweeter_location'].tolist()
if __name__ == '__main__':
    pool = multiprocessing.Pool()
    xtransList = pool.map(passAndPrint, parMapList)
    result=pd.Series(xtransList)
    result.to_csv("results.csv")
    
