function showrecentposts(t) {
    for (var e = 0; e < numposts; e++) {
        var n, r = t.feed.entry[e],
            i = r.title.$t;
        if (e == t.feed.entry.length) break;
        for (var d = 0; d < r.link.length; d++)
            if ("alternate" == r.link[d].rel) {
                n = r.link[d].href;
                break
            } i = i.link(n);
        var s = r.published.$t,
            a = s.substring(0, 4),
            o = s.substring(5, 7),
            l = s.substring(8, 10),
            u = new Array;
        u[1] = "Jan", u[2] = "Feb", u[3] = "Mar", u[4] = "Apr", u[5] = "May", u[6] =
            "Jun", u[7] = "Jul", u[
                8] = "Aug", u[9] = "Sep", u[10] = "Oct", u[11] = "Nov", u[12] =
            "Dec",
            standardstyling ||
            document.write(""), document.write('<div class="text-wrapper">'),
            standardstyling && document
            .write(""), document.write(i), standardstyling && document.write(""),
            1 ==
            showpostdate &&
            document.write(" - " + l + " " + u[parseInt(o, 10)] + " " + a),
            standardstyling || document
            .write("</div>"), document.write("</div>"), standardstyling && document
            .write("")
    }
    standardstyling || document.write('<div class="bbwidgetfooter">'),
        standardstyling && document.write(
            ""), document.write(""), standardstyling || document.write("/div")
}

var numposts = 25;
var showpostdate = false;
var standardstyling = true;