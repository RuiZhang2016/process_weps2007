import pandas as pd
import tweepy

class Twitter_API:
    def __init__(self,file):
        self.accounts = pd.read_csv("accounts.csv")

    def __self__(self,id):
        auth = tweepy.OAuthHandler(self.accounts['Consumer Key (API Key)'][id], self.handlers['Consumer Secret (API Secret)'][id])
        auth.set_access_token(self.accounts['Access Token'][id], self.accounts['Access Token Secret'][id])
        api = tweepy.API(auth)
        return(api)

accounts = pd.read_csv("accounts.csv")
print(len(accounts.index))



import os
import tweepy

def downloadi_friends(user, API, mydir):
        print('Downloading '+user)
        filename = mydir + user + '.txt'
        if not os.path.isfile(filename):
                friendIDs = []
                try:
                        for page in tweepy.Cursor(API.friends_ids, user_id = user,monitor_rate_limit=True, wait_on_rate_limit=True).pages():
                                friendIDs.extend(page)
                        file = open(filename, 'w')
                        for item in friendIDs:
                                file.write("%s\n" % item)
                        file.close()
                        print('Done')
                        return 0
                except Exception as e:
                        print(e)
                        time.sleep(10)
                        return -1
        else:
                print('Existing')
                return 1

def extract_users():
        mydir = "../cascades/more-than-30/"
        files = os.listdir(mydir)
        nfiles = len(files)
        userIds = []

        for fileId in range(nfiles):
                file = files[fileId]
                with open(mydir+file) as f:
                        content = f.readlines()
                        if len(content) < 5: continue

                content = [ line.replace("\"","") for line in content]
                content = [ line.split(" ") for line in content]
                userIds.extend([ line[0] for line in content[1:]])

        return list(set(userIds))



a = [{u'message': u'Sorry, that page does not exist', u'code': 34}]
print(a[0]['code'])