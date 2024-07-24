// main.js
const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { performTest } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const pasteIntoSketchFunction = require('./components/pasteIntoSketchFunction.js');
const editIntoSketchFunction = require('./components/editIntoSketchFunction.js');
const renameIntoSketchFunction = require('./components/renameIntoSketchFunction.js');
const waitForEnter = require('./components/waitForEnter.js');
const searchAndClickTransform = require('./components/searchAndClickTransform.js');
const searchAndClickCustomExtrude2 = require('./components/searchAndClickCustomExtrude2.js');
const searchAndClickExtrude = require('./components/searchAndClickExtrude.js');
const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');

(async () => {
    try {

         // Launch browser and navigate to the document
         const newPage = await launchBrowserAndNavigateToDocument(); // Ensure this returns a newPage object

         // NEW SKETCH
         // await performTest(newPage);
 
         // Adding extrude function to the code
        //ORIGINAL GOOD  const desiredIndex = 5;
        const desiredIndex = 7;
         await clickButtonByIndex(newPage, desiredIndex);
 
         // Right-click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = '(1) Initial Sketch'; // Replace with the desired title
        const selector = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title = '(3) Extrude Sketch(1.03) did not regenerate properly: Select a sketch plane.'; // Replace with the desired title
 
         // Wait for user input
         console.log("AAAAAAAAAA");
         await waitForEnter();
         console.log("BBBBBBBBBB");
 
         // Perform right-click and handle options
        //  console.log('Waiting 10 seconds.');
        //  await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
 
         // Perform right-click on the specified element
         console.log('Right-clicking on the specified element.');
         const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
         console.log(editOptions3);
 
 
         console.log("CCCCCCCCCC");
         await waitForEnter();
         console.log("DDDDDDDDDD");


        // Use the retrieved options for further actions (e.g., copySketchFunction)
        console.log('copySketchFunction')
        copySketchFunction(editOptions3, newPage);
 

         // Select sketch to click or unclick
         console.log('Waiting 10 seconds.');
         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
         await newPage.evaluate(() => {
             const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
             if (thirdButton) {
                 thirdButton.click();
                 thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
             } else {
                 console.error('Third button not found.');
             }
         });
         console.log("Third button clicked and scrolled into view.");
 

         console.log("DDDDDDDDDDD");
         await waitForEnter();
         console.log("EEEEEEEEEEE");

         
         // Select sketch to click or unclick again
         console.log('Waiting 10 seconds.');
         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
         await newPage.evaluate(() => {
             const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
             if (thirdButton) {
                 thirdButton.click();
                 thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
             } else {
                 console.error('Third button not found.');
             }
         });
         console.log("Third button clicked and scrolled into view again.");
 
         console.log("HHHHHHHHHHHHHH");
         // Edit operation
         console.log('Waiting 10 seconds.');
         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
 
         const desiredIndex3 = 7; // Or any other desired index
         await clickButtonByIndex(newPage, desiredIndex3);
 
         console.log('Waiting 10 seconds before editing.');
         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
 
         const selector3 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
         const title3 = 'Second Sketch'; // Replace with the desired title
         const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
         console.log(editOptions4);
 
         // Perform the edit function
         console.log('editIntoSketchFunction')
         editIntoSketchFunction(editOptions4, newPage);
 
         console.log('Waiting 40 seconds after edit.');
         await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 40 seconds
         console.log('AFTER THE CODE RUNS.');
 
         console.log("IIIIIIIIIIIIIII");
 
    




        console.log("JJJJJJJJJJJJJJ")
        ////////////////////
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        console.log("KKKKKKKKKKKK")
        ////////////////////
        await searchAndClickTransform(newPage);



        console.log('After waiting for the transform function')
        console.log("LLLLLLLLLLLL")


        //         // //RENAME
        //         // console.log('Waited for 5 seconds.');
        //         // console.log('WE START THE RENAME PHASE');
        //         // await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5
        //         // //ALL THE CODE TOGETHERx
        //         // const desiredIndex3 = 7; // Or any other desired index
        //         // await clickButtonByIndex(newPage, desiredIndex3);
        //         // //Right click option 
        //         // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        //         // const title3 = 'Sketch 1'; // Replace with the desired title
        //         // const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        //         // console.log(editOptions4);
        //         // //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        //         // renameIntoSketchFunction(editOptions4, newPage);
        //         // await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        //         // console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');




        //         //WE ARE CHECKING ENDING OF EDIT OPTIONS
        //         console.log('Waited for 10 seconds.');
        //         await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //         console.log('Typing "Third Sketch"...');
        //         await newPage.keyboard.type('Third Sketch');
        //         await new Promise(resolve => setTimeout(resolve, 5000));



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("MMMMMMMMMM")








        //MOVING TO THE THIRD SKETCH
        console.log('moving to the third sketch')
        //ALL THE CODE TOGETHER
        // const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = 'First Sketch'; // Replace with the desired title
        const editOptions5 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions5);
        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        console.log('copySketchFunction')
        copySketchFunction(editOptions5, newPage);
        console.log("NNNNNNNNNNNN")





        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("OOOOOOOOOOOOOO")




        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });









        console.log("PPPPPPPPP")
        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('pasteIntoSketchFunction');
        console.log('pasteIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        const desiredIndex8 = 8; //IMPORTANT PART THAT MAKES THE CODE RUN!
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        console.log('Waiting 5 seconds.');
        await clickButtonByIndex(newPage, desiredIndex8);
        //Right click option
        const selector8 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const selector8 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title8 = 'Third Sketch'; // Replace with the desired title
        const editOptions8 = await performRightClickOptionByTitle(newPage, selector8, title8);
        console.log(editOptions8);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('pasteIntoSketchFunction');
        pasteIntoSketchFunction(editOptions8, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("QQQQQQQQQQ")




        console.log("RRRRRRRRRRRRRRRRR")
        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("SSSSSSSSSSSSSSSSS")






        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("TTTTTTTTTTTTTT")






        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction')
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex4 = 8; // IMPORTANT (NEEDS TO BE THE SAME AS THE SELECTOR) Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex4);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        // const selector4 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const selector4 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const title4 = 'Second Sketch'; // Replace with the desired title
        const title4 = 'Third Sketch'; // Replace with the desired title
        const editOptions6 = await performRightClickOptionByTitle(newPage, selector4, title4);
        console.log(editOptions6);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('editIntoSketchFunction')
        editIntoSketchFunction(editOptions6, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("QQQQQQQQQQQQQQ")








        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')





        ////////////////////
        await waitForEnter();
        console.log("LLLLLLLLLLLLLLLLL")
        ////////////////////
















        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');



    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
