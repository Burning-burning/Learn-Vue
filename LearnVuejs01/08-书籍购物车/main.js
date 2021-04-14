const app = new Vue({
  el: '#app',
  data: {
    books: [
      { id: 1, name: '《算法导论》', date: '2006-9', price: 85.0, number: 1 },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.0,
        number: 1,
      },
      { id: 3, name: '《编程珠玑》', date: '2008-10', price: 39.0, number: 1 },
      { id: 4, name: '《代码大全》', date: '2006-3', price: 128.0, number: 1 },
    ],
  },
  methods: {
    handleDelete(index) {
      this.books.splice(index, 1)
    },
    increment(index) {
      this.books[index].number++
    },
    decrement(index) {
      this.books[index].number--
    },
  },
  computed: {
    totalPrice() {
      // let result = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   result += this.books[i].number * this.books[i].price
      // }
      // return result
      // let result = 0
      // for (let i in this.books) {
      //   result += this.books[i].number * this.books[i].price
      // }
      // return result
      // let result = 0
      // for (let book of this.books) {
      //   return book.price * book.number
      // }
      // return result
      // reduce

      // filter/map/reduce
      const num = [10, 2, 222, 33, 483, 98, 92, 28, 888]

      // let newNums = num.filter(function (n) {
      //   return n < 100
      // })
      // // console.log(newNums)
      // let new2Nums = newNums.map(function (n) {
      //   return n * 2
      // })
      // // console.log(new2Nums)

      // const total = new2Nums.reduce(function (preVal, value) {
      //   return preVal + value
      // }, 0)
      // console.log(total)

      const total = num
        .filter(function (n) {
          return n < 100
        })
        .map(function (n) {
          return n * 2
        })
        .reduce(function (preVal, n) {
          return preVal + n
        }, 0)

      console.log(total)

      // const num = [10, 2, 222, 333, 298, 73, 28]
      // const newNum = []
      // for (let n of num) {
      //   if (n < 100) {
      //     newNum.push(n)
      //   }
      // }
      // const new2Num = []
      // for (let n of newNum) {
      //   new2Num.push(n*2)
      // }

      // const total = 0
      // for (let n of new2Num) {
      //   total+=n
      // }
    },
    isShow() {
      if (this.books.length > 0) {
        return true
      }
      return false
    },
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    },
  },
})
