	//Add to cart
var productsCount = document.getElementById("products-count")
// console.log(productsCount)


var addToCartButtons = document.querySelectorAll(".add-to-cart-js")
// console.log(addToCartButtons)


for(i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function () {
		var prevProductsCount = +productsCount.textContent
		productsCount.textContent = prevProductsCount + 1
	})
}


	//Slider
$('.slider').slick({
	// autoplay: true,
	aitoPlaySpeed: 2000,
	dots: true,
})


	//Button Like
var likeButtons = document.querySelectorAll(".like")
// console.log(likeButtons)

for (var i = 0; i < likeButtons.length; i++) {
	likeButtons[i].addEventListener("click", function () {
		if (this.classList.contains("like-toggle")) {
			this.classList.remove("like-toggle")
		} else {
			this.classList.add("like-toggle")
		}
	})
}

	//Add counter
var decrementButton = document.querySelectorAll(".decrement-button")[0]
var incrementButton = document.querySelectorAll(".increment-button")[0]
var quantityValue = document.querySelectorAll(".quantity-input input")[0]
var minCount = 1

var currentValue = quantityValue.value

// console.log(currentValue)
function decrementDisabled(count) {
	if (count <= minCount) {
			decrementButton.disabled = true
	} else {
		decrementButton.disabled = false
	}
}

decrementDisabled(currentValue)

incrementButton.addEventListener("click", function() {
	var currentValue = Number(quantityValue.value)
	var nextValue = currentValue + 1
	// console.log(nextValue)
	quantityValue.value = nextValue

	decrementDisabled(nextValue)
	// if (quantityValue.value <= 1) {
	// 	decrementButton.disabled = true
	// } else {
	// 	decrementButton.disabled = false
	// }
})
decrementButton.addEventListener("click", function() {
	var currentValue = Number(quantityValue.value)
	var prevValue = currentValue - 1
	quantityValue.value = prevValue

	decrementDisabled(prevValue)
})