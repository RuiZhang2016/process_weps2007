var featured_albums_new_releases_url = "#new_releases";
var featured_albums_just_added_url = "#just_added";
var featured_albums_editors_picks_url = "#editors_picks";
var featured_albums_guest_picks_url = "#guest_picks";

var top_ten_tracks_url = "#top_ten_tracks";
var top_ten_albums_url = "#top_ten_albums";
var albums_url = "#albums";
var tracks_url = "#tracks";
var exclusives_url = "#exclusives";
var editors_picks_url = "#editors_picks";
var guest_picks_url = "#guest_picks";
var radio_connect_url = "#radio_connect";
var gear_url = "#gear";
var mixtapes_url = "#mixtapes";

var most_listened_url = "#most_listened";
var newest_stations_url = "#newest_stations";

var connect_sets_url = "#connect_sets";
var interviews_url = "#interviews";
var interviews_summary_8_url = "#interviews_summary_8";
var interviews_summary_11_url = "#interviews_summary_11";
var interviews_summary_14_url = "#interviews_summary_14";
var interviews_summary_17_url = "#interviews_summary_17";
var interviews_summary_20_url = "#interviews_summary_20";
var interviews_summary_23_url = "#interviews_summary_23";

var exclusives_summary_10_url = "#exclusives_summary_10";
var exclusives_summary_13_url = "#exclusives_summary_13";
var exclusives_summary_16_url = "#exclusives_summary_16";
var exclusives_summary_19_url = "#exclusives_summary_19";
var exclusives_summary_22_url = "#exclusives_summary_22";
var exclusives_summary_25_url = "#exclusives_summary_25";

function headerClick(element) {
  if (element.my_url) {
    document.location = element.my_url;
  }
}

function setUpHeaderClicks() {
  setUrl("featured_albums_link", featured_albums_new_releases_url);
  setUrl("featured_albums_new_releases_link", featured_albums_new_releases_url);
  setUrl("featured_albums_just_added_link", featured_albums_just_added_url);
  setUrl("exclusives_link", exclusives_url);
  setUrl("editors_picks_link", editors_picks_url);
  setUrl("guest_picks_link", guest_picks_url);
  setUrl("featured_albums_editors_picks_link", featured_albums_editors_picks_url);
  setUrl("featured_albums_guest_picks_link", featured_albums_guest_picks_url);

  // before the top ten flash component; keeping around in case flash becomes unavailable (SC, 072906)
  //setUrl("top_ten_link", top_ten_tracks_url);
  //setUrl("top_ten_albums_link", top_ten_albums_url);
  //setUrl("top_ten_tracks_link", top_ten_tracks_url);
  //setUrl("albums_link", albums_url);
  //setUrl("tracks_link", tracks_url);
  //setUrl("radio_connect_link", radio_connect_url);
  //setUrl("gear_link", gear_url);                 
  setUrl("mixtapes_link", mixtapes_url);

  setUrl("most_listened_link", most_listened_url);
  setUrl("newest_stations_link", newest_stations_url);

  // for C2_26_InterviewsLanding
  setUrl("interviews_summary_8_link", interviews_summary_8_url);
  setUrl("interviews_summary_11_link", interviews_summary_11_url);
  setUrl("interviews_summary_14_link", interviews_summary_14_url);
  setUrl("interviews_summary_17_link", interviews_summary_17_url);
  setUrl("interviews_summary_20_link", interviews_summary_20_url);
  setUrl("interviews_summary_23_link", interviews_summary_23_url);

  // for C2_27_ExclusivesLanding
  setUrl("exclusives_summary_10_link", exclusives_summary_10_url);
  setUrl("exclusives_summary_13_link", exclusives_summary_13_url);
  setUrl("exclusives_summary_16_link", exclusives_summary_16_url);
  setUrl("exclusives_summary_19_link", exclusives_summary_19_url);
  setUrl("exclusives_summary_22_link", exclusives_summary_22_url);
  setUrl("exclusives_summary_25_link", exclusives_summary_25_url);
}

function setUrl(id, url) {
  var header = getDiv(id);
  if (header != null) {
    header.my_url = url;
  }
}

function setLink(id, url) {
  var header = getDiv(id);
  if (header != null) {
    document.all[id].my_url = url;
  }
}

/*
Resets the header link to the more link of the active list (list that was toggled to)
*/
function toggleFeaturedUrl(id, all_url) {
  if (id == "new_releases" ) {
    setUrl("featured_albums_link", featured_albums_new_releases_url);
  } else if (id == "just_added" ) { 
    setUrl("featured_albums_link", featured_albums_just_added_url);
  } else if (id == "editors_picks" ) {
    setUrl("editors_picks_all_link", editors_picks_url);
  } else if (id == "guest_picks" ) { 
    setUrl("guest_picks_all_link", guest_picks_url);
  }
  // before the top ten flash component; keeping around in case flash becomes unavailable (SC, 072906)
  //else if (id == "albums" ) { 
    //setUrl("top_ten_link", top_ten_albums_url);
  //} else if (id == "tracks" ) { 
    //setUrl("top_ten_link", top_ten_tracks_url);
  //}
  //setLink("all", all_url);
}
