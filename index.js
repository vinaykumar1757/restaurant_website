
function addMouseOverEffect(element, hoverStyle, originalStyle) {
    element.addEventListener('mouseover', function() {
        Object.assign(element.style, hoverStyle);
    });

    element.addEventListener('mouseout', function() {
        Object.assign(element.style, originalStyle);
    });
}


const exploreMenuButton = document.querySelector('.explore-menu-section .custom-button');
const outlineButton = document.querySelector('.custom-outline-button');
const customButtons = document.querySelectorAll('.custom-button');


const hoverStyle = {
    backgroundColor: '#a58d00',
    cursor: 'pointer',
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease-in-out',
};

const originalStyle = {
    backgroundColor: '',
    transform: 'scale(1)',
    boxShadow: 'none',
};


if (exploreMenuButton) {
    addMouseOverEffect(exploreMenuButton, hoverStyle, originalStyle);
}

if (outlineButton) {
    const outlineHoverStyle = {
        borderColor: '#a58d00',
        color: '#a58d00',
        cursor: 'pointer',
        transform: 'scale(1.05)',
        transition: 'transform 0.2s ease-in-out',
    };

    const outlineOriginalStyle = {
        borderColor: '#d0b200',
        color: '#d0b200',
        transform: 'scale(1)',
    };

    addMouseOverEffect(outlineButton, outlineHoverStyle, outlineOriginalStyle);
}


customButtons.forEach(button => {
    addMouseOverEffect(button, hoverStyle, originalStyle);
});


function addCardMouseOverEffect(cardElement, hoverStyle, originalStyle) {
    cardElement.addEventListener('mouseover', function() {
        Object.assign(cardElement.style, hoverStyle);
    });

    cardElement.addEventListener('mouseout', function() {
        Object.assign(cardElement.style, originalStyle);
    });
}

const menuCards = document.querySelectorAll('.menu-item-card');


const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
};

const cardOriginalStyle = {
    transform: 'scale(1)',
    boxShadow: 'none',
};


menuCards.forEach(card => {
    addCardMouseOverEffect(card, cardHoverStyle, cardOriginalStyle);
});
