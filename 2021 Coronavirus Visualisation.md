# Hintergrund-Informationen zur watson-Covid-Visualisierung

## Projektbeschreibung
Ein Skript lädt von der [Covid-19-Website des Bundes](https://www.covid19.admin.ch/de/overview "COvid-19-Website des Bundes") das Daten-ZIP herunter und liest die Daten in eine Datenbank ein. Das Skript generiert eine platzsparende JSON-Datei, die per Schnittstelle ins CMS hochgeladen wird und im Artikel eingebunden wird. Ein Javascript-Code generiert mit der D3js-Bibliothek die Grafiken.

Feedback jederzeit willkommen unter [data@watson.ch](mailto:data@watson.ch "data@watson.ch").

### Mitwirkende
| Person | Berufs- und Projektbeschreibung |
| ------------ | ------------ |
| [Petar Marjanović](https://www.watson.ch/Petar%20Marjanovi%C4%87/ "Petar Marjanović") | Datenjournalist und Politreporter. Coding Daten-Skript, JS, CSS |
| [Lea Senn](https://www.watson.ch/Lea%20Senn/ "Lea Senn") | Datenjournalistin. Konzeption Darstellung |
| [Reto Fehr](https://www.watson.ch/Reto%20Fehr/ "Reto Fehr") | Datenjournalist. Konzeption Darstellung |
| Megan Silberbauer | User Experience Designer. Konzeption und Beratung Darstellung, Farbumgebung, CI |
| [Leo Helfenberger](https://www.watson.ch/Leo%20Helfenberger "Leo Helfenberger") | SEO-Redaktor. Verfassen der Erklärtexte |
| Marius Egger | Mitglied Chefredaktion. Konzeption und Begleitung |
| Martin Lüscher | Mitglied Chefredaktion. Konzeption und Begleitung |

## Verwendete Drittquellen
|  Name | Beschreibung  | Lizenz |
| ------------ | ------------ |
| [BAG-Daten Covid-19](https://www.covid19.admin.ch/de/overview "BAG-Daten Covid-19")  | Schweizer Daten zur Pandemie | frei nutzbare Daten |
| Wappen Schweizer Kantone | SVG-Dateien via [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia/technical "Wikimedia Commons") | gemeinfreies Wappen |
| [D3js](https://d3js.org/ "D3js")  | JS-Bibliothek für Visualisierungen |  [BSD-Lizenz](https://opensource.org/licenses/BSD-3-Clause "BSD-Lizenz") |

## Aktive Visualisierungen
    Detaillierte Beschreibungen folgen

### Aktuelle Corona-Zahlen aus der Schweiz
![Erste Grafik](https://www.watson.ch/imgdb/605c/void;NR;JPEG/2008249862958221 "Erste Grafik")

| Wert | Beispiel | Beschreibung |
|--|--|--|
| **R-Wert schweizweit** | `1,0` | `COVID19Re_geoRegion.json` mit Query `median_R_mean: geoRegion=CH, median_R_mean ≠ NULL, höchstes date` |
| **Positivitätsrate 7-Tage-ø** | `14,4 %` | `COVID19Test_geoRegion_all.json` mit Query `pos_anteil_mean7d: geoRegion=CH, pos_anteil_mean7d ≠ NULL, höchstes date` |
| **Total Verstorbene mit Covid** | `7753` | `COVID19Death_geoRegion.json` mit Query `sumTotal: geoRegion=CH, sumTotal ≠ NULL, höchstes datum` |
| **Aktuell gemeldete neue Infektionen** | `+2836` | `COVID19Cases_geoRegion.json` mit Query `entries_diff_last: geoRegion=CH, entries_diff_last ≠ NULL, höchstes datum` |
| **Aktuell gemeldete neue Verstorbene** | `+2836` | `COVID19Death_geoRegion.json` mit Query `entries_diff_last: geoRegion=CH, entries_diff_last ≠ NULL, höchstes datum` |

| Wert | Beispiel | Beschreibung |
|--|--|--|
| **Hospitalisierungen, Fälle, Tote: Tageszahl** | `COVID19(Hosp/Cases/Deaths)_geoRegion.json` mit Query `entries_letzter_stand pro Tag: geoRegion=CH` |
| **Hospitalisierungen, Fälle, Tote: Neue Meldungen** | `COVID19(Hosp/Cases/Deaths)_geoRegion.json` mit Query `entries_neu_gemeldet pro Tag: geoRegion=CH` |
| **Hospitalisierungen, Fälle, Tote: 7-Tages-Schnitt** | `COVID19(Hosp/Cases/Deaths)_geoRegion.json` mit Query `mean7d pro Tag: geoRegion=CH` |
| **R-Wert** | `COVID19Re_geoRegion.json` mit Query für Zahlen und Unsicherheitsintervall `median_R_mean, median_R_highHPD, median_R_lowHPD: geoRegion=CH` |

### Übersterblichkeit in der Schweiz
…
### Spitäler: Corona-Situation
…
### Corona-Situation in den Kantonen
…
### Corona-Tests: Positivitätsrate und Häufigkeit
…

## Änderungen
| Datum | Beschreibung |
|--|--|
| 08.01.2021 | Geplanter Launch |
| 12.01.2021 | Durchgeführter Launch |

