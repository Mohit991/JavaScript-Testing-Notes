# JavaScript Testing Notes
## Course Structure
![image](https://github.com/user-attachments/assets/a68156f7-db3f-4d5d-851b-b00958150e42)  

![image](https://github.com/user-attachments/assets/4de45322-5635-4169-900c-ef662f94f1e2)  

![image](https://github.com/user-attachments/assets/65a46825-3613-405e-a333-468402e8f1cf)  

## Intro
![image](https://github.com/user-attachments/assets/426b9f08-5ee5-45be-b13e-cfc43385f962)  

Let's say we have a function to calculate interest.  
![image](https://github.com/user-attachments/assets/9d5546ba-696c-4188-8caf-f12760c14392)  

To test this function manually, we will have to do the following steps:  
![image](https://github.com/user-attachments/assets/3b85ce68-2015-46b9-8b0c-aad4031c0a15)  

We can make use of automated testing here:  
![image](https://github.com/user-attachments/assets/baf63d64-9b7f-4e9a-896a-d968418ed893)  

We can write some code to call this function directly with various inputs. 
And check if it returns the correct results.  
![image](https://github.com/user-attachments/assets/7047b604-b330-4581-b7c8-6a85477c1670)  


We execute this code with a program called a test runner.  This will display the test results in the console or the terminal window.  
![image](https://github.com/user-attachments/assets/adf0ffda-71b2-4a0c-b7a6-199aa613889b)  

If the test passes, we see a green tick otherwise we see a red cross.  
We can run any number of tests in just a few seconds.  
![image](https://github.com/user-attachments/assets/5609dc2d-9f13-412d-a844-141035ae63cb)  

We have two types of code here:
1. Prod code which is the actual code of the application.
2. Test code, which is written to test the prod code.

Benefits:  
![image](https://github.com/user-attachments/assets/af953d31-c9df-4e59-b36d-4ae456c8abce)  

![image](https://github.com/user-attachments/assets/88eb1ae5-0f9a-4a5d-b842-e51143dd0f13)

![image](https://github.com/user-attachments/assets/3d2b191a-6149-44b9-ab37-595dd7272d17)  

Should you write tests, if so, how much?
![image](https://github.com/user-attachments/assets/d0429e90-051c-4706-9fc5-cc47e7c12d35)  

![image](https://github.com/user-attachments/assets/40633922-27fc-4f8b-816d-0f68ac1baf3e)  

![image](https://github.com/user-attachments/assets/4267486c-7c6a-4fed-a076-2beb79e7d026)  

![image](https://github.com/user-attachments/assets/9664c5a1-fdc2-4a44-8d09-7c8c9bf88009)


## Types of Tests
![image](https://github.com/user-attachments/assets/b2869248-31bd-4fbd-85d4-dff507a0c490)  

### Unit Testing
Testing individual units or components of an application in isolation.  
These units can be classes or functions or modules.  
![image](https://github.com/user-attachments/assets/5ad35e84-d9c3-4bfd-9e62-60d178b758f4)  

### Integration Testing
It focuses on how different units or components of the application work together as a whole. They help identify the issues that may arise when we combine different units such as data flow problems, communication between modules, and compatibility issues. 

### End-to-End or E2E Testing
It focuses on testing the entire application as a whole.  
![image](https://github.com/user-attachments/assets/f68aafcd-ac70-4160-a8ef-23e757bb1b95)  

They simulate real user interactions with the entire system from the user interface to the backend services. They ensure that our entire application works seamlessly from the user's perspective.  

## What tests to write?
Unit Tests > Integration Tests > E2E Tests
![image](https://github.com/user-attachments/assets/7db85d29-aa15-406f-93be-6a22f0cc1f17)  

This is just an idea. 
When designing the testing strategy for your application, keep in mind the complexity of your application as well as the time and resources you have in hand.  

![image](https://github.com/user-attachments/assets/8e1230af-e3a2-443a-875c-eec605993813)  

## Testing Frameworks
![image](https://github.com/user-attachments/assets/591f27f7-d3f1-4abd-8ddb-cdb945c38ec2)  

![image](https://github.com/user-attachments/assets/b8fa4de2-c396-4153-ac11-a13fe8ee99f1)  

### Components of a Testing Framework
### Test Runner
To execute the tests.

### Assertion Libraries
To check if the code behaves as expected.

### Mocking Tools
To replace certain modules with fakes, simulating different scenarios.  

### Coverage Tools
To measure how much of the code is tested.  

![image](https://github.com/user-attachments/assets/8e27b016-3c05-40b2-813f-fcf9d96d9716)  

## Setting up Vitest
### Install the Package
`npm install -D vitest`
We will install it as a dev dependency. 

### Updating package.json
In the package.json file, we will add `"test": "vitest"` in the script.
package.json will look like this:  
![image](https://github.com/user-attachments/assets/f62e783e-01e9-496c-839b-feef7416472c)  

### Running the Tests
To run the tests, we will run the command `npm test` or `npm t`

## Writing Tests
### Code we want to Test
This is **intro.js**:  

![image](https://github.com/user-attachments/assets/96b93939-c5bb-4498-a4cc-650860748ff4)

### Creating a new Folder "tests" and creating intro.test.js file inside that folder
![image](https://github.com/user-attachments/assets/95a6a022-ff40-4e54-a74d-2a0c15a33898)  

This is the pattern `<file_name>.test.js` vitest or jest look for.  
They will pick the files with test in their names.  

### intro.test.js
![image](https://github.com/user-attachments/assets/cb174f03-8e3e-4cf2-8e38-e78a4037d1d0)  

### Running Tests
Use the command `npm t` or  `npm test` to run the test cases defined in  `intro.test.js`.  
![image](https://github.com/user-attachments/assets/9e7a3346-c024-4da1-9196-f4e2424d15a3)  

### Writing More Tests
![image](https://github.com/user-attachments/assets/d3e29899-ac07-4f00-b26e-1c5b7055cb9e)  

![image](https://github.com/user-attachments/assets/f7c3d108-d331-4544-99b1-8f934adbf621)  

## Excercise
### Code
![image](https://github.com/user-attachments/assets/79afc905-cd13-4ff8-8acc-ca01ec68f84a)  

### Test Cases
![image](https://github.com/user-attachments/assets/0546a78d-6c30-41ba-94f9-8fe0aa30f057)

### intro.test.js
![image](https://github.com/user-attachments/assets/0c7526e9-8477-4a3e-8587-e831ce8dfb62)

### Running Test Cases
![image](https://github.com/user-attachments/assets/6dd9500d-8b43-4f1e-a27d-f3385c9c9e53)  

## Test Reason Development(TDD)
Write the tests first then write the code.  
![image](https://github.com/user-attachments/assets/9d40f4bd-9f6e-4fde-a9fa-dd24ebcaf543)  

![image](https://github.com/user-attachments/assets/8221b319-c2fd-4a32-a5b1-f3c5e641f3b4)  

### We want to write a function to calculate average of all numbers of an array
Writing test cases:
![image](https://github.com/user-attachments/assets/010dcd66-aed1-4fe8-abb2-5aa53f05decc)  

Writing the function/code:
![image](https://github.com/user-attachments/assets/fff79ba2-f958-4820-b112-7bb8c55ea84d)  

### Advantages of TDD
![image](https://github.com/user-attachments/assets/24a38ad6-cef2-4c0d-a686-c0519b869f5f)

![image](https://github.com/user-attachments/assets/4a12e5a5-025a-49a0-a0e5-92c2b8d91df0)  

## Testing Factorial Function
### Code
![image](https://github.com/user-attachments/assets/ad2551ad-254e-4b57-93ab-87f1d6d83a5d)

### Tests
![image](https://github.com/user-attachments/assets/e1934c2c-6907-4ced-859e-d85db68f6ed1)  

### Complete intro.js
![image](https://github.com/user-attachments/assets/b385e1c7-33f4-4c1c-bcef-3e527541495e)  

### Complete intro.test.js
![image](https://github.com/user-attachments/assets/c2d2e890-1116-4f39-82e8-c96330f67add)  
























 
































