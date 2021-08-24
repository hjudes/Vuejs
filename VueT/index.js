var app = new Vue({
    el: '#app',
    data: {
        product: 'Blusa',
        selectedVariant:0,
        /*image: './Imagenes/blusa_blue.jpg',*/
        detalles: ["80% algodón", "15% sintético", "5% otros", "Lavar a mano"],
        variants: [
            {
                variantId: 1,
                variantColor: 'Blue',
                variantImage: './imagenes/blusa_blue.jpg',
                variantQuantity: 20
            },
            {
                variantId: 2,
                variantColor: 'Pink',
                variantImage: './imagenes/blusa_pink.jpg',
                variantQuantity: 0
            },
            {
                variantId: 3,
                variantColor: 'White',
                variantImage: './imagenes/blusa_white.jpg',
                variantQuantity: 5
            }
        ],
        cart: 0,
    },
    methods: {
        aggCart: function(){
            this.cart +=1
            alert("agregado")
        },
        updateProduct: function(index){
            this.selectedVariant=index
        },
        /*Se creó este nuevo método para que al contador del carrito vaya restando una unidad cada que se hace clic en el botón de remover*/
        remCart: function(){
            this.cart -=1
            alert("quitado")
        },
    },
computed: {
    image(){
        return this.variants [this.selectedVariant].variantImage
    },
    inStock(){
        return this.variants [this.selectedVariant].variantQuantity
    }
}
})