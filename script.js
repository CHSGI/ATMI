




function makePayment() {

  const public_key = "FLWPUBK_TEST-01475fb421bda2502088d2f8c622dedb-X"


  const amount = document.getElementById('amount').value

  const currency = document.getElementById('currency').value

  const tx_ref = '' + Math.floor((Math.random() * 1000000000) + 1)

  const email = document.getElementById('email').value

  const phone_number = document.getElementById('phone').value

  const name = document.getElementById('surname').value + " " + document.getElementById('other_name').value
  const offering = document.getElementById('purpose').value

  FlutterwaveCheckout({
    public_key,
    tx_ref,
    amount,
    currency,
    offering,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      phone_number,
      name

    },
    callback: function (data) { // specified callback function

    },
    customizations: {
      title: "Amos Thomas Giving",
      description: "Online Donation",
      logo: "https://res.cloudinary.com/go-movie/image/upload/v1600107473/Document_33_1_2.jpg",
    },
  });
}
