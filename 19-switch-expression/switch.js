const nilai = "A";

// Percabangan versi Switch Case
switch (nilai) {
  case "A":
    document.writeln("<p>Wow! Anda lulus dengan baik.</p>");
    break;
  case "B":
  case "C":
    document.writeln("<p>Anda lulus.</p>");
    break;
  case "D":
    document.writeln("<p>Anda tidak lulus.</p>");
    break;
  default:
    document.writeln("<p>Mungkin anda salah jurusan.</p>");
    break;
}

// Percabangan versi if-else dan else-if
if (nilai === "A") {
  document.writeln("<p>Wow! Anda lulus dengan baik.</p>");
} else if (nilai === "B" || nilai === "C") {
  document.writeln("<p>Anda lulus.</p>");
} else if (nilai === "D") {
  document.writeln("<p>Anda tidak lulus.</p>");
} else {
  document.writeln("<p>Mungkin anda salah jurusan.</p>");
}
