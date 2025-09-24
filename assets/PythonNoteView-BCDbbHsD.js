import{_ as I,r as P,k as A,o as L,p as v,c as i,b as n,g as R,F as g,d as C,u as E,w as M,T as q,f as l,j as N,t as y,h as s,i as x}from"./index-B1OBybhT.js";import{H as f}from"./vs2015-txMzNINg.js";const O=[{id:"pythonExceptionHandlingNote",title:"例外處理",description:"<p>Python 的例外處理（Exception Handling） <code>try...except...finally</code>，約相當於 JavaScript 的 <code>try...catch...finally</code>，但兩者仍有些微的不同。</p>",lists:[{listTitle:"例外處理 <code>try...except...finally</code> ",listSubtitle:null,listCode:{pythonCode:`try:
    x = 60 / 0
except ZeroDivisionError:   # 如果是除以零的錯誤，就跑這裡
    print("不能除以零")
except Exception as e:      # 其他任何錯誤就跑這裡，並把錯誤物件取名為e
    print("其他錯誤:", e)
else:                       # 如果try區塊沒有錯誤，才會執行這裡
    print("沒有錯誤時會執行")
finally:                    # 不管有沒有錯誤，這裡一定會執行
    print("無論是否發生錯誤都會執行")`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]}]},{id:"pythonOopNote",title:"物件導向程式設計（OOP）",description:"<p>Python 的 <strong>物件導向程式設計（OOP）</strong> ，用到 <strong>類別（class）</strong>、<strong>繼承（inheritance）</strong>、<strong>方法（method）</strong> 。</p>",lists:[{listTitle:"一個例子",listSubtitle:null,listCode:{pythonCode:`class animalBaseClass:            # 定義一個基底類別 (父類別)
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
# 0`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]}]},{id:"pythonTimeNote",title:"時間模組",description:"<p>使用 Python 標準函式庫，操作日曆（<code>calendar</code> 模組）和日期時間（<code>datetime</code> 模組）。</p>",lists:[{listTitle:"<code>calendar</code> 模組",listSubtitle:null,listCode:{pythonCode:`import calendar
print(calendar.month(2025,9))  # 印出2025年9月的月曆
print(calendar.isleap(2000))  # 檢查2000年是否為閏年
# True`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]},{listTitle:"<code>datetime</code> 模組",listSubtitle:null,listCode:{pythonCode:`import datetime
print(datetime.date.today())  # 取得今天的日期
print(datetime.datetime.now())  # 取得現在時間
print(datetime.datetime.now() + datetime.timedelta(7))  # 取得「現在時間+7天」的時間戳記`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]}]},{id:"pythonZipProcessNote",title:"解壓縮/壓縮 zip",description:"<p><code>import zipfile</code> ，解壓縮 zip 或壓縮 zip。</p>",lists:[{listTitle:"解壓縮 zip",listSubtitle:null,listCode:{pythonCode:`import zipfile

# 解壓縮
files = zipfile.ZipFile("/Users/dongguanting/Downloads/python-3.5.1-embed-win32.zip")
print(files.namelist())  # 顯示zip裡包含了哪些檔案

# 方法一，解壓縮成"python.exe"這個檔案到路徑
files.extract("python.exe", r"/Users/dongguanting/Downloads")

# 方法二，解壓縮全部檔案到路徑
files.extractall("/Users/dongguanting/Downloads")

files.close()  # 關閉檔案物件`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]},{listTitle:"壓縮 zip",listSubtitle:null,listCode:{pythonCode:`import zipfile

# 壓縮檔案
zip_file = zipfile.ZipFile("/Users/dongguanting/Downloads/python.zip", mode="w")  # 壓縮後的檔名
zip_file.write("/Users/dongguanting/Downloads/python.exe")  # 要壓縮的檔案
zip_file.close()  # 關閉檔案物件`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]}]},{id:"pythonOpenNote",title:"存取檔案物件",description:"<p>使用 <code>open()</code> 建立 <strong>檔案物件</strong> ，並進行操作。</p>",lists:[{listTitle:"存取檔案物件",listSubtitle:null,listCode:{pythonCode:`# 開啟檔案
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
    print(monkey.read())`},listDetails:[{detailTitle:null,detailSubtitle:null,detailContent:null,detailCode:{pythonCode:null}}]}]},{id:"pythonPillowNote",title:"影像處理",description:"<p>透過 <code>from PIL import Image</code>，使用 Python 的 Pillow (PIL, Python Imaging Library) 影像處理函式庫，可以進行圖片讀取、顯示、轉換與保存。</p>",lists:[{listTitle:"一些基本的影像處理",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"開啟圖片",detailSubtitle:"開啟一張圖片並顯示。",detailContent:null,detailCode:{pythonCode:`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
image.show()`}},{detailTitle:"<code>R</code>、<code>G</code>、<code>B</code> 交換顏色",detailSubtitle:"拆分 RGB 通道，然後交換通道，再存成新檔。",detailContent:null,detailCode:{pythonCode:`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
r, g, b = image.split()  # 拆成R、G、B三個色彩通道
convert_image = Image.merge("RGB", (b, g, r))  # 重新合併（交換R、B）
convert_image.show()
convert_image.save("sample_image/rgb_to_bgr.jpg")`}},{detailTitle:"將圖片轉成黑與白（只有黑與白）",detailSubtitle:"將圖片轉換成只由純黑與純白兩種像素構成的圖片。",detailContent:null,detailCode:{pythonCode:`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
black_and_white = image.convert("1")  # 轉為1-bit黑白
black_and_white.show()
black_and_white.save("sample_image/b_and_w.jpg")`}},{detailTitle:"將圖片轉成灰階",detailSubtitle:"將圖片轉換成灰階圖片。",detailContent:null,detailCode:{pythonCode:`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")
gray_image = image.convert("L")  # 轉為8-bit灰階
gray_image.show()
gray_image.save("sample_image/gray_image.jpg")`}},{detailTitle:"將圖片旋轉",detailSubtitle:"將圖片旋轉，並存成新檔",detailContent:null,detailCode:{pythonCode:`from PIL import Image
image = Image.open("sample_image/IMG_2560.JPG")

# 轉換到不同角度、方式
image.transpose(Image.ROTATE_90).show()        # 旋轉90度
image.transpose(Image.ROTATE_180).show()       # 旋轉180度
image.transpose(Image.ROTATE_270).show()       # 旋轉270度
image.transpose(Image.FLIP_LEFT_RIGHT).show()  # 左右翻轉
image.transpose(Image.FLIP_TOP_BOTTOM).show()  # 上下翻轉

image.transpose(Image.ROTATE_90).save("sample_image/ratate_90.jpg")  #旋轉90度並存成新檔`}}]}]},{id:"pythonApiDataProcessingNote",title:"API 資料處理",description:`<p>
  <ol style="padding-left: 16px; line-height: 1.7;">
    <li><code>import requests</code>：發出 HTTP 請求以抓取網頁或 API 資料。</li>
    <li><code>import pprint</code>：美化輸出的 JSON / dict，以方便閱讀。</li>
    <li><code>import sys</code>：讀取在命令列輸入的參數，以抓取特定目標資料。</li>
  </ol>
</p>`,lists:[{listTitle:"<code>requests</code> 模組",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"基本網頁抓取",detailSubtitle:null,detailContent:null,detailCode:{pythonCode:`import requests
r = requests.get("https://quanting56.github.io/Antinant/index.html")
print(r.text)`}}]},{listTitle:"API 資料處理",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"抓取一般 JSON API",detailSubtitle:"抓取「臺北市 YouBike 2.0 即時借車狀況 API」。",detailContent:null,detailCode:{pythonCode:`import requests
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
print("以上站點無可借用的 Ubike")`}},{detailTitle:"抓取帶有參數的 JSON API",detailSubtitle:"抓取 Wikipedia 頁面原始內容，以 JSON 格式回傳",detailContent:null,detailCode:{pythonCode:`import requests
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
pprint.pprint(wiki_data["query"]["pages"]["263745"]["revisions"][0]["*"])`}},{detailTitle:"抓取帶有參數的 XML API，並存成 .html 檔",detailSubtitle:"抓取 XML 格式的資料，並儲存成 .html 檔，方便瀏覽。",detailContent:null,detailCode:{pythonCode:`import requests

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
foo.close()`}}]},{listTitle:"<code>sys.argv</code> 使用",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"<code>import argv</code> 來用 <code>sys.argv</code>",detailSubtitle:null,detailContent:null,detailCode:{pythonCode:`# sys_argv_test.py
import sys
print(sys.argv)



# 之後在終端機輸入以下指令
python3 sys_argv_test.py 齁嘿齁嘿

# 會得到以下內容
['sys_argv_test.py', '齁嘿齁嘿']`}},{detailTitle:"帶有參數的 API + <code>sys.argv</code> + 自動存檔",detailSubtitle:"以此例來說，可以直接輸入關鍵字，程式會去抓 Wikipedia 內容，並存成 &lt;關鍵字&gt;.html",detailContent:null,detailCode:{pythonCode:`import requests
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
foo.close()`}}]}]},{id:"pythonCrawlingNote",title:"網路爬蟲",description:"<p>透過使用 <code>BeautifulSoup</code>（bs4）模組來解析 HTML 或 XML，方便擷取特定標籤與內容。</p>",lists:[{listTitle:"BeautifulSoup",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"<code>BeautifulSoup</code> 基本用法",detailSubtitle:"建立一個簡單 HTML，並用 <code>BeautifulSoup</code> 解析。",detailContent:null,detailCode:{pythonCode:`from bs4 import BeautifulSoup
soup = BeautifulSoup("<html> Lollipop </html>", "html.parser")
print(soup)`}},{detailTitle:"用 <code>BeautifulSoup</code> 抓標題",detailSubtitle:"從網頁中找到 <code>&lt;title&gt;</code> 標籤。",detailContent:null,detailCode:{pythonCode:`import requests
from bs4 import BeautifulSoup

html_data = requests.get("https://quanting56.github.io/Antinant/index.html")
soup = BeautifulSoup(html_data.text, "html.parser")
print(soup.title)`}},{detailTitle:"RSS 解析",detailSubtitle:"以 Yahoo 股市為例，抓 Yahoo 股市新聞 RSS，輸出每一則新聞的標題。",detailContent:null,detailCode:{pythonCode:`import requests
from bs4 import BeautifulSoup

yahoo_stock_news_xml = requests.get("https://tw.stock.yahoo.com/rss?category=tw-market")
soup = BeautifulSoup(yahoo_stock_news_xml.text, "html.parser")  # 用"html.parser"解析RSS（其實是XML，但html.parser也能處理）

# print出所有<item>標籤裡的<title>文字
for news in soup.find_all("item"):
    print(news.title.string)`}},{detailTitle:"擷取自定區塊",detailSubtitle:"從指定網頁中找出特定區塊，並輸出裡面的文字（像是標題與副標題）。",detailContent:null,detailCode:{pythonCode:`import requests
from bs4 import BeautifulSoup

website_html = requests.get("https://quanting56.github.io/Antinant/index.html")
website_html.encoding = "UTF-8"  # 指定網頁編碼，避免中文字出現亂碼
soup = BeautifulSoup(website_html.text, "html.parser")

for website in soup.find_all(class_ = "col"):  # 這裡的"class_"為html裡面的class屬性
    print(
        website.find(class_ = "semi-nav-button").find("strong").string + "｜" +
        website.find(class_ = "semi-nav-button").find("span").string
    )`}}]}]},{id:"pythonTkinterNote",title:"Tkinter",description:"<p><strong>Tkinter</strong> 是 Python 提供開發 GUI 應用程式的標準函式庫，是 <u><b>T</b></u>ool <u><b>K</b></u>it <u><b>I</b></u>nterface 的簡稱。以下為 Tkinter 常見元件與佈局方法，最後還有一個「QR code Generator」應用程式的範例。</p>",lists:[{listTitle:"基本元件",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"基本視窗",detailSubtitle:"建立一個最簡單的空視窗，<code>mainloop()</code> 會讓程式持續等待使用者操作。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()
base.mainloop()  # 啟動事件迴圈（event loop），程式會停在這裡，不斷等待並處理使用者互動`}},{detailTitle:"Button 按鈕",detailSubtitle:"建立按鈕，用 <code>.pack()</code> 自動排列在視窗中。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

button = tk.Button(base, text="PUSH")
button.pack()`}},{detailTitle:"多個 Button 按鈕 + Pack 佈局",detailSubtitle:"<code>.pack(side=...)</code>，<code>side</code> 有 4 個參數——<code>tk.TOP</code>、<code>tk.LEFT</code>、<code>tk.RIGHT</code>、<code>tk.BOTTOM</code>，可以分別控制靠上、靠左、靠右、靠下。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

button1 = tk.Button(base, text="push1", width=20).pack()
button2 = tk.Button(base, text="push2").pack(side=tk.LEFT)
button3 = tk.Button(base, text="push3").pack(side=tk.RIGHT)`}},{detailTitle:"多個 Button 按鈕 + Grid 佈局",detailSubtitle:"<code>.grid()</code> 用表格方式控制元件位置。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

button1 = tk.Button(base, text="push1")
button2 = tk.Button(base, text="push2")
button3 = tk.Button(base, text="push3")
button1.grid(row=0, column=0)
button2.grid(row=0, column=1)
button3.grid(row=1, column=1)`}},{detailTitle:"多個 Button 按鈕 + Place 佈局",detailSubtitle:"<code>.place(x, y)</code> 直接用座標定位元件。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

button1 = tk.Button(base, text="push1")
button2 = tk.Button(base, text="push2")
button3 = tk.Button(base, text="push3")
button1.place(x=0, y=0)
button2.place(x=50, y=30)
button3.place(x=100, y=60)`}},{detailTitle:"Button 搭配 Command",detailSubtitle:"透過 <code>command</code> 設定按鈕點即時的處理。此例中，按下按鈕會執行 <code>push()</code> 函式。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

def push():
    print("Hello World!")

button = tk.Button(base, text="PUSH", command=push).pack()`}},{detailTitle:"Label",detailSubtitle:"建立 Label 標籤，可設定文字、背景色、寬度。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

tk.Label(base, text="紅", bg="red", width=20).pack()
tk.Label(base, text="綠", bg="green", width=20).pack()
tk.Label(base, text="藍", bg="blue", width=20).pack()`}},{detailTitle:"CheckButton（複選框）",detailSubtitle:"建立複選框 CheckButton，透過 <code>BooleanVar()</code> 記錄是否勾選。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

topping = {0: "海苔", 1: "水煮蛋", 2: "豆芽菜", 3: "叉燒"}
check_value = {}
for i in range(len(topping)):
    check_value[i] = tk.BooleanVar()
    tk.Checkbutton(base, variable=check_value[i], text=topping[i]).pack(anchor=tk.W)  # "anchor=tk.W"代表固定於基本視窗的西側(West)

def buy():
    for i in check_value:
        if check_value[i].get() == True:
            print(topping[i])

tk.Button(base, text="點菜", command=buy).pack()`}},{detailTitle:"RadioButton（單選框）",detailSubtitle:"建立單選框 Radiobutton，透過 <code>IntVar()</code> 記錄選項值。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

radio_value = tk.IntVar()
radio_value.set(1)
lunch = {0: "A套餐", 1: "B套餐", 2: "C套餐"}
tk.Radiobutton(base, text=lunch[0], variable=radio_value, value=0).pack()
tk.Radiobutton(base, text=lunch[1], variable=radio_value, value=1).pack()
tk.Radiobutton(base, text=lunch[2], variable=radio_value, value=2).pack()

def buy():
    value = radio_value.get()
    print(lunch[value])

tk.Button(base, text="點菜", command=buy).pack()`}},{detailTitle:"MessageBox",detailSubtitle:"彈出對話框，可能有選項，例如詢問使用者是否要選「Yes / No」。",detailContent:`tkinter 提供了 8 種 MessageBox：
<table style="margin-bottom: 24px;">
  <thead>
    <tr>
      <th>方法名稱</th>
      <th>功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>askokcancel()</code></td>
      <td>OK / Cancel</td>
    </tr>
    <tr>
      <td><code>askquestion()</code></td>
      <td>Yes / No</td>
    </tr>
    <tr>
      <td><code>askretrycancel()</code></td>
      <td>Retry / Cancel</td>
    </tr>
    <tr>
      <td><code>askyesno()</code></td>
      <td>Yes / No</td>
    </tr>
    <tr>
      <td><code>askyesnocancel()</code></td>
      <td>Yes / No / Cancel</td>
    </tr>
    <tr>
      <td><code>showerror()</code></td>
      <td>顯示錯誤圖示與訊息<br />（只有用於關閉視窗的 OK 按鈕）</td>
    </tr>
    <tr>
      <td><code>showinfo()</code></td>
      <td>顯示錯誤圖示與訊息<br />（只有用於關閉視窗的 OK 按鈕）</td>
    </tr>
    <tr>
      <td><code>showwarning()</code></td>
      <td>顯示錯誤圖示與訊息<br />（只有用於關閉視窗的 OK 按鈕）</td>
    </tr>
  </tbody>
</table>`,detailCode:{pythonCode:`import tkinter as tk
from tkinter import messagebox
base = tk.Tk()  # 建立視窗
base.withdraw()  # 隱藏建立的視窗

response = tk.messagebox.askyesno("糟糕！！！", "還好嗎？")  # askyesno(MessageBox標題, MessageBox顯示文字)

if (response == True):
    print("沒問題")
else:
    print("有問題")`}},{detailTitle:"Entry（輸入框） + Label",detailSubtitle:"輸入框 <code>Entry()</code> 與標籤 <code>Label()</code> 綁定變數，輸入會即時顯示。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

string = tk.StringVar()  # 用以操作字串
entry = tk.Entry(base, textvariable=string).pack()  # 建立輸入欄
label = tk.Label(base, textvariable=string).pack()  # 建立Label`}},{detailTitle:"Menu 選單",detailSubtitle:"製作上方功能選單，可以點選觸發動作。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
base = tk.Tk()

def supermode():
    print("super mode!")

menubar = tk.Menu(base)
filemenu = tk.Menu(menubar)
filemenu.add_command(label="super mode", command=supermode)
menubar.add_cascade(label="Operation", menu=filemenu)
base.config(menu=menubar)  # 製作選單列`}},{detailTitle:"Menu + FileDialog",detailSubtitle:"增加檔案操作選單，包含「開啟檔案」、「退出」、「尋找」等。",detailContent:null,detailCode:{pythonCode:`import tkinter as tk
from tkinter import filedialog
base = tk.Tk()

def open():
    filename = filedialog.askopenfilename()
    print("open file => " + filename)

def exit():
    base.destroy()

def find():
    print("find!")

menubar = tk.Menu(base)
filemenu = tk.Menu(menubar)
menubar.add_cascade(label="File", menu=filemenu)
filemenu.add_command(label="open", command=open)
filemenu.add_separator()
filemenu.add_command(label="exit", command=exit)
editmenu = tk.Menu(menubar)
menubar.add_cascade(label="Edit", menu=editmenu)
editmenu.add_command(label="find", command=find)
base.config(menu=menubar)`}}]},{listTitle:"一個範例",listSubtitle:null,listCode:{pythonCode:null},listDetails:[{detailTitle:"使用指令生成 QR code",detailSubtitle:null,detailContent:null,detailCode:{pythonCode:`import qrcode

encode_text = "https://quanting56.github.io/Antinant/index.html"
img = qrcode.make(encode_text)

img.show()`}},{detailTitle:"QR code Generator",detailSubtitle:"可以將網址轉成 QR code 的 Python GUI 應用程式。",detailContent:null,detailCode:{pythonCode:`# qr_code_generator.py
import qrcode
import tkinter as tk
from tkinter import filedialog
from PIL import ImageTk

base = tk.Tk()
base.title("QRcode Generator")

input_area = tk.Frame(base, relief=tk.RAISED, bd=2)
image_area = tk.Frame(base, relief=tk.SUNKEN, bd=2)

encode_text = tk.StringVar()  # 儲存要轉成QRcode的字串
entry = tk.Entry(input_area, textvariable=encode_text)
entry.pack(side=tk.LEFT)

qr_label = tk.Label(image_area)  # 用以顯示QRcode的標籤

def generate():
    qr_label.qr_img = qrcode.make(encode_text.get())
    img_width, img_height = qr_label.qr_img.size
    qr_label.tk_img = ImageTk.PhotoImage(qr_label.qr_img)
    qr_label.config(image=qr_label.tk_img, width=img_width, height=img_height)
    qr_label.pack()

encode_button = tk.Button(input_area, text="QRcode!", command=generate)
encode_button.pack(side=tk.LEFT)  # 建立按鈕

input_area.pack(pady=5)  # 繪製
image_area.pack(padx=3, pady=1)  # 繪製

# 儲存選單
def save():
    filename = filedialog.asksaveasfilename(title="命令後進行儲存", initialfile="qrcode.png")
    if filename and hasattr(qr_label, "qr_img"):
        qr_label.qr_img.save(filename)

# 結束選單
def exit():
    base.destroy()

# 建立選單畫面
menubar = tk.Menu(base)
filemenu = tk.Menu(menubar)
menubar.add_cascade(label="File", menu=filemenu)
filemenu.add_command(label="save", command=save)
filemenu.add_separator()
filemenu.add_command(label="exit", command=exit)
base.config(menu=menubar)

base.mainloop()`}}]}]}];function D(o){const p=o.regex,d=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],e={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},t={className:"meta",begin:/^(>>>|\.\.\.) /},b={className:"subst",begin:/\{/,end:/\}/,keywords:e,illegal:/#/},h={begin:/\{\{/,relevance:0},_={className:"string",contains:[o.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,t],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[o.BACKSLASH_ESCAPE,t],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[o.BACKSLASH_ESCAPE,t,h,b]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[o.BACKSLASH_ESCAPE,t,h,b]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[o.BACKSLASH_ESCAPE,h,b]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[o.BACKSLASH_ESCAPE,h,b]},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE]},u="[0-9](_?[0-9])*",S=`(\\b(${u}))?\\.(${u})|\\b(${u})\\.`,c=`\\b|${a.join("|")}`,k={className:"number",relevance:0,variants:[{begin:`(\\b(${u})|(${S}))[eE][+-]?(${u})[jJ]?(?=${c})`},{begin:`(${S})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${c})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${c})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${c})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${c})`},{begin:`\\b(${u})[jJ](?=${c})`}]},B={className:"comment",begin:p.lookahead(/# type:/),end:/$/,keywords:e,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},w={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:e,contains:["self",t,k,_,o.HASH_COMMENT_MODE]}]};return b.contains=[_,k,t],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:e,illegal:/(<\/|\?)|=>/,contains:[t,k,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},_,B,o.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,d],scope:{1:"keyword",3:"title.function"},contains:[w]},{variants:[{match:[/\bclass/,/\s+/,d,/\s*/,/\(\s*/,d,/\s*\)/]},{match:[/\bclass/,/\s+/,d]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[k,w,_]}]}}const H={class:"python-note-view"},F={class:"layout"},U={class:"sidebar"},G=["onClick"],z={class:"content-title"},$=["innerHTML"],j={key:1,class:"content-body"},K=["innerHTML"],J=["innerHTML"],W={key:1,class:"code"},V={class:"language-python"},Y={key:2},Q=["innerHTML"],X=["innerHTML"],Z=["innerHTML"],ee={key:2,class:"code"},te={class:"language-python"},ie={__name:"PythonNoteView",setup(o){const p=O,d=P(p[0].id),a=A(()=>p.find(m=>m.id===d.value)||p[0]);f.registerLanguage("python",D),L(()=>{v(()=>f.highlightAll())});function T(){v(()=>{document.querySelectorAll("pre code").forEach(m=>{delete m.dataset.highlighted}),f.highlightAll()})}return(m,r)=>(l(),i("div",H,[n("div",F,[n("nav",U,[n("ul",null,[(l(!0),i(g,null,C(E(p),e=>(l(),i("li",{key:e.id,class:N({active:e.id===d.value}),onClick:t=>d.value=e.id},y(e.title),11,G))),128))])]),R(q,{name:"fade",mode:"out-in",onAfterEnter:T},{default:M(()=>[a.value?(l(),i("section",{class:"content",key:a.value.id},[n("h3",z,y(a.value.title),1),r[2]||(r[2]=n("hr",null,null,-1)),a.value.description?(l(),i("div",{key:0,class:"description",innerHTML:a.value.description},null,8,$)):s("",!0),a.value.lists.length&&a.value.lists[0].listTitle?(l(),i("ul",j,[(l(!0),i(g,null,C(a.value.lists,e=>(l(),i("li",{key:e.listTitle,class:"list"},[n("h4",{class:"list-title",innerHTML:e.listTitle},null,8,K),e.listSubtitle?(l(),i("div",{key:0,class:"list-subtitle",innerHTML:e.listSubtitle},null,8,J)):s("",!0),e.listCode.pythonCode?(l(),i("div",W,[e.listCode.pythonCode?(l(),i(g,{key:0},[r[0]||(r[0]=x(" Python code: ")),n("pre",null,[n("code",V,y(e.listCode.pythonCode),1)])],64)):s("",!0)])):s("",!0),e.listDetails.length&&e.listDetails[0].detailTitle?(l(),i("ol",Y,[(l(!0),i(g,null,C(e.listDetails,t=>(l(),i("li",{key:t.detailTitle,class:"detail"},[n("h5",{class:"detail-title",innerHTML:t.detailTitle},null,8,Q),t.detailSubtitle?(l(),i("div",{key:0,class:"detail-subtitle",innerHTML:t.detailSubtitle},null,8,X)):s("",!0),t.detailContent?(l(),i("div",{key:1,class:"detail-content",innerHTML:t.detailContent},null,8,Z)):s("",!0),t.detailCode.pythonCode?(l(),i("div",ee,[t.detailCode.pythonCode?(l(),i(g,{key:0},[r[1]||(r[1]=x(" Python code: ")),n("pre",null,[n("code",te,y(t.detailCode.pythonCode),1)])],64)):s("",!0)])):s("",!0)]))),128))])):s("",!0)]))),128))])):s("",!0)])):s("",!0)]),_:1})])]))}},ae=I(ie,[["__scopeId","data-v-c6f56e93"]]);export{ae as default};
