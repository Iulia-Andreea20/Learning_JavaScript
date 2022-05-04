let hasCompletedCourse = false
let givesCertificate = true

function generateCertificate() {
    // console.log("Generating certificate....")
}
//equals with hasCompletedCourse && givesCertificate is true
if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

//-------------------------------
let hasSolvedChallenge = false
let hasHintsLeft = false

function showSolution() {
    // console.log("Showing solution...")
}

if (!hasSolvedChallenge && !hasHintsLeft) {
    showSolution()
}

//-------------------------------
let likesDocumenaries = false, likesStartups = false

function recomendMovie() {
    console.log("Hey, check out this movie!")
}

if (likesDocumenaries || likesStartups) {
    recomendMovie()
}

