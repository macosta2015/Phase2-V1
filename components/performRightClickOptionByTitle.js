//March 26 Mario Acosta
//
// performRightClickOptionByTitle.js

async function performRightClickOptionByTitle(newPage, selector, title) {
    console.log('Right-clicked started.');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('Waited for 10 seconds.');

    // Click on the element with the specified title
    const elements = await newPage.$$(`${selector}[data-bs-original-title="${title}"]`);
    if (elements.length > 0) {
        await elements[0].click({ button: 'right' });
        console.log(`Clicked on element with title "${title}".`);
    } else {
        throw new Error(`No element found with title "${title}" using selector "${selector}".`);
    }

    console.log('Right-clicked successfully.');

    // Here you can wait for a specific context-menu-item-span element
    const menuItemSelector = '.context-menu-item-span';
    await newPage.waitForSelector(menuItemSelector, { visible: true });
    console.log('Waited for context menu item to appear.');

    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Waited for 5 seconds.');

    const editOptions3 = await newPage.evaluate(() => {
        const menuItems = document.querySelectorAll('.context-menu-item-span');
        return Array.from(menuItems).map(item => item.textContent.trim());
    });
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Retrieved edit options.');

    console.log('Right-clicked ended.');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Waited for 5 seconds.');

    return editOptions3;
}

module.exports = { performRightClickOptionByTitle };
