import os
import sys
import json
import urllib.request
client_id = "zdPUe16X4sc0zmZzWh5B"
client_secret = "51YiyuEg7x"
sort_type = "sim"
display = '20'
encText = urllib.parse.quote("medicine")
url = "https://openapi.naver.com/v1/search/news?query=" + \
    encText + '&sort=' + sort_type + '&display=' + display  # JSON 寃곌낵
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # XML 寃곌낵
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id", client_id)
request.add_header("X-Naver-Client-Secret", client_secret)

response = urllib.request.urlopen(request)
rescode = response.getcode()
if (rescode == 200):
    response_body = response.read()
    print(response_body.decode('utf-8'))

    with open('data.json', 'w', encoding='utf-8') as file:
        json.dump(eval(response_body.decode('utf-8')), file,
                  ensure_ascii=False, indent=4, sort_keys=True)
else:
    print("Error Code:" + rescode)
