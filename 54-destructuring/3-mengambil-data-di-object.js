/**
 * Mengambil data di object.
 */
{
  const person = {
    firstName: "Arief Karditya",
    lastName: "Hermawan",
    address: {
      street: "Jalan Belum Ada",
      city: "Kabupaten Bandung",
      country: "Indonesia",
    },
    hobby: ["Nonton Youtube", "Main Clash of Clans", "Ngakses cin.pw"],
    channel: "AriefSiNoLife",
  };

  const firstName = person.firstName;
  const lastName = person.lastName;

  console.info(`Mengambil data di object: ${firstName} dan ${lastName}`);
}
