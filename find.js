const firebaseConfig = {
    apiKey: "AIzaSyACz3UydPQN91GaOezyYF-757jW4Hk1b1Q",
    authDomain: "findform-6daca.firebaseapp.com",
    projectId: "findform-6daca",
    storageBucket: "findform-6daca.appspot.com",
    messagingSenderId: "965211543116",
    appId: "1:965211543116:web:cf936dd2b0e3ef99b506e9",
    databaseURL: "https://findform-6daca-default-rtdb.firebaseio.com/",
  };
  firebase.initializeApp(firebaseConfig);
  var findFormDB = firebase.database().ref("findForm");
  document.getElementById("findForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
  
    var subject = getElementVal("subject");
    var moc = getElementVal("moc");
    var grade = getElementVal("grade");
    var state = getElementVal("country-state");
    var city = getElementVal("city");
    
  
    saveMessages(subject, moc, grade,state,city);
  
    //  to alert
    alert('Message Sent!');
    setTimeout(()=> {
        document.getElementById("findForm").reset();
    },2000)
  }
  
  const saveMessages = (subject, moc, age,state,city) => {
    var newFindForm = findFormDB.push();
  
    newFindForm.set({
      subject: subject,
      moc: moc,
      grade: grade,
      state : state,
      city : city,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };