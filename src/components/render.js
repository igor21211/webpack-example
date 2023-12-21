class Render {
  constructor(users, parentElement) {
    this.parentElement = parentElement;
    this.users = users;
  }

  render() {
    this.parentElement.innerHTML = this.users.map(this.renderCard).join("");
  }

  renderCard(user) {
    const { id, name, age, email, country, birthday } = user;
    return ` <div class="user-card">
    <h2>User Information</h2>
    <div class="user-info ${id}">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Birthday:</strong> ${birthday}</p>
    </div>
    </div>`;
  }
}

export default Render;
