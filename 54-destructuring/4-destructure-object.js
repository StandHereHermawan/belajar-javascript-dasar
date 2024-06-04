/**
 * Destructuring object.
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

  const { firstName, lastName, address, ...others } = person;
  console.info(
    `Destructuring object: firstName: ${firstName}, lastName: ${lastName}`
  );
  console.info(address);
  console.info(others);
}
