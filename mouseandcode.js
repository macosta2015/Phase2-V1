//July11 19th USA  of  2024
//Mario Acosta Automation process 

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

        //LAUNCH BROWSER AND LOGIN
        const newPage = await launchBrowserAndNavigateToDocument(); // This line should return a newPage object


        // NEW SKETCH
        // await performTest(newPage);


        //ADDING EXTRUDE FUNCTION TO THE CODE
        //ALL THE CODE TOGETHER
        const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        //ORIGINAL RUNNING CODE const title = 'First Sketch'; // Replace with the desired title
        const title = '(1) Initial Sketch'; // Replace with the desired title




        //EXTRUDE THE FUNCTION
        // await searchAndClickExtrude(newPage);
        // console.log('After waiting for the Extrude function')
        // await waitForEnter();




        // const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        // console.log(editOptions3);
        // copySketchFunction(editOptions3, newPage);



        console.log("AAAAAAAAAA")
        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("BBBBBBBBBB")





        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds






        //////NEW CODE
        (async () => {
            // Ensure the third button exists and perform the click and scroll operation
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

            console.log("AAAAAAAAAA");

            // Wait for user input or specific action (waitForEnter function not defined here)
            await waitForEnter();

            console.log("BBBBBBBBBB");

            // RIGHT CLICK
            console.log('Preparing to right-click');

            const desiredIndex1 = 6;
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
            console.log('Waiting 5 seconds.');

            await clickButtonByIndex(newPage, desiredIndex1);
            console.log('Clicked button by index:', desiredIndex1);

            // Perform right-click on the specified element
            const selector1 = 'div[data-id="XgmGAQ7RqnVg1wa8"]';
            const title1 = '(2)Extrude1(4.00) did not regenerate properly: Select face or sketch region to extrude.';

            // Debugging: Log all elements matching the selector
            const elementsDebug = await newPage.evaluate((selector) => {
                return Array.from(document.querySelectorAll(selector)).map(el => ({
                    title: el.getAttribute('data-bs-original-title'),
                    id: el.getAttribute('data-id')
                }));
            }, selector1);
            console.log('Elements matching selector:', elementsDebug);

            try {
                const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);
                console.log('Retrieved edit options:', editOptions1);
            } catch (error) {
                console.error('Error performing right-click option:', error);
            }
        })();

        async function performRightClickOptionByTitle(newPage, selector, title) {
            console.log('Right-click process started.');

            // Click on the element with the specified title
            const elements = await newPage.$$(`${selector}[data-bs-original-title="${title}"]`);
            if (elements.length > 0) {
                await elements[0].scrollIntoView();
                await elements[0].click({ button: 'right' });
                console.log(`Right-clicked on element with title "${title}".`);
            } else {
                throw new Error(`No element found with title "${title}" using selector "${selector}".`);
            }

            // Wait for context menu item to appear
            const menuItemSelector = '.context-menu-item-span';
            await newPage.waitForSelector(menuItemSelector, { visible: true });
            console.log('Context menu item appeared.');

            // Retrieve context menu items
            const editOptions = await newPage.evaluate(() => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return Array.from(menuItems).map(item => item.textContent.trim());
            });
            console.log('Retrieved context menu options:', editOptions);

            console.log('Right-click process ended.');
            return editOptions;
        }

        module.exports = { performRightClickOptionByTitle };



        //////












        ////OLD CODE
        console.log('editOptions1');
        console.log(editOptions1);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        // pasteIntoSketchFunction(editOptions1, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("DDDDDDDDDDD")






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
        console.log("EEEEEEEEEEEEE")






        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("FFFFFFFFFFFFF")





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
        console.log("GGGGGGGGGGGGGGG")





        console.log("HHHHHHHHHHHHHH")
        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex3 = 7; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex3);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        const selector3 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title3 = 'Second Sketch'; // Replace with the desired title
        const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        console.log(editOptions4);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        editIntoSketchFunction(editOptions4, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("IIIIIIIIIIIIIII")






        console.log("JJJJJJJJJJJJJJ")
        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);



        console.log('After waiting for the transform function')
        console.log("KKKKKKKKKKKK")


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
        console.log("LLLLLLLLLLLL")








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
        copySketchFunction(editOptions5, newPage);
        console.log("MMMMMMMMMMMM")





        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("NNNNNNNNNN")




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









        console.log("OOOOOOOOOO")
        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('clickButtonByIndex');
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
        pasteIntoSketchFunction(editOptions8, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("PPPPPPPPPPP")




        console.log("QQQQQQQQQQQ")
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
        console.log("RRRRRRRRRRRRR")






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
        console.log("SSSSSSSSSSSSS")






        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
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
        editIntoSketchFunction(editOptions6, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("TTTTTTTTTTTTTTT")








        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')





        ////////////////////
        await waitForEnter();
        console.log("UUUUUUUUUUUUUUUU")
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
