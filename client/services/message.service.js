const addMessage = (msg) => {
    let messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
    messages.push(msg);
    localStorage.setItem('messages', JSON.stringify(messages));
};

const clearMessages = () => {
    localStorage.setItem('messages', JSON.stringify([]));
};

export default {
    addMessage, clearMessages
};
