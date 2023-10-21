## Name: Akshun Mishra<br> College: IIT BHU Varanasi <br> Profile Applied: SDE <br> Department: Chemical Engineering

# CHAT-APP

## Steps to Run the App on your Local System 
First Open the Terminal on your local system and open a folder in the Code Editor of your Choice 
Run the Following Commands to clone the git repository to your local system
```
git clone https://github.com/akshunmish7/CHAT-APP_IMBY.git
cd CHAT-APP_IMBY
```
To Download the required Dependencies(For Client side). Run the Following Commands 
```
cd client
npm i
```
Once the Dependencies for Client side are installed then move on to the Server Side Dependencies. Run the Following Commands
```
cd ..
cd server
npm i
```

Now open two terminals one for Server Side and one for Client side By running these commands
Make sure you are in the Server Side and run
```
npm run dev
```
This will make the server run on [localhost:8000](http://localhost:8000/)<br>
Now come back to the terminal and run the following commands
```
cd ..
cd client
npm run start
```

This will make the React App run on [localhost:3000](http://localhost:3000/)<br>

Setup Video is attached below



https://github.com/akshunmish7/CHAT-APP_IMBY/assets/95397400/531970ba-227c-431b-93b5-1933c19b35c8
<br>
<br>
```diff
- Note: If at any stage an error occurs Please close the error and refresh the page to continue with the testing process
```
## Steps to Test the Chat App
### If you Enter the Chat Already Signed in (Occurs when You have Already Logged in before In your Local System)
Once the screen is opened in front of you Click on the exclamation Icon that comes next to localhost 3000 on the searchbar 
Click on Cookies and siteData (then click on )---->>> Manage Cookies and site data ---->>> Delete the localhost allowed ---->>> Click on Done ---->>> Reload the Page

### To Test the Sign Up Function
The sign in Page Appears Click on the `Sign Up` button in (Don't have an Account? Sign Up) 
<br>
-> Enter the Full Name , Email Id and Password <br>
-> Click the `Sign Up` Button after entering all the required fields <br>
-> Once the `Sign Up` button is `clicked` , Click on the `Sign in` Button just below in (Already have an account?Sign In)<br>
-> Now you are taken into the chat App with you yourself registered as a new User <br>
-> Note: If You are on the other window make sure to refresh that window to see the newly registered user
<br>
The Chat App can be tested by opening two windows one on chrome/or any other browser and one on Incognito window


### To Test the Sign in Function
The Sign In Page appears :

Sample (Already Registered) Email and Password to check Sign in 
```
1. email: abhay@chat.com
   password: 1234
2. email: sarkar@chat.com
   password: 1234
3. email: pratyaksh@chat.com
   password: 1234
4. email: jp@chat.com
   password: 1234
5. email: alok@chat.com
   password: 1234
```
After Entering the Email and Password click on the `sign in` button you are taken to the chat app
<br>
-> On the Left side the screen chat's with whom the conversation has been already created are visible <br>
-> The middle region is the room for real time Chat <br>
-> The Right Screen shows all the users registered on this Chat Application<br>
-> To initiate the conversation with any one of them click on their name and start the conversation<br>
<br>

The Video Below Demonstrates the Sign In / Sign Up and Chat-App functionality<br>
### The Chat App can be tested by opening two windows one on chrome/or any other browser and one on Incognito window with two different users logged in each of the window and then starting the Chat between them <br>
[Chat App Features Video Link](https://drive.google.com/file/d/1J6w9sqFg3ErwWzAyEf9DbLLeHauYbvPj/view?usp=sharing)
