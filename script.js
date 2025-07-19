const licenses = {
  "DK0897294CH0874": {
    name: "AJHARUL ISLAM",
    dob: "15 Jan 1997",
    bloodGroup: "B+",
    father: "BADUL MIAH",
    issue: "22 MAR 2023",
    validity: "23 MAR 2028",
    licenceNo: "DK0897294CH0874",
    authority: "DHAKA METRO-1 BRTA",
    address: "JATRAPUR, ASHUGANJ, BRAHMANBARIA",
    classes: "Heavy Vehicle"
  }
};

function searchLicense() {
  const input = document.getElementById("licenseInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (licenses[input]) {
    const data = licenses[input];
    resultDiv.innerHTML = `
      <h3>Status: <span style='color: green;'>Active ✅</span></h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Date of Birth:</strong> ${data.dob}</p>
      <p><strong>Blood Group:</strong> ${data.bloodGroup}</p>
      <p><strong>Father:</strong> ${data.father}</p>
      <p><strong>Issue:</strong> ${data.issue}</p>
      <p><strong>Validity:</strong> ${data.validity}</p>
      <p><strong>Licence No:</strong> ${data.licenceNo}</p>
      <p><strong>Issuing Authority:</strong> ${data.authority}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Class(es):</strong> ${data.classes}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color: red;'>❌ Licence not found.</p>";
  }
}
