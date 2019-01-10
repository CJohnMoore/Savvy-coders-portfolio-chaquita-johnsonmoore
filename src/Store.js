class Store {
    constructor(state) {
        this.state = state;
        this.listners = [];
    }

    dispatch(reducer){
        this.state = reducer(this.state);

        this.listeners.forEach(
            (listener) => listener(this.state)
            );
    }

    addListener(listener){
        this.listeners.push(listener);
    }
}

export default Store;