async function copySketchFunction(editOptions3, newPage) {
    const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE

    console.log('Desired rename option:', desiredOption);
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('Searching for index of desired option...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    const desiredOptionIndex = editOptions3.indexOf(desiredOption);
    console.log('Index of desired option:', desiredOptionIndex);
    await new Promise(resolve => setTimeout(resolve, 5000));

    if (desiredOptionIndex !== -1) {
        console.log('Desired rename option found.');
        await new Promise(resolve => setTimeout(resolve, 5000));

        console.log('Evaluating option element... ', desiredOption);
        const renameOptionElement = await newPage.evaluateHandle((index) => {
            const menuItems = document.querySelectorAll('.context-menu-item-span');
            return menuItems[index];
        }, desiredOptionIndex);
        await new Promise(resolve => setTimeout(resolve, 5000));

        if (renameOptionElement) {
            console.log('Option element found.', desiredOption);
            await new Promise(resolve => setTimeout(resolve, 5000));







            await renameOptionElement.click();
            console.log(`Clicked on ${desiredOption} option element.`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        } else {
            console.error(`${desiredOption} option element not found.`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } else {
        console.error(`${desiredOption} option not found.`);
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
    console.log('Waiting 10 seconds.');
    await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

}

module.exports = copySketchFunction;