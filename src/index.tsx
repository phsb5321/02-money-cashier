import { Model, createServer } from "miragejs"

import { App } from './App';
import ReactDOM from 'react-dom';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance",
          type: "deposit",
          category: "Dev",
          amount: 1200,
          createdAt: new Date("2021-02-12 09:30")
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1300,
          createdAt: new Date("2021-02-14 11:15")

        },
        {
          id: 3,
          title: "Dividendos",
          type: "deposit",
          category: "Investments",
          amount: 300,
          createdAt: new Date("2021-02-14 11:15")

        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      let data = JSON.parse(request.requestBody)
      data.createdAt = new Date()
      return schema.create("transaction", data)
    })

  },



})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

