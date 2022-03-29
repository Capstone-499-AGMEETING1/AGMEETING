const addMessage = (msg, date) => {
    let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
    messages.push({
        message: msg,
        date: date
    });
    localStorage.setItem('messages', JSON.stringify(messages));
};

const clearMessages = () => {
    localStorage.setItem('messages', JSON.stringify([]));
};

export default {
    addMessage, clearMessages
};
