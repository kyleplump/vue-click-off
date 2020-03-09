let element = null;
let ignoredElements = [];
let callback = null;

function clicked(ev) {
    console.log(ev)

    // if clicked outside
    let el = ev.srcElement;
    let clickedOff = true;

    while(el.parentNode) {
        
        if(el === element) {
            clickedOff = false;
        }

        el = el.parentNode;
    }

    if(clickedOff) {
        callback();
    }
}

export const vueClickOff = {

    bind: function(el, binding) {
        element = el;
        ignoredElements = binding.args;
        console.log(element, ignoredElements)
        console.log('binding', binding);
        console.log(callback);
        callback = binding.value;
        document.addEventListener('click', clicked);
    },

    unbind: function() {
        document.removeEventListener('click', clicked);
    }
}

export default vueClickOff;