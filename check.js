export function checkFetch(response) {
   if(response.status === 500) {
      throw new Error("Сервер сломался");
    }
    if(response.status === 400) {
      throw new Error("Плохой запрос");
    }
    if(!navigator.onLine) {
      throw new Error("нет интернета")
   }
}
export function errorProcessingGet(error) {
   if (error.message === "Сервер сломался") {
      alert("Сервер сломался, попробуй позже");
      return;
    } if (error.message === "нет интернета") {
       alert("Кажется, у вас сломался интернет, попробуйте позже");
       return}
}
export function errorProcessingPost({error, addForm, commentLoader, getFetch}) {
   if (error.message === "Сервер сломался") {
      // commentLoader.style.display = "none";
      // addForm.style.display = "flex" ;
      alert("Сервер сломался, попробуй позже");
      getFetch();
      return;
    }
    if (error.message === "Плохой запрос") {
      // commentLoader.style.display = "none";
      // addForm.style.display = "flex" ;
      alert("Имя и комментарий должны быть не короче 3 символов");
      getFetch();
      return;
    } 
    else {
      // commentLoader.style.display = "none";
      // addForm.style.display = "flex" ;
      alert("Кажется, у вас сломался интернет, попробуйте позже");
      getFetch();
      return;
    }
   
}