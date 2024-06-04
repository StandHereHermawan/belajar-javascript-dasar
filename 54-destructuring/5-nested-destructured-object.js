/**
 * Destructuring nested object.
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
    channel_youtube: "AriefSiNoLife",
    socmed: {
      socmed1: "Facebook",
      socmed2: "Instagram",
      socmed3: "X",
      socmed4: "TikTok",
    },
  };

  /**
   * Destructuring nested object.
   */
  const {
    firstName,
    lastName,
    address: { country, city, street },
    socmed: { socmed1, socmed2, socmed3, socmed4 },
  } = person;

  console.info(
    `Destructuring nested object firstName: ${firstName}, lastName: ${lastName}.`
  );
  console.info(`    country: ${country}, city: ${city}, street: ${street}`);
  console.info(
    `    socmed1: ${socmed1}, socmed2: ${socmed2}, socmed3: ${socmed3}, socmed4: ${socmed4}`
  );
}
