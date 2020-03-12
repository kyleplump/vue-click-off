let element = null;
let ignoredElements = [];
let directiveCallback = null;

function clicked(ev) {

    // clicked element
    let el = ev.srcElement;
    let clickedOff = true;

    // traverse the DOM to find if the clicked element is a child of (or is)
    // the bound element, or if it is one of the exluded elements
    while(el.parentNode) {
    
        if(el === element) {
            clickedOff = false;
        }
        
        if(ignoredElements !== undefined && ignoredElements.length) {
            
            ignoredElements.forEach((i) => {

                if(i.includes('.')) { i = i.slice(1) }

                if(el.classList.contains(i)) {
                    clickedOff = false;
                }
            });
        }
        
        el = el.parentNode;
    }

    if(clickedOff) {
        directiveCallback();
    }
}

export const clickOff = {

    bind: function(el, binding) {
        element = el;
        ignoredElements = binding.arg;
        directiveCallback = binding.value;
        document.addEventListener('click', clicked);
    },

    unbind: function() {
        document.removeEventListener('click', clicked);
    }
}

export default clickOff;