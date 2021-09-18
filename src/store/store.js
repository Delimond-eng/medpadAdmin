import axios from "axios";
//all states
const state = {
    baseURL: "http://medpad.rtgroup-rdc.com",
    optionAxios: {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    },

    updates: [],
};

//all getters
const getters = {
    getUpdates: (state) => state.updates,
};

//all mutations or setters
const mutations = {
    setUpdateList: (state, data) => (state.updates = data),
};

//all actions or methods
const actions = {
    viewUpdates({ commit, state }) {
        try {
            axios
                .post(`${state.baseURL}/devices/updates/view`)
                .then((result) => {
                    commit("setUpdateList", result.data.updates);
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};