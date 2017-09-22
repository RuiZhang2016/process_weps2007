// javascript to support behavioural targeted ad serving. spec on s:\
// Jonathan Hedley, 2005-01-31
// $Id: behave.js,v 1.13 2005/09/05 00:54:17 xyang Exp $

// state cookies: t_<section>=yyyymmdd-hhmm:n|n|n|n... ; e.g. t_business=20050131-1454:5|3|4|0|0|0
// time is user's time of last hit to section. count is number of hits to section on that day. index 0 is today.

// ad cookies: s_<section>=[1|0]  ; e.g s_business=1  . Assumes false if not present.

// namespace: bhv_

// -------------- lib objects
// a tracked section. constructor takes _section_ name and cookie val as args, splits as appropriate.
// may also be called with just sectName
function TrackedSection(sectName, cookieVal) {
    this.sectName  = sectName;
    this.cookieVal = cookieVal;

    var match;
    if (cookieVal && (match = cookieVal.match(/^(\d{4,})(\d{2,})(\d{2,})-(\d{2,})(\d{2,}):(.*)$/))) {
        // parse the val into date / time / count string components
        // all date handling is user localtime, 'cept when gmting to cookie expiries
        this.lastHit = new Date(match[1], Number(match[2]) - 1, match[3], match[4], match[5]);

        // split the count string and cast to primitives
        var counts = match[6].split(/\|/);
        var countArray = new Array(counts.length);
        for (var i in counts) {
            countArray[i] = Number(counts[i]);
        }
        this.dayCounts = countArray;
    }
    else {
        this.lastHit    = new Date();
        this.dayCounts  = new Array();
    }

    // trim day counts to correct size and zero undefined fields
    if (bhv_sectionConfigs[sectName]) {
        this.dayCounts.length = bhv_sectionConfigs[sectName].numDays;
        // $i created above. not scoped per block
        for (i = 0; i < this.dayCounts.length; i++) { // in does not enumerate undefined values
            if (this.dayCounts[i] === undefined) { this.dayCounts[i] = 0; }
         }
    }
}

// Sums the contents of the dayCounts array
TrackedSection.prototype.sumCounts = function() {
    var sum = 0;
    for (var i in this.dayCounts) {
        sum += this.dayCounts[i];
    }
    return sum;
}

// given an input date, calculate and return the day counts appropriately. object method
// expects newDate > lastHit
TrackedSection.prototype.calculateDayCounts = function(newDate) {
    // get the num of days delta, left pad array with that num zeroes, then right trim
    var oldDays = new Date(this.lastHit.getFullYear(), this.lastHit.getMonth(), this.lastHit.getDate());
    var newDays = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
    var deltaDays = Math.floor((newDays.getTime() - oldDays.getTime()) / (1000 * 60 * 60 * 24));

    var newDayCounts = new ArrayClone(this.dayCounts);
    for (var i = 0; i < deltaDays; i++) {
        newDayCounts.unshift(0);
        newDayCounts.pop();
    }

    return newDayCounts;
}

// increments the tracked section:- sets the array (via calculateDayCounts), sets last hits, and increments today
TrackedSection.prototype.increment = function() {
    var now = new Date();
    this.dayCounts = this.calculateDayCounts(now);
    this.lastHit = now;
    this.dayCounts[0]++;
}

// serialises the lastHit and dayCounts to match the expected constructor cookieVal input
TrackedSection.prototype.getStateCookieString = function() {
    return formatDate(this.lastHit) + ":" + this.dayCounts.join("|");
}

// saves a tracked section cookie
TrackedSection.prototype.save = function() {
    // we (arbitrarily) set the expiry date to the number of days we want to track over + 1
    var expiryDate = getDateDaysDelta(this.lastHit, bhv_sectionConfigs[this.sectName].numDays);
    var cookieString = "t_" + this.sectName + "=" + this.getStateCookieString() + "; expires=" + expiryDate.toGMTString() + "; path=/; domain = ." + document.domain;

    document.cookie = cookieString;
}

// configure a section to track. constructor also adds to trackSections hash.
function SectionConfig(sectName, minHits, numDays) {
    this.sectName = sectName; // name of the section
    this.minHits  = minHits;  // min num of hits before setting targeting cookie
    this.numDays  = numDays;  // number of days to watch over

    bhv_sectionConfigs[sectName] = this;
}

// constructs a clone of an array
function ArrayClone(input) {
    var clone = new Array(input.length);
    for (var i in input) {
        clone[i] = input[i];
    }
    return clone;
}

// -----------


// configuration. the section name prefix matches any var from the list below (s_channel, s_prop3, bhv_section).
// multiple sections may trigger at once (top and sub level tracking)
// (although now we do prefix matching, we could really just look at bhv_full_section)
var bhv_sectionConfigs = new Object(); // hash
new SectionConfig("technology", 2, 7); // lc section, hits to trigger, rolling period (days)
new SectionConfig("business", 2, 7);
new SectionConfig("business_money_superannuation", 1, 30); // from bhv_full_section
new SectionConfig("travel", 2, 14);
new SectionConfig("drive_interest",1,7);
new SectionConfig("drive_intender",1,7);
new SectionConfig("business_money",1,30);

var bhv_cookies = parseCookies(document.cookie);

// apply the hit counts
// section variables. we look in both the s_channel and s_prop3 (and potentially others). could increment more than one at once (if both parent and parent child are tracked)
// s_channel is like "Travel", s_prop3 is like "Travel/World" -- actually parent and lowest child, no intermediaries

var bhv_sectionNames     = new Array(); // the names of the sections we will try and apply hit counts to for this one action
var bhv_hitSectionNames = new Array(); // sections we've hit. coz we look in a number of places for sections, might see same setting twice. don't count twice.
// this is a little clunky, to ensure no error if vars aren't set. can't put them into an array or will throw exception
// must  repeat this idiom for each var to test
// priority orderered first == highest
if (typeof bhv_section != "undefined") bhv_sectionNames.push(bhv_section);
if (typeof bhv_full_section != "undefined") bhv_sectionNames.push(bhv_full_section);
if (typeof s_channel   != "undefined") bhv_sectionNames.push(s_channel);

for (var i in bhv_sectionNames) { // iterate through the vars we check. sc vars
    var section = bhv_sectionNames[i];
    section = bhv_normaliseSectionName(section);
    // if we haven't seen this section name, and we are configged for this section, apply the hit count
    // go through each configed section, and do a prefix match
    for (var sectionConfigName in bhv_sectionConfigs) { // the tracked sectionConfig name -- it's an assoc. array
        if (!bhv_hitSectionNames[sectionConfigName] && section.indexOf(sectionConfigName) == 0) { // if the page's section starts with the configged name, track it
            applyHitCount(sectionConfigName);
            //alert("hitting " + sectionConfigName);
            bhv_hitSectionNames[sectionConfigName] = 1;
        }
    }
}

setAdCookies();


// given client's cookies, returns a struct: a hash of TrackedSection objects, keyed by sectName, and a hash of ad cookies
function parseCookies(allCookies) {
    var states  = new Object();
    var ads     = new Object();
    var struct  = new Object();

    var cookies = allCookies.split(/\s*;\s*/);
    for (var i in cookies) {
        var cookie = cookies[i].split(/=/);
        var match = cookie[0].match(/^(t|s)_(\w+)/);
        if (match != null) {
            var type = match[1];
            var sectName = match[2];
            if (type == "t") {
                states[sectName] = new TrackedSection(sectName, cookie[1]);
            }
            else {
                ads[sectName] = cookie[1];
            }
        }
    }
    struct.states = states;
    struct.ads = ads;
    return struct;
}

// increment the hit count if applicable, and save the new state. Will create a new TrackedSection if required.
function applyHitCount(currentSection) {
    if (currentSection === undefined || bhv_sectionConfigs[currentSection] === undefined) { return false; } // don't track this section
    var track;
    if (bhv_cookies.states[currentSection] === undefined) { // we need to create it
        track = new TrackedSection(currentSection);
        bhv_cookies.states[currentSection] = track;
    }
    else { // came from cookie
        track = bhv_cookies.states[currentSection];
    }
    track.increment();
    track.save();
    return 1;
}

// go through the section configs. flip the ad cookies on or off when required.
function setAdCookies() {
    for (var sectName in bhv_sectionConfigs) {
        var config = bhv_sectionConfigs[sectName];
        var track = bhv_cookies.states[sectName];
        var adCookie = bhv_cookies.ads[sectName];
        var now = new Date();

        if (track) { // user has counts for this section
            // calculate the day counts. we don't bother persisting this.
            track.dayCounts = track.calculateDayCounts(now);
            if (track.sumCounts() >= bhv_sectionConfigs[sectName].minHits) { // enough
                if (!adCookie || adCookie != "1") { enableAdCookie(sectName) }
            }
            else if (adCookie && adCookie == "1") { disableAdCookie(sectName) } // disable as not enough
        }
        else if (adCookie && adCookie == "1") { disableAdCookie(sectName) } // disable as not tracked
    }
}

function enableAdCookie(sectName) {
    var expiryDate = getDateDaysDelta(new Date(), bhv_sectionConfigs[sectName].numDays + 1);
    var cookieString = "s_" + sectName + "=1; expires=" + expiryDate.toGMTString() + "; path=/; domain = ." + document.domain;

    document.cookie = cookieString;
}

function disableAdCookie(sectName) {
    var expiryDate = new Date(0);
    var cookieString = "s_" + sectName + "=0; expires=" + expiryDate.toGMTString() + "; path=/; domain = ." + document.domain;

    document.cookie = cookieString;
}


// formats a datetime to yyyymmdd-hhmm
function formatDate(date) {
    var dateString = "" + date.getFullYear() + zeroPad(date.getMonth() + 1) + zeroPad(date.getDate());
    var timeString = "" + zeroPad(date.getHours()) + zeroPad(date.getMinutes());
    return dateString + "-" + timeString;
}

// zero pads a number to 2 sigfigs. always returns a string.
function zeroPad(num) {
    return (num < 10) ? "0" + num : "" + num;
}

// returns a new date that is daysDelta greater then the input data
function getDateDaysDelta(oldDate, daysDelta) {
    return new Date( oldDate.getTime() + (1000 * 60 * 60 * 24 * daysDelta) );
}

// normalises a section name. from "Travel/World" to "travel_world". suitable for cookie names et al
function bhv_normaliseSectionName(section) {
    section = section.toLowerCase();
    section = section.replace(/\W+/g, "_");
    return section;
}

// place the current version number in a variable, for testing
var bhv_currentVersion = "$Revision: 1.13 $";



