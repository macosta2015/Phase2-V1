async function performTest(newPage) {
    console.log('START TEST');
    console.log('Waiting for the Sketch button to appear...');
    await newPage.waitForSelector('div.toolset [command-id="newSketch"]', { visible: true });
    console.log('Sketch button found. Clicking on it...');
    await newPage.click('div.toolset [command-id="newSketch"]');
    console.log('Clicked on the Sketch button.');
    await newPage.click('div[data-id="M9bsVubdGCsYO08ys"][data-bs-original-title="Top"]');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await newPage.click('div.ns-dialog-button-ok.button-ok');
    console.log('END TEST');
}

module.exports = { performTest };