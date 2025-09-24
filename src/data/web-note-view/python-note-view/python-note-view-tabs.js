export const pythonNoteViewTabs = [
  {
    id: "pythonExceptionHandlingNote",
    title: "例外處理",
    description: "<p>Python 的例外處理（Exception Handling） <code>try...except...finally</code>，約相當於 JavaScript 的 <code>try...catch...finally</code>，但兩者仍有些微的不同。</p>",
    lists: [
      {
        listTitle: "例外處理 <code>try...except...finally</code> ",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`try:
    x = 60 / 0
except ZeroDivisionError:   # 如果是除以零的錯誤，就跑這裡
    print("不能除以零")
except Exception as e:      # 其他任何錯誤就跑這裡，並把錯誤物件取名為e
    print("其他錯誤:", e)
else:                       # 如果try區塊沒有錯誤，才會執行這裡
    print("沒有錯誤時會執行")
finally:                    # 不管有沒有錯誤，這裡一定會執行
    print("無論是否發生錯誤都會執行")`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonOopNote",
    title: "物件導向程式設計（OOP）",
    description: "<p>Python 的 <strong>物件導向程式設計（OOP）</strong> ，用到 <strong>類別（class）</strong>、<strong>繼承（inheritance）</strong>、<strong>方法（method）</strong> 。</p>",
    lists: [
      {
        listTitle: "一個例子",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`class animalBaseClass:            # 定義一個基底類別 (父類別)
    def __init__(self, num):      # 建構子 (物件建立時自動執行)
        self.animalLegs = num     # 設定屬性 (例如此處為設定動物的腳數)
    def walk(self):               # 定義方法
        print("走動")
    def cry(self):
        print("吼叫")
    def getLegsNum(self):
        print(self.animalLegs)    # 輸出腳數


class snakeClass(animalBaseClass):  # 定義子類別，繼承自父類別（此處為animalBaseClass）
    def __init__(self, num):          
        super().__init__(num)       # 呼叫父類別的__init__（此處為建立animalLegs）
        print("我是蛇")              # 額外加上的初始化動作
        


nyoro = snakeClass(0)
# 我是蛇

nyoro.walk()
# 走動

nyoro.cry()
# 吼叫

nyoro.getLegsNum()
# 0`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonTimeNote",
    title: "時間模組",
    description: "<p>使用 Python 標準函式庫，操作日曆（<code>calendar</code> 模組）和日期時間（<code>datetime</code> 模組）。</p>",
    lists: [
      {
        listTitle: "<code>calendar</code> 模組",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`import calendar
print(calendar.month(2025,9))  # 印出2025年9月的月曆
print(calendar.isleap(2000))  # 檢查2000年是否為閏年
# True`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      },
      {
        listTitle: "<code>datetime</code> 模組",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`import datetime
print(datetime.date.today())  # 取得今天的日期
print(datetime.datetime.now())  # 取得現在時間
print(datetime.datetime.now() + datetime.timedelta(7))  # 取得「現在時間+7天」的時間戳記`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonZipProcessNote",
    title: "解壓縮/壓縮 zip",
    description: "<p><code>import zipfile</code> ，解壓縮 zip 或壓縮 zip。</p>",
    lists: [
      {
        listTitle: "解壓縮 zip",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`import zipfile

# 解壓縮
files = zipfile.ZipFile("/Users/dongguanting/Downloads/python-3.5.1-embed-win32.zip")
print(files.namelist())  # 顯示zip裡包含了哪些檔案

# 方法一，解壓縮成"python.exe"這個檔案到路徑
files.extract("python.exe", r"/Users/dongguanting/Downloads")

# 方法二，解壓縮全部檔案到路徑
files.extractall("/Users/dongguanting/Downloads")

files.close()  # 關閉檔案物件`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      },
      {
        listTitle: "壓縮 zip",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`import zipfile

# 壓縮檔案
zip_file = zipfile.ZipFile("/Users/dongguanting/Downloads/python.zip", mode="w")  # 壓縮後的檔名
zip_file.write("/Users/dongguanting/Downloads/python.exe")  # 要壓縮的檔案
zip_file.close()  # 關閉檔案物件`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonOpenNote",
    title: "存取檔案物件",
    description: "<p>使用 <code>open()</code> 建立 <strong>檔案物件</strong> ，並進行操作。</p>",
    lists: [
      {
        listTitle: "存取檔案物件",
        listSubtitle: null,
        listCode: {
          pythonCode: 
`# 開啟檔案
file_object = open("python.txt", "r")  # 讀寫模式
file_object = open("python.txt", "w")  # 寫入模式（覆蓋檔案）
file_object = open("python.txt", "a")  # 追加（從檔案末尾寫）


# 讀取檔案
file_object.read()  # 讀取檔案內容


# 寫入檔案
file_object.write("")                           # 寫入空字串（等於清空）
file_object.write("this is sample in python.")  # 寫入文字
file_object.flush()                             # 立即寫入硬碟


# 移動游標
file_object.seek(0)  # 回到檔案開頭


# 關閉檔案
file_object.close()  # 關閉檔案





# 不想寫".close()"的話，可以用"with"的寫法
with open("python.txt", "w+") as monkey:
    monkey.write("this is sample in python.\\n")
    monkey.seek(0)
    print(monkey.read())`
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonPillowNote",
    title: "影像處理",
    description: "<p>透過 <code>from PIL import Image</code>，使用 Python 的 Pillow (PIL, Python Imaging Library) 影像處理函式庫，可以進行圖片讀取、顯示、轉換與保存。</p>",
    lists: [
      {
        listTitle: "一些基本的影像處理",
        listSubtitle: null,
        listCode: {
          pythonCode: null,
        },
        listDetails: [
          {
            detailTitle: "開啟圖片",
            detailSubtitle: "開啟一張圖片並顯示。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
image.show()`
            }
          },
          {
            detailTitle: "<code>R</code>、<code>G</code>、<code>B</code> 交換顏色",
            detailSubtitle: "拆分 RGB 通道，然後交換通道，再存成新檔。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
r, g, b = image.split()  # 拆成R、G、B三個色彩通道
convert_image = Image.merge("RGB", (b, g, r))  # 重新合併（交換R、B）
convert_image.show()
convert_image.save("sample_image/rgb_to_bgr.jpg")`
            }
          },
          {
            detailTitle: "將圖片轉成黑與白（只有黑與白）",
            detailSubtitle: "將圖片轉換成只由純黑與純白兩種像素構成的圖片。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
black_and_white = image.convert("1")  # 轉為1-bit黑白
black_and_white.show()
black_and_white.save("sample_image/b_and_w.jpg")`
            }
          },
          {
            detailTitle: "將圖片轉成灰階",
            detailSubtitle: "將圖片轉換成灰階圖片。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
gray_image = image.convert("L")  # 轉為8-bit灰階
gray_image.show()
gray_image.save("sample_image/gray_image.jpg")`
            }
          },
          {
            detailTitle: "將圖片旋轉",
            detailSubtitle: "將圖片旋轉，並存成新檔",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")

# 轉換到不同角度、方式
image.transpose(Image.ROTATE_90).show()        # 旋轉90度
image.transpose(Image.ROTATE_180).show()       # 旋轉180度
image.transpose(Image.ROTATE_270).show()       # 旋轉270度
image.transpose(Image.FLIP_LEFT_RIGHT).show()  # 左右翻轉
image.transpose(Image.FLIP_TOP_BOTTOM).show()  # 上下翻轉

image.transpose(Image.ROTATE_90).save("sample_image/ratate_90.jpg")  #旋轉90度並存成新檔`
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonApiDataProcessingNote",
    title: "API 資料處理",
    description: 
`<p>
  <ol style="padding-left: 16px; line-height: 1.7;">
    <li><code>import requests</code>：發出 HTTP 請求以抓取網頁或 API 資料。</li>
    <li><code>import pprint</code>：美化輸出的 JSON / dict，以方便閱讀。</li>
    <li><code>import sys</code>：讀取在命令列輸入的參數，以抓取特定目標資料。</li>
  </ol>
</p>`,
    lists: [
      {
        listTitle: "<code>requests</code> 模組",
        listSubtitle: null,
        listCode: {
          pythonCode: null,
        },
        listDetails: [
          {
            detailTitle: "基本網頁抓取",
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
r = requests.get("https://quanting56.github.io/Antinant/index.html")
print(r.text)`
            }
          }
        ]
      },
      {
        listTitle: "API 資料處理",
        listSubtitle: null,
        listCode: {
          pythonCode: null
        },
        listDetails: [
          {
            detailTitle: "抓取一般 JSON API",
            detailSubtitle: "抓取「臺北市 YouBike 2.0 即時借車狀況 API」。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
import pprint

api_url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
ubike_data = requests.get(api_url).json()

pprint.pprint(ubike_data)  # 印出這個API內容
print(ubike_data[0].keys())  # 看看這個API有什麼Key可以用


# 印出「沒有可借單車」的站點名稱
print("以下站點無可借用的 Ubike")
for station in ubike_data: 
    if station["available_rent_bikes"] == 0:
        print(" ", station["sna"])
print("以上站點無可借用的 Ubike")`
            }
          },
          {
            detailTitle: "抓取帶有參數的 JSON API",
            detailSubtitle: "抓取 Wikipedia 頁面原始內容，以 JSON 格式回傳",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
import pprint

api_url = "https://zh.wikipedia.org/w/api.php"

# 設定參數
api_params = {
    "format": "json",     # 決定API回傳的格式，常見有json, jsonfm, xml, xmlfm
    "action": "query",    # 指明呼叫哪個API模組／動作
    "titles": "椎名林檎",  # 要查詢的維基百科頁面標題
    "prop": "revisions",  # 指明擷取哪一類頁面屬性（property）
    "rvprop": "content"   # revisions的子參數，用來指定要在修訂資料中包含哪些欄位
}
headers = {"User-Agent": "MyWikiApp/1.0 (https://example.com/)"}  # 寫User-Agent，避免被Wikipedia API過濾掉

wiki_data = requests.get(api_url, params=api_params, headers=headers).json()
pprint.pprint(wiki_data["query"]["pages"]["263745"]["revisions"][0]["*"])`
            }
          },
          {
            detailTitle: "抓取帶有參數的 XML API，並存成 .html 檔",
            detailSubtitle: "抓取 XML 格式的資料，並儲存成 .html 檔，方便瀏覽。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests

api_base_url = "https://zh.wikipedia.org/w/api.php"

# 設定參數
api_params = {
    "format": "xmlfm",     # 決定API回傳的格式，常見有json, jsonfm, xml, xmlfm
    "action": "query",     # 指明呼叫哪個API模組／動作
    "titles": "Google",    # 要查詢的維基百科頁面標題
    "prop": "revisions",   # 指明擷取哪一類頁面屬性（property）
    "rvprop": "content"    # revisions的子參數，用來指定要在修訂資料中包含哪些欄位
}
headers = {"User-Agent": "MyWikiApp/1.0 (https://example.com/)"}  # 寫User-Agent，避免被Wikipedia API過濾掉

wiki_data = requests.get(api_base_url, params=api_params, headers=headers)
foo = open("/Users/dongguanting/Desktop/PYTHON練習/wiki_practice.html", "w")
foo.write(wiki_data.text)
foo.close()`
            }
          }
        ]
      },
      {
        listTitle: "<code>sys.argv</code> 使用",
        listSubtitle: null,
        listCode: {
          pythonCode: null
        },
        listDetails: [
          {
            detailTitle: "<code>import argv</code> 來用 <code>sys.argv</code>",
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: 
`# sys_argv_test.py
import sys
print(sys.argv)



# 之後在終端機輸入以下指令
python3 sys_argv_test.py 齁嘿齁嘿

# 會得到以下內容
['sys_argv_test.py', '齁嘿齁嘿']`
            }
          },
          {
            detailTitle: "帶有參數的 API + <code>sys.argv</code> + 自動存檔",
            detailSubtitle: "以此例來說，可以直接輸入關鍵字，程式會去抓 Wikipedia 內容，並存成 &lt;關鍵字&gt;.html",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
import sys

search_word = sys.argv[1]  # 程式會抓到使用者傳入的搜尋字詞

api_url = "https://zh.wikipedia.org/w/api.php"
api_params = {
    "format": "xmlfm",
    "action": "query",
    "prop": "revisions",
    "rvprop": "content",
    "titles": search_word
}
headers = {"User-Agent": "MyWikiApp/1.0 (https://example.com/)"}  # 寫User-Agent，避免被Wikipedia API過濾掉

wiki_data = requests.get(api_url, params=api_params, headers=headers)
foo = open("/Users/dongguanting/Desktop/PYTHON練習/" + search_word + ".html", "w")
foo.write(wiki_data.text)
foo.close()`
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonCrawlingNote",
    title: "網路爬蟲",
    description: "<p>透過使用 <code>BeautifulSoup</code>（bs4）模組來解析 HTML 或 XML，方便擷取特定標籤與內容。</p>",
    lists: [
      {
        listTitle: "BeautifulSoup",
        listSubtitle: null,
        listCode: {
          pythonCode: null,
        },
        listDetails: [
          {
            detailTitle: "<code>BeautifulSoup</code> 基本用法",
            detailSubtitle: "建立一個簡單 HTML，並用 <code>BeautifulSoup</code> 解析。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`from bs4 import BeautifulSoup
soup = BeautifulSoup("<html> Lollipop </html>", "html.parser")
print(soup)`
            }
          },
          {
            detailTitle: "用 <code>BeautifulSoup</code> 抓標題",
            detailSubtitle: "從網頁中找到 <code>&lt;title&gt;</code> 標籤。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
from bs4 import BeautifulSoup

html_data = requests.get("https://quanting56.github.io/Antinant/index.html")
soup = BeautifulSoup(html_data.text, "html.parser")
print(soup.title)`
            }
          },
          {
            detailTitle: "RSS 解析",
            detailSubtitle: "以 Yahoo 股市為例，抓 Yahoo 股市新聞 RSS，輸出每一則新聞的標題。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
from bs4 import BeautifulSoup

yahoo_stock_news_xml = requests.get("https://tw.stock.yahoo.com/rss?category=tw-market")
soup = BeautifulSoup(yahoo_stock_news_xml.text, "html.parser")  # 用"html.parser"解析RSS（其實是XML，但html.parser也能處理）

# print出所有<item>標籤裡的<title>文字
for news in soup.find_all("item"):
    print(news.title.string)`
            }
          },
          {
            detailTitle: "擷取自定區塊",
            detailSubtitle: "從指定網頁中找出特定區塊，並輸出裡面的文字（像是標題與副標題）。",
            detailContent: null,
            detailCode: {
              pythonCode: 
`import requests
from bs4 import BeautifulSoup

website_html = requests.get("https://quanting56.github.io/Antinant/index.html")
website_html.encoding = "UTF-8"  # 指定網頁編碼，避免中文字出現亂碼
soup = BeautifulSoup(website_html.text, "html.parser")

for website in soup.find_all(class_ = "col"):  # 這裡的"class_"為html裡面的class屬性
    print(
        website.find(class_ = "semi-nav-button").find("strong").string + "｜" +
        website.find(class_ = "semi-nav-button").find("span").string
    )`
            }
          }
        ]
      }
    ]
  },
  {
    id: "pythonTkinterNote",
    title: "Tkinter",
    description: "<p>Vue.js 可以透過多種方式使用，依據不同的需求，選擇最適合的方法。（From ChatGPT）</p>",
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listCode: {
          pythonCode: null,
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  },
  {
    id: "python???Note",
    title: "？？？",
    description: null,
    lists: [
      {
        listTitle: null,
        listSubtitle: null,
        listCode: {
          pythonCode: null,
        },
        listDetails: [
          {
            detailTitle: null,
            detailSubtitle: null,
            detailContent: null,
            detailCode: {
              pythonCode: null,
            }
          }
        ]
      }
    ]
  }
];