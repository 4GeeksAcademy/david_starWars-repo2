const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [{ title: "FIRST", background: "white", initial: "white" },
			{ title: "SECOND", background: "white", initial: "white" }],
			isLogin: false,
			users: [],
			title: '',
			currentUser: {},
			currentUserUrl: "",
			currentPlanet: {},
			currentPlanetsUrl: "",
			planets: [],
			vehicles: [],
			uriContacts: 'https://playground.4geeks.com/contact/',
			agenda: '/mrRobot',
			contacts: [{}],
			counter: 0,
			favorites: []
		},
		actions: {
			exampleFunction: () => { getActions().changeColor(0, "green"); }, // Use getActions to call a function within a fuction
			loadSomeData: () => {/**fetch().then().then(data => setStore({ "foo": data.bar }))*/ },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getUserJPH: async () => {
				const response = await fetch('https://www.swapi.tech/api/people/');
				if (!response.ok) {
					console.log('Error');
					return
				}
				const data = await response.json();
				console.log(data);
				setStore({ users: data.results });
			},

			settingUser: (user) => { setStore({ currentUser: user }); },
			settingUserUrl: (url) => { setStore({ currentUserUrl: url }); },

			getCurrentUser: async () => {
				const uri = getStore().currentUserUrl;
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentUser: data.result });
			},

			settingPlanet: (user) => { setStore({ currentPlanet: user }); },
			settingPlanetUrl: (url) => { setStore({ currentPlanetsUrl: url }); },

			getCurrentPlanets: async () => {
				const uri = getStore().currentPlanetsUrl;
				console.log("soy URI:", uri);
				const response = await fetch(uri);
				if (!response.ok) {
					console.log("Error");
					return;
				}
				const data = await response.json();
				console.log(data);
				setStore({ currentPlanet: data.result });
			},


			getPlanets: async () => {
				const response = await fetch('https://www.swapi.tech/api/planets')
				if (!response.ok) {
					console.log('Error ')
					return
				}
				const data = await response.json()
				console.log(data);
				setStore({ planets: data.results })
			},

			getVehicles: async () => {
				const response = await fetch('https://www.swapi.tech/api/vehicles/')
				if (!response.ok) {
					console.log('error ', response.status, response.statusText)
					return
				}
				const data = await response.json()
				console.log(data);
				setStore({ vehicles: data.results })
			},


			getContacts: async () => {
				const uri = getStore().uriContacts + 'agendas' + getStore().agenda + '/contacts'
				// const uri = 'https://playground.4geeks.com/contact/agendas/David/contacts'

				const response = await fetch(uri)

				if (!response.ok) {
					console.log('error ', response.status, response.statusText)
					return
				}
				const data = await response.json()
				console.log(data.contacts);
				setStore({ contacts: data.contacts })
			},
			// En contact es el parámetro que recibo de Login, dataToSend
			addContact: async (dataToSend) => {
				// console.log("datos enviados ", dataTosend);
				const uri = getStore().uriContacts + 'agendas' + getStore().agenda + '/contacts'
				// const uri = `${getStore().uriContacts}agendas${getStore().agenda}/contacts}}`
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(dataToSend)
				}
				const response = await fetch(uri, options)
				console.log("datos RESPONSE", response);
				if (!response.ok) {
					console.log("no se enviaron ", response.status, response.statusText)
					return
				}
				getActions().getContacts()
			},
			handleDelete: async (contactId) => {
				const uri = `${getStore().uriContacts}agendas${getStore().agenda}/contacts/${contactId}`
				const options = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					}
				}

				const response = await fetch(uri, options);
				if (!response.ok) {
					console.log('error', response.status, response.statusText);
					return
				}
				getActions().getContacts()

			},

			addFavorites: (newFavorite) => {
				const store = getStore();
				if (!store.favorites.includes(newFavorite)) {
					setStore({ favorites: [...store.favorites, newFavorite] })
				console.log("estos son mis favoritos",store.favorites);
				}
			},
			removeFavorites: (removeItem) => {
				setStore({ favorites: getStore().favorites.filter((item) => item != removeItem) })
			}
		},
	};
}

export default getState;