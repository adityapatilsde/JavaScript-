fetch("assets/healthcare_dataset.csv")
.then(res => res.text())
.then(data => {
    console.log(data);   // to check in browser console
});
