//ابتدا هر چیزی که قراره روش فرایند ولیدیشن انجام بشه رو سلکت می کنیم
//انتخاب فرم 
const form = document.querySelector('#form');

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//فرم نیاز به یک ایونت لیستنر داره تا موقعی که روی باتن کلیک شد فرایند ولیدیشن انجام شود

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    checkInputs();
})
//قصد داریم از فانکشن پروگرمینگ استفاده کنیم
// یک تابع برای چک کردن اینپوتها نیاز داریم 
// یک تابع اگر ارورری بود اون را ست کنه 
//یک تابع برای زمانی که همه اینپوتها بطور صحیح پر شده است مثلا بردر در حالت ساکسس که سبز میشه 

const checkInputs = () =>{
    //ممکنه کاربر در تکست فیلدها فاصله خالی هم ایجاد کرده باشه که باید ابتدا تریم کنیم
    //step-1:remove spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    //step-2 :conditions
    if(usernameValue===''){
        setError(username,' لطفا نام کاربری را وارد نمائید')
    }else{
        setSuccess(username)
    }
    if(emailValue===''){
        setError(email,' لطفا ایمیل تان را وارد نمائید')
    }else{
        setSuccess(email)
    }
    if(passwordValue===''){
        setError(password,' لطفا رمز عبور را وارد نمائید')
    }else{
        setSuccess(password)
    }
    //check password2
    if(password2Value===''){
        setError(password2,' لطفا تکرار رمز عبور را وارد نمائید')
    }else if(password2Value!==passwordValue){
        setError(password2,'رمز عبور و تکرار آن باید یکسان باشد ')
    }else{
        setSuccess(password2)
    }
   
}
//پیغام خطا درون تگ اسمال همان اینپوت نمایش داده میشه 

const setError = (input , message) => {
    //ابتدا باید بتونیم تگ اسمال مربوطه رو انتخاب کنیم 
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');//انتخاب تگ اسمال 
    //به فرم کنترل یک بردر قرمز رنگ میدیم 
    formControl.className = 'form-control error';
    // به تگ اسمال یک مقدار کانتنت میدیم
    small.innerText = message;
}

const setSuccess = (input) => {
    const formControl = input.parentElement;
    //const small = formControl.querySelector('small');//انتخاب تگ اسمال 
    //به فرم کنترل یک بردر قرمز رنگ میدیم 
    formControl.className = 'form-control success';
    //small.innerText = '';
}


