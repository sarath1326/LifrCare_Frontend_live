



declare global {
    interface Window {
    Razorpay: any;
    }
  }
 
export const online_consult_onlinePayment=(order:any,cb:any)=>{

    console.log("rasorpay start")

    


    var options = {
        "key": "rzp_test_3sydrTt10wbHB2", 
        "amount": order.amount, 
        "currency": "INR",
        "name": "Acme Corp", 
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id":order.id, 
        "handler": function (response:any){
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)

            cb(response,order)


        },
        "prefill": {
            "name": "Gaurav Kumar", 
            "email": "gaurav.kumar@example.com", 
            "contact": "9000090000"  
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    interface Window {
    
        Razorpay: any;
      }


    const rzp1 = new window.Razorpay(options);
    
    rzp1.open();

    
    
    
    
    }