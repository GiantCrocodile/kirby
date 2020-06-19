
export default (Vue, store) => {

  const onUpdate = (update) => {
    // only notify those who have the permission
    if (!Vue.$permissions || Vue.$permissions.access.settings !== true) {
      return;
    }

    // no need to notify if all is up to date
    if (update === false || !update.status ||  update.status === "ok") {
      return;
    }

    let message = `
      <b>${Vue.$t("update.status." + update.status)}</b><br>
      Kirby ${update.latest}
    `;
    let type = "info";
    let details = null;

    if (update.status === "at-risk") {
      type = "error";

      if (update.severity === "major") {
        message = Vue.$t("update.status." + update.status);
        details = Vue.$t("update.critical", { version: update.latest, link: update.latestUrl });
      }
    }

    store.dispatch("notification/" + type, {
      message: message,
      details: details,
      permanent: true,
      click: () => Vue.$router.push("/settings")
    });
  }

  store.watch(() => store.state.system.update, onUpdate);
}
