<h1>Webform with angularjs , nodejs and nodemailer serivce</h1><br /><br />

<h3>WEBFORM DEMONSTRATION<br />
AUTHOR: TOMMY THONG NGUYEN<br />
PHONE:248-840-4552</h3><br />

1. Install Nodejs (if your machine does not have it):<br />
    +Go to : http://nodejs.org/download/     and download and install it.<br />
    +Test nodejs:  on your termimal: Type: node -v       <br />
        ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/checknodejs.png) <br />
    + Move into www folder:  cd webform/www   <br />
                and type:    node install      : this will install all modules need for webform.<br />
                Finally type: node server.js    : this will run the node server at port 3000.<br /><br />

2. Edit the webform/server.js  file:<br />
    +Open the server.js file, in line 58  and change it to your email 
    ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/server.png)<br /><br />
3. Run the webform:<br />
    +Double click on index.hmtl file <br />
    +Fill out the information for the form<br />
    ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/form.png)
    +Click “SEND BUTTON”, you should see:
    ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/log.png)<br />
    +Check node server terminal, you will see 
    ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/nodescreen.png)<br />

    +Go to your email that you enter on Server.js line 58. You would see the new email "webformservice@gmail.com"
    ![ScreenShot](https://raw.githubusercontent.com/tommythongnguyen/webform/master/image/email.png)<br /><br />
4.ENJOY<br /><br /><br />

II.<h1>What i used for this project</h1><br />
1. ANGULARJS<br />
2. BOOTSTRAP<br />
3. NODEJS<br />
4. NODEEMAILER<br />
5. HTML AND CSS




