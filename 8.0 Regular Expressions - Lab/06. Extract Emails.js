function extractEmails(text) {
  let pattern = /(?<=\s|^)([a-z0-9]+(?:[_.-][a-z0-9]+)*@[a-z]+\-?[a-z]+(?:\.[a-z]+)+)\b/gm
  let result = text[0].match(pattern).forEach(el => console.log(el))
}

//extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])