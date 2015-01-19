# webform
Webform with angularjs , nodejs and nodemailer serivce

WEBFORM DEMONSTRATION<br />
AUTHOR: TOMMY THONG NGUYEN<br />
PHONE:248-840-4552<br />

1. Install Nodejs (if your machine does not have it):<br />
    +Go to : http://nodejs.org/download/     and download and install it.<br />
    +Test nodejs:  on your termimal: Type: node -v       <br />
+ Move into www folder:  cd webform/www   <br />
and type:    node install      : this will install all modules need for webform.
Finally type: node server.js    : this will run the node server at port 3000.

2. Setup maven:
+Check if maven already installed in your pc:   
.In your terminal type: mvn –version        It will show you maven version like: Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 11:22:22-0400)


+If node then you need to install it 
+for mac: type in terminal: brew install maven30.
+For window: https://www.youtube.com/watch?v=Jtj-0yhox5s
+Check for maven: mvn –version
+Run maven: go to webform folder and type: mvn jetty:run
it will run at port 9003
3. Edit the webform/server.js  file:
Open the server.js file, in line 58  and change it to your email 
4. Run the webform:
In your web browser(prefer Chorme), type: 
http://localhost:9003/webform/


Click “SEND BUTTON”, you should see:


Check node server terminal 









Go to your email that you enter on Server.js line 58 and check, you would see

