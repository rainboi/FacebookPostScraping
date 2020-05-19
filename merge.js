var fs = require('fs');

const posts = [
    {
        "totalReactions": 28,
        "reactions": {
            "Like": 24,
            "Love": 3,
            "Wow": 1
        },
        "shares": 15,
        "timestamp": "1 hr",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3039157899497334?__xts__%5B0%5D=68.ARCso5jmYzmxc7Rc7x2A9K2GBKKScLxOtx0w71Oj_wfmC3Mnjiv5WF-lke8HQzuts8u4jPT8luc7con-0wkqEBZFCdFpGhdZhFPU7K6nUu3FOJezMeJffL-OmwyuX6wHm36CRKIZyvOO9DOKi5r5LEXzxFSwoQMRih2WHDdaV87obqXk6GPVG928jLVCazbCex_ItbgLoYN3ZG1KylLEj_I6DXvm0XeuS5gy9LMMUKwrmDEf6exkqpHpqFQcKMPFfFfHXVtWNWl5ejFdBhoCy0e63JeKOK-X6jRE_mSrnXvRpjTKhdUelXhBEF7iNNR4bfVk0VlpKFwfabKJiTaxLtX3sg&__tn__=-R"
    },
    {
        "totalReactions": 341,
        "reactions": {
            "Like": 292,
            "Wow": 27,
            "Love": 17,
            "Care": 4,
            "Haha": 1
        },
        "shares": 33,
        "timestamp": "2 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3039024076177383/?type=3&__xts__%5B0%5D=68.ARCGW5rDbyWn6wMTcrHGizbFYW_5p1cGAquIXWaLh3h4vxziibXDGLcLjQ0fGtPR09pUhg8W8G6ra0sc5kG3NmHcDCSDpsD7HxLhP0DcFHU73qtuGDJSvjDQwBlfjxqNe3isEu4IbtgPQRVhvvjeDcXqhLgAGTSFddmKNpkMMTFPn2ho_h3HkgjyHUpaFNnkGVBh8HJsSRfZqcxDakFvE5zdGDlwFkqWcFHLnufBo-AfhiUX_DUw6q3jK-Q36dqjmp2cw4eGbvd57hjbbewADQFJiE3JnqIF_55sUv-883HmVKyMbt90NOIouBDxDjUYIwvbqUNHepG03gOJ_qmKNBcfMg&__tn__=-R"
    },
    {
        "totalReactions": 36,
        "reactions": {
            "Like": 34,
            "Love": 2
        },
        "shares": 0,
        "timestamp": "2 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3039005482845909/?type=3&__xts__%5B0%5D=68.ARAraYNV72jcCqg69t8_peJGFJQkLPE_wr4D10RMBLvIRuRNvdJzST0SYm2hK3k921-yMjOORAATIVSxHMQNch_pzXKqjYPHwesxlC9ioOtlLmhkq0YlucrEVLajDiCfDNNoCnvEY7yg_B0aON2iHY6Xpd25NH692OttBw0FESPRCC-3NqayjONTK0DQL4ffD7Bia5vtsEw4sNu870eJMVwfL2OqX3368cGIsYpbIaxi-bLJcewkVncsbBHRPEvh0n7MAMPeWe_nH4zNJKT6cUiz6V1o9abfYhizsbX3zRBDnQdfpopo5Jsh2GbIOF67jNclAaRxkpfvGDiKLIMANuJpFw&__tn__=-R"
    },
    {
        "totalReactions": 36,
        "reactions": {
            "Like": 26,
            "Love": 10
        },
        "shares": 0,
        "timestamp": "3 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3038895702856887/?type=3&__xts__%5B0%5D=68.ARC5rXnx2DK1xDhZzn_b8kSI3q9Mn--IUiUMefFVUJTPmX1p8ewEaKkI0NyrcXyNHC8r10kBjYdVWq5bj6rZS88JUYesnD9SLKVim7X6G_F6sCMETsPW9enKrFcA56pqATunvX7Jbr0JwNiibxpAAkEUojp6zj-gGX3NOf-pAoLHzsyFR1JRUbZIfaxX7ldCmhYGM9d-88AuLtZYTPwa6coFEXgWoRymVjQF3ZDoqoN-vcMUQOBWpnAVshBzlsfXdGKhsxAv2jv_q67TkghxXye1yUfzqTredZArJlH3Q8DWDcZ7Y0UHF3d0Yu4eGf3nMBPrd5kSCMHy_ELcNjHSBOMLmg&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Love": 1
        },
        "shares": 0,
        "timestamp": "6 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038595759553548?__xts__%5B0%5D=68.ARCUE-4fCljnVx3-LCMitTlPOJIKSuaYnUYgqBAvfmLR_zLI7Ko77iO_NGIRs-fuqZy1YY4kcje942dOiFZUqOeAnPwWTE3fdeSPFYgj_lBYt-PGDEKtnLr3xgPkQsyZF24fT2gXLfzfQee-WXul5dhbpwKF0pI6pZDPD8NEJKOVpTUr5cq6D6PPh2wuU27W0Ux4fHq_ONMiRumTfQeTn_yNlGapyg1T9SgWSTL1OaCoNoznVrzWG597-Lz0iTIG9ERjmfS6B3WrNK3JH3jrOFLJg6V5FHgTQiiK4kaxiREh_mOAW05Sjc8ET8Xy6F2wb0uZEBXSkYTbY8j7yfES8tI-wQ&__tn__=-R"
    },
    {
        "totalReactions": 85,
        "reactions": {
            "Like": 64,
            "Wow": 16,
            "Love": 5
        },
        "shares": 3,
        "timestamp": "7 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038542036225587?__xts__%5B0%5D=68.ARDXBhfosnu0WhbvzIs0GDdqvlTXJCVL2wwk2LWkZifRoqWPr36mtGogSK5q6Qju2wvITKNWi0mZY1ppTMH0SMa5HBUv_x7UhEYGxf-YWIqKH20d0MOXCvjbBo5g2cGtJMZaSwWD_VIocqx-S-No6eu9dDbm3ccGz6n6A7-VoK2luaczdQx02RL2Gt82TtqhUDtBPUZpGhJgSKVsiAnoT8oZCbkd7oAB3uzLsnlQ83aChxSCz8Vlfq9RsL2T7tNTGdk3ZSvLlYJ9951fkDjs5Iel_A1cAQTisy6OkSfBzJRxePdPh2BfMCg7JUoV9p9TV18-eEyenb6gwWTU5A7pHBcibg&__tn__=-R"
    },
    {
        "totalReactions": 41,
        "reactions": {
            "Like": 40,
            "Love": 1
        },
        "shares": 3,
        "timestamp": "7 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038500092896448?__xts__%5B0%5D=68.ARDnq8YHVS5ArzBU5ynPbH_H-GEhf0h3UI5Re91TzNwe3BAYwptP2aCFcNXJv8L9W-sUK0D9eVwblfID0KIBfMdoEL6DIpMqvJgU8XRqyg-gnUUdk8TpiL581cgbI2mLymirMtFz90k3TSGHUAr8hhgNgInWWse0FkPY2T2viZnRVcSJ4Lnp9RYXfGinA8FF74tDXXJx4gpHY2smyaDhP9-2neVDsGprOIy1vSsfXKHwwTzDOhbpnF8422bj76L52_YvSFfoQw-l8VEwUo_tCuaxQb_iqbnhiWKKIDWZd4Cw4jjgxNy0VUBoNzW2xvKMNvBEmGmuTsrkkjP_6u7Fs47dNg&__tn__=-R"
    },
    {
        "totalReactions": 7,
        "reactions": {
            "Like": 7
        },
        "shares": 0,
        "timestamp": "7 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038448412901616?__xts__%5B0%5D=68.ARBz6YDR8zNy-_MeGlm_FPEv5nKJG_3yuMq3UxjP8ZOuKAUvJRurDPAHITz76dHB4SxjY3bQm69WbQpl_MdtqPwepifqjQqGicf4iHYy8ocvGMiIPcLWB-BMbfBXzz9_eECujjpOpjGpUMkv9yYQDqFYkBUYFftu-XVvTaIfOozYjTwc3DWdG0-q2n9osWPbXClkxQiRE0HSCjtCzvEsNkwT3ETDzbtrWPhU_Hur3OHFRb-wnlmZjEXSE3Uf5IDuLDiStVGgcIqNtUigQjGg6BnnASdkUfthhb422EmxnHw81TMXXTRo6K4YxkeHSe31U8znNtgQFkKCEnVWKbfy2vhq8w&__tn__=-R"
    },
    {
        "totalReactions": 32,
        "reactions": {
            "Like": 23,
            "Wow": 5,
            "Haha": 3,
            "Love": 1
        },
        "shares": 3,
        "timestamp": "8 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038380836241707?__xts__%5B0%5D=68.ARD03Cltrjl1l7X7vLFxB3pa3Quxb_hb6BaX1j2UmyAcsUEpMNL58XZDh4Z7vUi2f_2I2i-msnVmsUYPePShGzdxI4ipNb3-2Xm8BwA4E6kzJ0eozW8rsKUVKr2Ma9Jx_FBAhzFbRQ11ybtDY0IiUTUtSXuNjdJhYfuje3qr-oVZi2gLDvhO-XYYsqF9h8AMvBcMi5-8Al4p34dKlmDU58pZCJtd_l-KgBxz-RC5oG0qtRC3VWROaFN7OxkrLSHhvWBkBjMb5qQt4vgwmzZby0D6XujBLJZ6d3KaV7xa95DUJnCAbPNwt2OQJj0P1dpgHpIGvpgaZqhxM3Rux7y2omW2Ew&__tn__=-R"
    },
    {
        "totalReactions": 23,
        "reactions": {
            "Like": 15,
            "Love": 6,
            "Care": 2
        },
        "shares": 0,
        "timestamp": "8 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038320966247694?__xts__%5B0%5D=68.ARCYJZmLrtTnTC3sm5iyZWVB9X_Z3iE67CE3Z6HBYr_fWj7OWUWY8U3a9AeU68Zm8Hze91G1AJjb-OacyFQx9dXD4yXMWibNQxt4V5EwgrGOKC3VheXSKSSlUABoAUnEuqB5nnUwOlqByQ7btYIA0TyOr3Lkr7TT6TI_gquyI68cjMGSBk5kT_sjMtbmeaiPLP76rBVqd-T1dwnhC2EVKjRe3iCCiCvzPSc24AJjEIrPFnwQf19IYFNu_68NadMK1yDdl3smvKArcpIso_02oMgTFI_-LtiIL1aYpKc-QVJJxkZkOFhcAmhwBE2TwO11poZsskIm4shoB3u1tcfmEPbEHw&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "9 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038261502920307?__xts__%5B0%5D=68.ARC0gKVoR2EA0HBb5qHQ2Q6QGp8wIOr3njwhyjqEGhtBZPMiW-y1mBZPM3rwbyGsdIwvG24YaggQYRIwoDoo8jOV609O9NDX2RDv5cocrxIbjmBLWCDczjEHbQuH-N71lEDrCdHqfgzaljVvF3VoYVzYvW_l6BaISM91fBFp7YanKvrFPFw-wGpyTJdOdcbYyE0UbP6HigBBVDAo2zVGwQ-SjYE-lDsS5lZmsLBglk0fXWBjA9mhsVOVP2DIy9lXnnmUYAqa1mrAJH_QcTVSxzgjSHN4RVbJaDo2KIMSOHPerIcfkeaEhotJqdchfsnIHbUfHUE2xBYZCnSGkJbbv_9EyQ&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "9 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038223256257465?__xts__%5B0%5D=68.ARDWh0G7Pf22IPZhRoJXTzg_wj8QrCFwnUsUzaISkRT2GLbs4E6riIZ_6LvOd2AX7pgx41xLIwU5W0bsvrbLjK6xvJgK_CdhBYGkbpNWsTzJKtOiiTWd2UDMmEhamXXznPGRambNwkroFghHeb017SZzJF-5KSY7FwCYddhXf2NgdKZURWzK3Fl3PpDTrAAbyFg5Mnczk-hjhHvOpBAI5ipY--9LxkjaskIjjuElypnxYROBKTZwRuxDCRY6t4o4-k8IGi83Mov3DlGXTG0gvv5EfbYvbjmdcl9yCh-_qszBcsEZOxIMprLU9cYEZIByaxIAAGAkZudsP7SPdS9JGKxWkg&__tn__=-R"
    },
    {
        "totalReactions": 8,
        "reactions": {
            "Like": 8
        },
        "shares": 0,
        "timestamp": "10 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038170836262707?__xts__%5B0%5D=68.ARCeddQSRxAS-jSJvDSbOJ7Fag0kUtCdt9YuF1OP6dQQtGe7RMEmbRqYJ3E62GkDnfsSjSTmsJUDHJ3V9B4M5gufxfGvdLkNK9YhMtIHOfL3cfvJl6M45gP7ZfhoiqUmxTWtbsEuavNFY5-cEuE1NJTUGUWLkNFNP0PTJ_4pL8H26sADPSGv9rBbAwUFhvqXSCJQVuzhrRLpLa8jaxTIB6YcUxgLlokA-6vgn73VFFR8rbZfqpEjA2neqQJnPLXUKHdlCzcM0jEY7IgzdD4wZbVTvwBtiu6CXm32TAojvyt8MXgma0Qqky2wpLjjDxEoJ66EtDv81ylmEV9_a-X97PmrRQ&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "11 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038092356270555?__xts__%5B0%5D=68.ARBNpa5cVEWPBEOudx0bTud33bjIz30ePj63TiIyQ0q0D3Y9A4_mNG8sk-lDxnMFFwYI-myH4NgNV-f0UqSHc_ZjyWvzoumAvfHWYl73SOJy6-wcoXtZAEwwX_uaI7JSRkbWmGYjsABmG8Czbv3LhA-rwsn9KMAcBjJ61yDPr4TTKLi1a4D9UYWkLtRrS_2Y3S3PwrNAQE7W3CkzW7BeXgjPci-fUK08l-dmVLugVZ6SF4yTUFDafVZZ2QTE6--whgIKFase5wJU5NZxRzKqIsyl0A9eHHgLh2SNX0UAccxqCcj8-dGR8HMTXJz93j8z1bkIsOYVerzyaw1joO4AEbB9Jg&__tn__=-R"
    },
    {
        "totalReactions": 32,
        "reactions": {
            "Like": 17,
            "Sad": 12,
            "Wow": 3
        },
        "shares": 13,
        "timestamp": "11 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038051996274591?__xts__%5B0%5D=68.ARBENYLvjeHabnoSOn0T3bkCTz-D-_ng_MwNsKw9IWmiFzWRVBFmvMWoOWYTapGGBYLGOfGQBAkk2zDLKTyY5a4wFzzAOWaR0Jtz7z59LuHs3WHoh_BIrn7Eqs4NqelPXccFq21zVV5rYqpoiVCJkwcLOCYR5y1yRwA76sLTSSpVbXOpECzeBx-ycdOb2uIZgPEdWB42mJapg5reH0awvvpwUHJMRi96aczd_DdMiP6FybNzInW_a34jPAXu1thDJVHba1oFepwEBp3I2mmJHVsWWKbHK_cwM80Lt6ZeEaCfmiTixRHMD4U5NYRmA8JdanuPlywMUmtig7QMUq1SpyIijg&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 17,
            "Love": 1,
            "Haha": 1,
            "Sad": 1
        },
        "shares": 0,
        "timestamp": "12 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037995839613540?__xts__%5B0%5D=68.ARBhsukv2PuS8I35NmTBqdxzkQhl5-2F6HNPJ3NG_Ue2q5midrcHour3DYCjIOinjRVAhsH8EbP-xZSXJLhzTtwJ60iCZObzVhF9N-LDFtERmYaaRv5nBgM-m9uyPxqMwZyPa4uWqVB0ZLXCHwA0JN1pWSknDOGqXmwhkD64rqfZRoLM0zA4zcbrzl00iQqfkhk5EEIXGkbMILhT4uwcaGiKYwd-VqWzfedKDUw8SvF2zoZytiSOoLPv0WpBdGgWyco58rhxYgjxZElyvj5drxJ2PAFXgynKcW9SLMcl0SkuJHqPflgV9F7yB4ZeZ7YxCvk3xAhvmYEsAJvKNYkwAMxP_Q&__tn__=-R"
    },
    {
        "totalReactions": 2,
        "reactions": {
            "Like": 2
        },
        "shares": 0,
        "timestamp": "13 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037915556288235?__xts__%5B0%5D=68.ARCZOpx0qG_8VI08K3k6iSzUBdbNLXvqrbUL7qZ4yteRqLMPStAOPGMLf8Zp21Nko3epnga1r351Kpq1J7VIRyl-FIdqjRzjzCNS3aKv1jXsQ9Bh5uWsqTFFZ5NgiaSeAjm8_KDbRhFOZoWVrJZBrPBHeUHjL8hQdBQYh9vre_AspK38FXxQzoV2T8C4p6iLjx9mMJE3GCwg0BHouNYB28WripnV-5Dcwls7dt5By1Gy4GtEA6vx9vgVCuvsYl5mwCrLUmwkTpzJ1z-hjO7s9u4RhqI5nS45yEOK5vtoZcZez8tqtXFy-Tu-hFlHnoh8ARpT040uqU7CKGnnPTJwiIkhdw&__tn__=-R"
    },
    {
        "totalReactions": 17,
        "reactions": {
            "Like": 17
        },
        "shares": 0,
        "timestamp": "13 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037868082959649?__xts__%5B0%5D=68.ARBy9kabAvIcVOlFudepiY7mAvGq_wm7N75thF9SCnxh3BOXlKKhlqIzN3aeGraUCUxHlDp6TF3Ds5vndQIO7KFXwAV0j-R7BIEoWPE2czMJaICG6EPpaCd7PuyeQny0i1327uxsUSN02vL3FlYRSrywYBygLWmirE4cmK8D2gr8gD2aLBcENOB0LJbohQGah44NM9sDT7ctL9W5fASPVbr8DyLqtliG5l242iuT0WXWNyX8xHfeQMPj_RgmiVozs5wlzKHZKlCw0Q_mL4ONL61-zJUVSzlimFnbWDWJ7CDGidimdQo7JahxaNHiXc11_6HKJMQFM-MicwckPiZhxFWsFA&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 6,
            "Love": 3
        },
        "shares": 2,
        "timestamp": "14 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036836863062771?__xts__%5B0%5D=68.ARDez7zXbIDFaf2G1QNCJoa_HWJ4e5k7JVTuCdhyPfjFxVnnbVsMUvu3lHpJz06MnyNNM1CLHcRSWVYi8oiZWPrX8gxmes26799DhBARb2ls59Z8oPWdm3Z8FhOmGQeGAqGvQApQlVhtgpBHW8h5qZ8R1cA3VaS1PHmSoPHx37xjUxRyJFE-shJdQ0KTCpiffQHrXU0kuX9Uh8u_ovlJGT1uhnnZ6kPQZyGl7VfutN1mn6aRQP-2hCR7I43KuqGJ89DGLVkusGA6Ix9DhTYjsa0x1UH25APwt1I3orFgFNsYribo4nCJCqbLiRzy97fWzChx0-5wLlFwxUa6RWsaXoXGQg&__tn__=-R"
    },
    {
        "totalReactions": 42,
        "reactions": {
            "Like": 39,
            "Wow": 2,
            "Love": 1
        },
        "shares": 20,
        "timestamp": "14 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036829233063534?__xts__%5B0%5D=68.ARAq5z1jYcWA-T2MLMOCTVV3vSEEFBa4WpozVZxaHZXXaPGv_KtMI_mgvwTkyyOv79U5bGYhmuhuc4K-O2SEcRP9ibVoV-aaUzxB4ZKHs0Tou-tEP7HVvnS_DItCIPm_k8JWhpdn315zCnO4pdlgNbC-j0yFys8Gb-4rYUPHEInfCOEGbxFMZ7ZdKbNxAJlijbpk5czmvyf3RJhGys-4EjZLMS5kHwNoFb2L4QQJY3n7mKEj5kE1-okvSgncqXcJj-vHJDOAvUFEXib3ckI2IOOs8gCI-IS65zekRed3cm4qBIYozk9w0ZOTyW5OCWMEFo3sqJsZ8jy5teu5_QMQS6C-vA&__tn__=-R"
    },
    {
        "totalReactions": 42,
        "reactions": {
            "Like": 39,
            "Wow": 2,
            "Love": 1
        },
        "shares": 258,
        "timestamp": "15 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3037766019636522/?type=3&__xts__%5B0%5D=68.ARApVsqbprZtclfM43QfqUG6NEHldrXLNDQNgqNPxHXFaZkaGD1ZJuuwsGV7y8G5i-wCGFQ9AaOUlX0jWEg-UjRadWSyEB9EKtWFSPK1k4UuaWd9cUuCyuXQTiznsjCIHaBNQoIh6BbOpT_FUZRjBtI_VQNNE0sZuWVJqzHODrNzBNzd8bu1HOg5Pgu4QtD5ua4mq3rN1xWIvfSaKrccokVzb14F0kYsQQ46JoUvd5GeLrCgENGFOY0ArBQc3idzD2Iu78wFfBj9nLvjBd6_qSqZu85brz5k0u_vkfU2Fv8G4VUiHAZphtjOjcV18pws1lN-1OOSQsVm9ZlKkMRvljfweA&__tn__=-R"
    },
    {
        "totalReactions": 33,
        "reactions": {
            "Like": 31,
            "Love": 2
        },
        "shares": 5,
        "timestamp": "Yesterday at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036268276452963?__xts__%5B0%5D=68.ARDzz8z0iPUKQbjj-GTHV1p21B0QSkVKHhUEPnADoXn1W9o_bmcGkImAq2lKLH0_SKAGOMafYB9Y4EfC_GT4l6NEBwMfHVQtUxNMOCiD2wgILkEdrsFm96OhmVzp6IkZ_E2WtEeewm9dsTjahOtn1wPVf0DuTxH6WPk0ejytS1Cib3MCPToByttROMo2S_4GnV4k0l8HXosznBAgOoOZdT97ffHYJnnBojY4L4NwF6RgMep5bsyBUDojQ3IqV0rgEiD6Mx6PggXnaNzCxniwTQA6c4TKwqQqWImftiqWJ7uu6qb-iKgQ_532bYIa32po_SR69aWNUgKQUFYAiVQ-RcVvWg&__tn__=-R"
    },
    {
        "totalReactions": 574,
        "reactions": {
            "Like": 415,
            "Love": 140,
            "Care": 17,
            "Haha": 2
        },
        "shares": 12,
        "timestamp": "18 May at 21:47",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3036554496424341/?type=3&__xts__%5B0%5D=68.ARClcStKKvXvMmkfl4LlizKGJlkiICHl4-pvtywek3NdIiHCnJ7yHAi4rAhSmd4HXaBONtIZHdQrQuCZAM846jjPSjpYdoF_QwQTAczGZDoAayGY4Jo6a4q2lhiF9BPkzuPR3fAQgYt_6jpza3NnUvk9_OTxtHyN0FfZ9KhV8vEOFgA6sIHRGTqubraPvSXJTFffdNdBmrhApbnthEMMxEYZJT3m_cDBx5bTebwlVrWlJviYBeuqP7T-X1qYyaQin-HhzyX5uWPwxzKeyDuDwJHg9-0HGjXGu3miHEMdIYjcsUByhP6N6mecOoy1Iok2MZ6TUuI2FaCVLAfDLi7d52Fc9A&__tn__=-R"
    },
    {
        "totalReactions": 419,
        "reactions": {
            "Like": 324,
            "Wow": 52,
            "Love": 35,
            "Care": 7,
            "Sad": 1
        },
        "shares": 127,
        "timestamp": "18 May at 21:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036499896429801?__xts__%5B0%5D=68.ARCq6l-zgq7TOIEGMGmeHT6wyajlREA8_uYLyi4qDv_3x2Qaxfyxj1IsgAcvD6ZWkcfyrFe_7AZApKWq1Tu4eXDMUCKesow_DMO8xpKiufdhOGDZLL0vm-O4ww63Hh_4A3f280qxFzSU_CwVik9FUE4fTSauYpSwkrtTm8l6HFr9hRqciGr4NRea-Hj0Au7G_x5DC-EShZ_AfKrsnYEp9WNjiRzO4vP_V2lLhN9Jk7IU2xV8LKYtxDY9ycAZHJZnQcHor-J6onCyENa0mfdr7qG5dUvb6dNX83CdERG6aFZKGt0kwqZcZbbL0y8j1f4CVWayuWtx1vzvFU0BC0JvPOZPSA&__tn__=-R"
    },
    {
        "totalReactions": 419,
        "reactions": {
            "Like": 324,
            "Wow": 52,
            "Love": 35,
            "Care": 7,
            "Sad": 1
        },
        "shares": 0,
        "timestamp": "18 May at 20:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036370699776054?__xts__%5B0%5D=68.ARAoZCGswS1yBVAEn--bPQdszD2PZ7RqzqFW9Qm7VDd7zcr3s3sxTaM7DwFqFUrg1TIJqdH2sxZ7XwjafmhCoAOM4XLSKTG9LJUyv2WGs0AZEwQA7juf2IZqudctoaZtmSKzG_A2FMUvhpjsRTC5IBriV8Q_FfioKqUEL6pnJMMnrNmQKYgiOLnacNhb_m5FejoKvN723uF7Z_wZoQK2lEsxgvZze4tG2WuZtHhknqgCBAkyAQQYUM4DOiTDNvdcsLIGrEk9F_tjU3pRHn5OkgRdzXGWO8YTQ9qHS6l4SXLjq4xJ2598K2ts1afbD53O8rNbV6qPeCKiTOQfTb24hEF3xQ&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 9
        },
        "shares": 0,
        "timestamp": "18 May at 17:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035957636484027?__xts__%5B0%5D=68.ARAC52J6a9EUvUL64JyULx1FqkAuP-ni5CEQ4IZ-jyMOfMSxgzmkU2QVZuDOhxpDllGIK2SE3A3ySKrqG0mSvs2IIoV7D8ZGw7psNfryIf_egP11sXF_Dwgv-ydN1l-ko6oat9hL40J1CmvCNusUiKOfyWzCibFFcworaWp2gBxlr8kYqujdIJ-2eOwdknvAHROHx7U-q_2lEuckOuRkxce8Evhv4-FNiGQNVt6umYAZH4oOcdUyoLwkQERwq3Cqano1Fo4dBKGS03b2D16wphDQibpxjlIieqUGiWHIr6XXcyO_Jrg8t8bRZM56hV0R0fY15MVt0Eo3DsRI54JcVImISw&__tn__=-R"
    },
    {
        "totalReactions": 31,
        "reactions": {
            "Like": 20,
            "Haha": 11
        },
        "shares": 3,
        "timestamp": "18 May at 16:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035857436494047?__xts__%5B0%5D=68.ARCN__LhsaJrkm2uGPAPiM_WnzeVxXuIMQcytPM8hd8lgX6dDrI8XQa7hsmgfE9ss0yL4inW9gjJVVlXT-mxiVhwPsjmmqMIS4BfWMU-gg2oBR3G40JgyWXSRLpIVfJD2ySLKqq9VT3BrSFMehTVVdhgCzS2m9n8Y18lgFMOWsKvGP-bF5IgJw5Gxk1GMZecQQnQR8VSwP672Ap8xJtTcHDBxkGXvJXBLRh7cdnGUPWGGAFpTCw4Yj6OV_gm2H0ChimVL_F5k4Ye7bWBF1Nf_QjZ2CSdsdSCE4shK6QPFPcFVeWyqCSTPPZEMFN5oOkWj3i2r7fCeP6IiGkmCp6fAepEvg&__tn__=-R"
    },
    {
        "totalReactions": 466,
        "reactions": {
            "Like": 392,
            "Love": 66,
            "Wow": 6,
            "Haha": 1,
            "Care": 1
        },
        "shares": 53,
        "timestamp": "18 May at 15:43",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035786159834508?__xts__%5B0%5D=68.ARAZtcv-2EYA62-v8QKqbu_3IQ5GDVvhgd1kz80nA0JS_-7YBGfwacgLtwJSrJcqXof6Fp-ZTJ_rX_B4o7VGYNkRUneOnISzojbD4HQ0KRVIpg9zkAmFrA1rOVQF8d-BAgYpJ9AI-2aOdzZ1VpXnjdvk871jTF6ohH99Y5r7WgoYUIUu4e5YJ0Gqerv6vXvsg9mCn4DiU_Qe4G1gIC-u1xmwQ4SRC8_qRykypidnlQnzbhsZL4vUGcMrhOJrsmZIlX71GSJ6sy_SbdZuGex8LkEXvlftbYiEPtf3bS8rd8zPntkLjI9G2v_jvBwPcvh6WflgEq3_dTB0nFfDMEOnBDo0tA&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 6
        },
        "shares": 2,
        "timestamp": "18 May at 15:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035740039839120?__xts__%5B0%5D=68.ARCo00Y79S5cqE4hR89tmGikuBTbIWeRhv11EeCJ9rJ6j3HUCqSArmIjCRYwyv1a7gG4aXCBQyNsuM8bhrON9rkLPRiRRcStG4z46FQL6Q_DZXy-fjPYZgiRZSiPNG3y-tpZkben7hqIJIIHH8aeNR55k3JIhf5YL4T0dYDbHZ2A8xkBUqpUspyQX4BYmkGu_ZITalghaoYoorqSH9dVBhHtpH_wY_ozZKMs2r5HDMOAdKPGgACdAaQkhFIx_ibcBTrlAcfMygl32e_bt3lOrQTIohJPSC9wsXciyv22bdnfAZebVCNYHlm6bJ6nDWNta5bV7TOJlS-OKpymuxCCc9SlFA&__tn__=-R"
    },
    {
        "totalReactions": 72,
        "reactions": {
            "Like": 55,
            "Love": 13,
            "Wow": 4
        },
        "shares": 3,
        "timestamp": "18 May at 13:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035551229858001?__xts__%5B0%5D=68.ARAJXUF6tMfxvRZt0vYCbtZ-jyvXkKIVPuzBp5_728MOdbAC2DSTpG-SW5Cd8MK00rj8-kHNx7eoP6i7wlZjKrurAhPGqGyDOLp99NcHjLjTzuFDxg3NFNtGHf6mQRRsFs5XHMQ8LrWw-fMRAUlybbAHf1mbvBAQeKp0iuujKrSXaFCR2NFc_-IG4bfcDG1dK0kb_IBwaKDPfzgRIFBgwaYbDNcVJCTPe0e0TqupLTwJFfApwnfiv3NDqzj96dDXu6Vu3VzsnyWIhMqBlChcGiIBITWCgXpZffdsfurIsQqq_pIoeIE-I3-La-fSOuQFtI-fxVRT9b5HvFxJVm9dbKUXWQ&__tn__=-R"
    },
    {
        "totalReactions": 29,
        "reactions": {
            "Like": 23,
            "Love": 4,
            "Care": 2
        },
        "shares": 5,
        "timestamp": "18 May at 13:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035471963199261?__xts__%5B0%5D=68.ARCTBpoZ7QM2omgv9wGjcWx1KdMoqyPzvYjdQahszIPiFAV84sHauk_Af1wll1Ezzyy-45sjwwmpcbwoVWI1v5hKrSB8YTRkqnMhi6Ud_C9enNOD2Ygmlfh6EjjoujABuQOl5dES1aQVQ0KJdtEwv_v_XoqrPDOILJlLTsiHcBZIWUd3poVEtem87IkIs7mnU_OlXSFKpwU8HjohSymp1Ltbj6a4c9u-2U6iymuLJSL1JNS02y6taBB8_7EXPtEPXkx1i6sUPCJMUlSnRQIL6csfKb1YvSwLa-Bqs5-TrPZ42QKTMDOFRN6hKIIgpgegCq9uCoxpZPDy0RYoPdMjAMnXvA&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 6,
            "Wow": 2,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "18 May at 12:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035372499875874?__xts__%5B0%5D=68.ARAMKY9zY0OlH0qF3BEbzaw4nCyC7lqRKvS7zMvqZVh3VIIuh81Y6nAOsFIyjy0CMWSPR4VZXq4xWIYU9m3gXnA5J1U9_reQHeaHktKDYwBgAfEATZ-UMhl7hikU37jvJ6m6yVGmz500XzCCAaI-H9WrYQvnp6OMMAfhx0MlAY9eTFAnpNSCOmCUgwr-ko6Lt93MwC4AkHq6Wt65imNR0NeRtQ7r01X3img3au3sxILL18UFucJMUHTBw5DFXKEDxL9VX4O1hYj0upyM7f7Osh_PGt1DX1CDk1SLZ1i4QSR-Yc8z-FVvTFIURm2ZoAWu3M7uh8C0WSxZ9M5foWSs7NFJbA&__tn__=-R"
    },
    {
        "totalReactions": 50,
        "reactions": {
            "Like": 22,
            "Haha": 22,
            "Sad": 4,
            "Wow": 2
        },
        "shares": 0,
        "timestamp": "18 May at 11:49",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035298349883289?__xts__%5B0%5D=68.ARA4MrspUuf6lkdT6Wbh5d3hYVkwVyfUbHKXLBR8wqF1aH9Rw5m49isi8mqQ44yfEHa35oViZi4KhOY0xi-2dpDJYJ4AOcdO1z7QJ78P-Eb_xKpMIURGcBwRuT6lQDVOiJtfTvEzquwM-rYN94GICPTbvf4jKdXdPoDV-oXopH_TKqSDa-eIk13oxkQ057V7DrtjN9pBXw4FjCamK6eDvBKpvFDaWwdcDO6L-_RVZ9DEojMxDlI1dHF_JQ0fkwXuVmKNPYx0ETbTW9RHE8yy_jA9JO9N3-yYCHl-Dzn5Ywz3unOhiuD9KTGWC6a82Eryf2BjmHnvUgCGSL9jkR4YdupD2Q&__tn__=-R"
    },
    {
        "totalReactions": 44,
        "reactions": {
            "Like": 39,
            "Love": 5
        },
        "shares": 3,
        "timestamp": "18 May at 11:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035229966556794?__xts__%5B0%5D=68.ARAwvWX8OG0bOtm7X-1fy1TxNtq7GoWgE8Ykz72hP3q2u1k1oMPqq2CZOTWgucXz-vjmiwFZ2N6SM7kVBWrTjHMq_1RWSNXluBsXF2qCWVKi1YaXcsxdjJ9nkCcAGjlAA9Dak6WoBdtA79N9tA106hJELMCMi3h-oXbhMWcY2cJIILD7TGbj5bbnMX1g4xN99JFDPgnWuRkPBkAMbz44hMwXSZs7O45biggsBB8lzsYatxmvztHNCNWxlYdyRWYW45Hb7NfsWclmiDx0htrJJ1I6RBh6RDm8fM42m_Ab6a51ddXl4b4z09rzLIDBXVHofPz-da4xStAKtv4oXEXZjgry5w&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Like": 14
        },
        "shares": 0,
        "timestamp": "18 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3034264836653307?__xts__%5B0%5D=68.ARAHvAbPUOizh9qtaaeNH_BdDvcNpJwMr4T_OjXKaJ0qYw3V09jgaGQQL1VIvPTdGplhJuoBJFg3R3CEbLE132wQySYDs0LkMia-nONw3lFE-lMxpaqz0yeSkWIJ_-kU4UN4D07EvOFv-RSnioO_Wf4r2WwASXC0zi0bUi0b90nGR_PVR7MvWiA3PDEyvKvJq4Tc0hA_xrd1Pl3UHJILIJ2ibE4RGp5VrMh1Nz6SI9UPuXoqDYojoam7Dk5Q_dGogOuBbtSJ3HRPmrMP-z3s5nrys4oFJGbIgkftwPkWTOY9wCBOGe6BT_Vm_rEypDEwGhFQJ-kNQCXcGw9czCL5i_KQZQ&__tn__=-R"
    },
    {
        "totalReactions": 158,
        "reactions": {
            "Like": 151,
            "Love": 7
        },
        "shares": 24,
        "timestamp": "18 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3034258229987301?__xts__%5B0%5D=68.ARDG0vGMPs63Cn8k4dEwNwKf9gt7eHiVTr7R4e8Gq9MKP6ef6vQcCNjKR_DJi1Xap_iz8J0t3BGGiCjxHiblpfxYNnmKFisBfsvbJfU9iAsk-DyIOeH_IH1m0BNrKoD1C546va9j_6Sp9uKi6I5aiDUwqX4Lk8zQc1Ydx9h696G9Ep5HQ6JodAFgxvDMmPD_SFCBtRD0fTuaWkaRBhFeNASbBD1ARjlJxy7i4kIreJpHxE3JBVMZVIH6ZpPyvJj9uZLNkg-G2CSTagh_yXqH39lxZmbpbJ5bE4mJZ0JZJT0binfPPSjXk-LmRBvyWUqCI_x4-INFAwxycSQ0DpzNahE0Lg&__tn__=-R"
    },
    {
        "totalReactions": 47,
        "reactions": {
            "Like": 44,
            "Haha": 2,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "18 May at 04:07",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3034368269976297/?type=3&__xts__%5B0%5D=68.ARD0dsAprHjqxtzf4Nj9fx0d1oKX3gcxfLp1iHOhZoKqL6iZaxeAIusqLigyw8El2neZJAHqcOjTfjfvuIoOoV_ipJagWaxv7cvuJv72CoLMD3biMeIoQmMoqTLF6EhkvUbyR51MhQApVHvaaygNBgLEJGiPimioKqOZvmtthp3yh5tjPC0H8weKCCssNOgzF-aFTqVIbt4kI-gVmQroxKoxMnrDTKFQFK3fG1oqftk0Z1C7iwUGuc_wLbwaMP3-Z0cV41S1jxJOAydoAQj1h1Yv_UZnPO05KBe_BxMt3hJY4MniRJhLhL5b0d6_ZRbR9jk0EgBcqxB2TvNQ-Ly32vMmhA&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 3
        },
        "shares": 0,
        "timestamp": "18 May at 02:13",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.260391727373979/3034007706679020/?type=3&__xts__%5B0%5D=68.ARCLqPaXHMahWjMX7tInM2TviPJYAMyCxfTFBsE9PmaM_QDFI66AQtqfOQSrimftbbd3Aiueq2psS7gYVMpSP10rjKftNAfHD5DW9fREY8CqH0UioltRhs8hfm9V7j8AdeYt6nz5bdGYW6p2kHFrouLrnhYKZa8JKPN_dx-6bMk8_O91YMh9HR7xt7EfPAecVv-sEuubdSZi3lqtBkrMccGAoQ0ejKDzeP-mf26FaqBd69e4DHRj6BY6e1Ja8UjwudSUIaLEXTYEEAMIQS8ckEGNvXWjFLcOe9VqZc-fnlucdCwQPqhDjvraYkmGXg&__tn__=-R"
    },
    {
        "totalReactions": 1284,
        "reactions": {
            "Haha": 962,
            "Like": 233,
            "Love": 80,
            "Care": 8,
            "Wow": 1
        },
        "shares": 42,
        "timestamp": "18 May at 00:00",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3033770146702776?__xts__%5B0%5D=68.ARDbJkoUmR1WjAJurd_i7vbX9jv-CpFmS4PiPTU__GHQIhQ7h5TjgpYPZY34q8tadlz9GrttyHOUhPI1OxRKC1AGztmSBC8SokLezJjTPJWgTc2rOZfUcGkV4GghXTF23YIW8_FbpaeNSl5Le1ANroUFxhr6P-6E_F1qDiog-4KU58BTYprQopM7XzXxil1lzfjR2zdN28l7Bkyr4Vrtgl5bOxYX0-4MOn0cf0cNLNNoAZK63PEf12sxFLjtnTY5DPnqlg6VNjRX_EqYRZnOZA48_qvxtqYxOlhnbZwdxydw1-cuXuNRzYyyRDZTp7F4FR9MdAKH2S5bB6IMDtBi-Q&__tn__=-R"
    },
    {
        "totalReactions": 76,
        "reactions": {
            "Like": 57,
            "Haha": 8,
            "Wow": 8,
            "Love": 2,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "17 May at 21:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3033394623406995?__xts__%5B0%5D=68.ARARomh3w3sohYea42agPhJs_2zlzTmgd0XYSon8LGFRTTcra8VeKF3Sfn0btMLqTv18tsCe2pRXohkhyPmkwSzHYKMZm3wRRcKYj3jSN5KGBWP7h4PQcqASphpaKm3XrPBHuhkueUzMo3ctSuQ7ByXKsyGw-r01cbW1XY3HHCKb63RqbQtRUyMSpgTL4AQYJWeXgiGN4GlWulZms1HnCDuPjk1fNCcCxbR8sx-c9MEZ4Up_FxmXUdDRN9K6SmGTfrq3dZgzk_NSF6YRkw6C3_U6uQbtRh-AWjpnatUf1ivKi9wsxAjtMj9JO35NDoiemh9KWP5tOuOz3QK8zckDyNAhoA&__tn__=-R"
    },
    {
        "totalReactions": 935,
        "reactions": {
            "Like": 667,
            "Love": 236,
            "Care": 27,
            "Wow": 4,
            "Haha": 1
        },
        "shares": 54,
        "timestamp": "17 May at 19:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3032410433505414/?type=3&__xts__%5B0%5D=68.ARB0_7hnP3O8tqaCQ6I1x6tizx8QAmV5dsZOlUWjWI-lBhcWaMhClOCIpv0TdMyBcZBDT-ZvIIHcHVxJhxmXjlqgLE53v6ipzsH-_6ESMn01o_Guch4eJYYViLHCKDFevK2YkOM-6aR8EQzVJXJc1zCp77NmS_7RXWWKJuI6s5pzfC_WEIAmZmIQVUt9BzHvaQdQCzkaOc2WHNHp_42EHWMBRh9yy1OKniHTkU4YrHBZ8mU8-Fmb2O0sMUivBJzL7Y8c2hFaHFqm1gVukKqcverbgPEVG4IAx3EeTKaWNeuFuaU3ta7eVtXlCojVxpJ0OsBL3pZzT5wFCKn6dKFQnTCaIg&__tn__=-R"
    },
    {
        "totalReactions": 57,
        "reactions": {
            "Like": 51,
            "Haha": 3,
            "Love": 2,
            "Angry": 1
        },
        "shares": 9,
        "timestamp": "17 May at 15:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3032596466820144?__xts__%5B0%5D=68.ARBd3dvZzoWT5CfxxG3s7uGaCRZkXS05Yj5E3yhQKU3ASZ8-YsZpzibEILuBhv0QtchJBCA4_3FVDjr8oU3sP9Q558FHMEt-w7b5t8wINNYaIPPS_7-G9-KAlzm-vZIzo15jFe9DhO5cbCHnbYos19hXxjRFe1DY0BjfoctxJqNFbnzDVYa18l9LYL-g1y5UWnhlttR37MXXH2qZl7Xyc_nlY4ZY_ve-FWdGjyYrYfjnCkbatD5218vnmtNib7e-rmao36t4FO6p3nGAxrH0Cozkp9Sg9NGxv_JVVmHH6uMZgTpTrP-PQi37p4HOihXBg0U9N1jGIG_8mTz4xpkl4V6rdg&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Like": 14
        },
        "shares": 3,
        "timestamp": "17 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030973556982435?__xts__%5B0%5D=68.ARCkS3YheRbYW7KFSjQYWDoXnHx02FJ12lbyeLwMbJfDGijUTY_fHyMTTnjXHk438103QW2UGcscwN7IRIYruMOcLxS4lMTq1FCtpT3_xOrr2tnG10G7-YrMxtKWTXPBnFwHkHAWtxfdNGMAnOKLNYiGlXqxsGXpbZJRF9PUV-296ocjXz-reCIIXIJjPLd6EDiWnGd9I_qHrv2P5tC6af4EI5kzaV9nWbYTAt_8z9Z1ZTOvcLWxt0hSCY-R0TDNTJglASDqNp-zPumQVk-9k7b3JChAlE0yxRIfAgEOudEXsL01UIduZwqtJTn4brbVyEpJzBXQSWzuk0m8r9DjRPAYjA&__tn__=-R"
    },
    {
        "totalReactions": 29,
        "reactions": {
            "Like": 27,
            "Love": 2
        },
        "shares": 5,
        "timestamp": "17 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030963623650095?__xts__%5B0%5D=68.ARByXotFoz6rzKIogk4Nsjjlun3zlTV3-ROpZwW61uVn-XDjsCw2nXVxSSCVqBJVOdRGVjYeCmIXJBQHdyjxF-4eYRK46Bs8YjV8_W-gq3IAvq2MNuWYrT2kY2mZBwwSkJIMRjb_bPytb-Tp64bcb42MkeIfruefZjAjYyScIUh61oeVba5eRYs-9rWWvOXiijS7zbF5EG7axJ5hjjX4gukClWzJypyDNIubvIniXgBoRk9-7N9ZaBEbfqNP08Lhl4bZtXPpvOGlLHuEd3uoN5gyMweQtabLxDxdG8rFmC7oPNW-AZKplROidYxxvFcVCyuF6ewqqBzFhCTUodILt3fCkw&__tn__=-R"
    },
    {
        "totalReactions": 152,
        "reactions": {
            "Like": 117,
            "Love": 30,
            "Care": 5
        },
        "shares": 22,
        "timestamp": "17 May at 12:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3032107126869078?__xts__%5B0%5D=68.ARAjJdscb7XZnpaC-cQlmvfqndn0IroFLjyevPD6pwbWuEdQiX58OQfaeXyknH4jHAX-4RNK9gg8lEHHyBxu2xmYHqPL8aj9HkISVbS8GWm_l8UCmMlB03j_2EVYCuukYzkm0OHBl5jQyb_pI-RgS8bzk870iTrO5jh5gq7jmcq3Gq-C-_jyar_ftPQKflkl-bUCY2fwbYQOk-iS0sOv-D-pQI9xiP_AJrBr5L0W00Yv_GOd8-T9zaXpkf3eKkWg2rf-ixIXoRTvatUSlqtr2TBa7YXmbhzX-eMhwLSj1ll6VugIzNkfNRFVbh_qvBPoBnrdXS2GobGmVKL6vcK64d1sbQ&__tn__=-R"
    },
    {
        "totalReactions": 25,
        "reactions": {
            "Like": 24,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "16 May at 21:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030212360391888?__xts__%5B0%5D=68.ARBHcSiQCAHd5AeLjZ25qRZzTw_HYiWyTck9A4R4-VcA2SafViyh6obuF8asL6qDkx7Y0EpYOVZyH-jXjzQcO6CPSQgjD7nmbledvfpgfkJ4Do0CFSBuWfPCDbqnpFlIm69UmgNNyAW-37_0ldL8rPkjluYV2OiXUOTAhf7W5kIDW4l4JqT779KLxOQwvznARMYGHV2Cn4z5zW3MYIJMyUmjPI507DUBpPKBo2sXhMUtnm5V7WUw1GIYq05Y3Y9bddkWwizHUjSoruDgppaizYKb9_9q9qpLRpA8rUFrOjUh74svhXDNgG_R-wtC4sAtowzGgNLz3TEnQb_W0-1EJTWMng&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 0,
        "timestamp": "16 May at 18:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3029295437150247?__xts__%5B0%5D=68.ARBNyJCkcYzr3TsUdQ6_XtwLZUag4o7Lipe5R_4cg1EfZeWoSmt6BtRiWxwlVNbku-noHIz5rDrcs-K5ZifOJ_UkjeRgl0nyap10AAGeEyjDqQGYMGJYCVihZYHK_xhoqTE7As2SLgTl4A13lPYojZAmTtgbZTXi4kEU4pQeX_sX8DBPAt4r9dEq1s3WDl3ysvv4Y8XJPKOOXHgMmJpXHkQjA8ZeXA4jp7oN-z7LMJrvxzROA9OSzBXxtMN_n57qVQfR6mshEVtQzaWLCTknCa8kmuO3rnuJ4bbcnXP_J-GPtslDN0zQvrqF2yEmdlOSlMpicmD1U1ihw6vxDqGNMl2ecQ&__tn__=-R"
    },
    {
        "totalReactions": 322,
        "reactions": {
            "Like": 270,
            "Love": 49,
            "Wow": 2,
            "Care": 1
        },
        "shares": 34,
        "timestamp": "16 May at 18:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3029314453815012/?type=3&__xts__%5B0%5D=68.ARAeL-PxJ2XQxzkrCWWvsbHeLwIzBPGXOVtIKoDBGNoOLVOabR9D19TUCthW_SebZQ_3SSNoq7KpyxcGAb7t53wDJARh-JPflIV4CAHUezb9FCdT4rfzrfHxwc3oXGeFb4v4M4554AYBdIXFXJFldqPq258ldYrEAPNXdrYEA4C4Z_9VG4sv3fVgfPdm7JTRlgE9GgpfI9QXoVfNrLeqhpgvl-RaZiYg-SFT3gNIKD9oYCO4NkAv52xmWfIlbD-P_kM5shiioI3jQZ0eSCn1x0-1WITzC1bie0QNl7iN29y6PPhzU_17qU2s4O5-EcRpyDthfNic81cebj1zEUzP6oxv5g&__tn__=-R"
    },
    {
        "totalReactions": 11,
        "reactions": {
            "Like": 11
        },
        "shares": 4,
        "timestamp": "16 May at 16:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027588930654231?__xts__%5B0%5D=68.ARCZddY_fzyXuFmpLla9BI8cAZBapRMWWjIIWxp1YqTzSKi0qpSlYYaIu_nWef363dg40cCESq4o3SrvxhHu05Zb9pYPbVhAEvEA_I8XsRAw3ggQm7K4Ax3nHPx_fsyX8rM3g-zlg2YXOTGbrDiCObvf7Wwu3KW2ekIaEzENf6EiXnwJkLzYLCMHGC61hsEJV4V3kWaj3LP2-h1tPSjtC3o98vBG0Clm-s6CWuYqMxayZAonWUlisEIOZNMmppRgmaqJmTs-rxyJOs0K0D2e-F9zwuY_8DGQGwpSeqMsyrgt3_9GJnZ0XRehwszjs41H4kuNSANAx8NCMFuBrtv7RTxIig&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 11,
            "Love": 1,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "16 May at 15:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3029299173816540?__xts__%5B0%5D=68.ARCnlKnMP-WV7yf-e1vOwEPLOcFSqR3PfFq0Ii6LhM8JSGJsoTCbFKHuCWX-RpzWVjJsEE6KVN8BkyCQBGM-3u7VLu9DTdYZ5nMY3yUGhW4lRgkgOXz4tmcCit2HCYzaokQRSdJpSC7Ayg_9zt6gtOh9MjAljAxLlqAny_OQV1GZ3BzX63ZG03cFC9c1GABBVZ8DIJjMjiLIqbRMiqak9fQ7IilcDzmykPeuyJkqrpA29NTnBQ8XZTk83ScejFwXU2xQoqfYAtPDfPOQkU-tt06tgHiW-auk1NbOHn-g4t2tI_ukZFXleF-o-wro2sX-9dPvsDYdFz-180_P2FTc_qXxYw&__tn__=-R"
    },
    {
        "totalReactions": 827,
        "reactions": {
            "Like": 610,
            "Love": 199,
            "Care": 17,
            "Wow": 1
        },
        "shares": 70,
        "timestamp": "16 May at 14:46",
        "postURL": "https://www.facebook.com//marketer.ge/videos/550848869198659/?__xts__%5B0%5D=68.ARAt0bGzZNP1NZLjWE9Ll6sFYpVFqJrmxJYY7Q5qf2eSYc5GClZIvxtXM_E1McmoTY2-9UYt80MeQXx53xGD3E2d2-GvqLDhBoNvAY6fFRA5dGSWcZuH5WL1YxSOUq5V1hKQpW3uwYaTH4HiN5UO8Y45OG1lwfsY6l7quVRRkHEJWyWpvazTtj1ogEfDQhPRUnhzZhfVtwaE0F9VYwuFRVo6lptQhLAiFWBZrXvNoM2mGgNcdgG-GiIuh0xfelpbJ07a_zKOEnIkYAgXyjp5WpsfJq1b8hZAktdJXgd5lcoavXT8p5LLoItpfwcJgcb0aEr80Mro7MAt3pRXfvw7O1tPZWd8V3RmkeAqMZVG5ZfKPaQ&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 5,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "16 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027567917322999?__xts__%5B0%5D=68.ARDfl3eszwQtH3x1qZ1sP1Iq9atHq-7yXPhqgoBkcdEpSgDhsoubE3yjiyHkKiS0VqUanFRc-BgvuaUXweSpKjP51mT1yBOOIHhypqtBvDhKVKrcTDYoWHetV-ORpaGaWWal-OTjbJmgOgq_9JBDeWZxthtH7yIFmCtXAeUMAUGa3u-GZppG9JcYwX1Of78hsmf_PnUh1hKPb6KTMELW5YxL_S0SQCw-EMurw_jthUc2fr8vAwOLeL-bZNJFXTIWTAzBK6cXzIcjDyMSTbmbVl96RdXbxI6F4SOB6KVbALR_i680M0zQTXpIvFrSo5MVnQdBkQJIDNemT3BBbk0858t0dg&__tn__=-R"
    },
    {
        "totalReactions": 25,
        "reactions": {
            "Haha": 16,
            "Like": 8,
            "Wow": 1
        },
        "shares": 4,
        "timestamp": "16 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027565293989928?__xts__%5B0%5D=68.ARCES1BjxPeIMaWWEupsOh-2j3iyZO09ctdl7HmDovG6gDMG9yoe5xy88PtBwZp-MhHbx4c6L1leuzR3i6h6-LxPa85qqYDk_QmOCCFq-zmIg7Lyqh6iJiUOXukR8zpHM86z5ZjwvwlEZTxD9o-wBSwXT1vWXjZz4cI5frrcgqIGgVJ2sdVqRt8Y4IOswq0BqBt9dXhienGP4xWWeOs82gv3zFvmgBHbBS_RAabTSJH_czlMztRIZSHMcdAynloftV912pyTzPD8Cwz6IJIaazzePsgio-K_a3b2P-o-ibW2W_Xi-VuSMciScCr75dujk7lrDR3wMDLE5k-u_0Lb15PC0g&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 12
        },
        "shares": 3,
        "timestamp": "16 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027560863990371?__xts__%5B0%5D=68.ARB3OCHkgYX9LTM1ER7qWI6e5edzbmgZWa9Jb6T_AYjLZicy2Q1J6JSPy0x6_nd0c8QDXAFE4dZw1nnLJWGDvXUlAzRsTUiDopAHBzQmvi_g1mKAB7GtHwfBLfz_NO2tb3FinevUCf1WPLXcItwyiHGvSyJWzYfwyloGRKRijXvnklL_h7YB5-JlkoShkl6N27J9tOojVIJn-43p8UGpf-TECmhRUd-VVVUXJwb8nRy-dVnXd7CXdLjb7mpLIjIfhn_ExpPJE3Alc9qPY_gv1Q57JMOEaW6mqUouC4iCuKwAnEzzLsA4d9575kyMixjiI_OnEmZ4bUzNzdwruf7YEUlbJQ&__tn__=-R"
    },
    {
        "totalReactions": 43,
        "reactions": {
            "Like": 35,
            "Love": 5,
            "Care": 3
        },
        "shares": 3,
        "timestamp": "15 May at 22:32",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027155870697537?__xts__%5B0%5D=68.ARC30SxEmZl1vACmMZVu50ahKd0LwT70vycsCNTPOl_sUjx6OKuPr9fwEhtBouG1haesLFuD_uIlfLUwB8fG4FrigeVBS37PgPux7PFGAKOBKZINo9mtE_TilGVE6d4Y1SvleIQeXdyTWnHejK4K1o2m5OejBExXqBJSUGHynsIQKR913fK8PzdiRxhtylZr6-A8ts1i4vC_O097FD-M5X5SLq4UX9Aefu3jCNrev-IK_iev6dvxFOZe9oo8r4sLy9Egxf-hEowQaqyKAkZfk0ZLV6r0EJ8pf8wswENTAv1taD2jUtLEOU59zHEMPpSkW4myzXrO9fxUKQPZPjJ5fLNpIw&__tn__=-R"
    },
    {
        "totalReactions": 540,
        "reactions": {
            "Like": 391,
            "Love": 74,
            "Wow": 64,
            "Haha": 5,
            "Care": 5,
            "Sad": 1
        },
        "shares": 44,
        "timestamp": "15 May at 21:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027034370709687?__xts__%5B0%5D=68.ARBxWxeFSSZvg1e2xn1_efAELFsgO88JsamtXCrTcgmeOeSRcthD4OnqnzbDS49udEra_uJRRJyUkEcdnR6CAmdNN0QNZwpK0nt3p14L6bY2M7u_aJoB96umSTtWzzdOFjjxc1vmy6GFCOfft8sLjNkpJgBg_gZa3ktCvvL0vuh8A6dj0c8qFMokbXOeqY6j6pDvZxZr4p5f2wlAKjMqRP8GaNKgyaJATFoZrRmZhCZE7CqBf-c0UERbxs2jkh7mQvwZvavZoeCiLrSp88TU8hvrQDn4tLSX92dhNqAXwrFe75hi7niSsCe1whpzlfFBOUoHQMOqWJo_RSvfb1naBm01mw&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "15 May at 21:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026763567403434?__xts__%5B0%5D=68.ARBOL1l-LqYPSuN37wNfG2t3_X5Sq3zTNp6eTy2uIqZmAgUNWcru5p3tnzmHkT4t8a6aZYBsrGdQMtVR_FxV8WNrN_0DhSFI-MfwoKSZebHej9rBnziIK7Mf6C1CLLSKQmMdMTfol-OQaYJWw4NK5awLS7N3ICJRp5QzE379Y1NBtS5J8_NO83FijFJwS-BPm6_XbkRZ-iZ_wOVkr9cFKbaRD5PKuXulGvgdroHHICRNGx5fkFBDq3x-VYv3cPDr-xYIWLFCpdnjJzZlGtaepG1J9v-W7JLAsDXceb4EHr7FsTgrTXwpNj0SjvRQrYhg2--v4Zw7BtccJ-Moy9HeIOyJZg&__tn__=-R"
    },
    {
        "totalReactions": 87,
        "reactions": {
            "Like": 79,
            "Love": 5,
            "Wow": 3
        },
        "shares": 8,
        "timestamp": "15 May at 19:55",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3026797137400077/?type=3&__xts__%5B0%5D=68.ARAVTozHtjyckSjn-e6mZqg4kPIh12l2SKV2eCVEBAhal7-Fk2jubxINMelAERXYrLFboleGrJREfpGlMyLFf92mVZEPWMC0HeEzYEPoe5UxPo3QBOiB746YsaHbuvx1mZfJSxPb0aRwQxSoc7VcxlwbSaXTujlRGF5Iy3CRbC4jclsOE1qprsn-PXXE-gI6XKfGc0iUXwfyxQGr5rZvK6kt1ht92CW06Gxu3I2cxO68eUhgMJFnwIC8UhCAY0ncaEyOkgAOUATERZwPNbU70D1TnghrD5DBFI5qKM98nJUuIPu7JcPjw5E_P5ZFC4lw1dKj3l_Aey_yZ05H2JX0yCGuNg&__tn__=-R"
    },
    {
        "totalReactions": 27,
        "reactions": {
            "Like": 25,
            "Love": 2
        },
        "shares": 0,
        "timestamp": "15 May at 19:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026716167408174?__xts__%5B0%5D=68.ARA1kRXiXMECS0vk3uuhzj1NrhlpLo6fjqz2AH-c4Jk24wMf_x6fGqhjjnpJXpl-tTdgYzwjL58Y8BAc9_R3ZXf7cnScNSGs5kMR_pMI3HwYldmx52MBgsoBcPBSKi9HLzKU5oCzT6-wnC8WfGWPGqgxVJlkotL34_rsz3g1kz1e1bJj0xeYItWlSDshHsGpvGSqehj5FVrPt_0f-j6uunlVPggCVqaCk_W2GVgFK7jqzNlaKymmUnc3S15fYKnPczSUymh2BbL-1ly8gjySK-qNIP911MM3l9JTDMYHoM818QxW9EBw_V718yXLT7a62QBWBlBrTQ4rVuENdQ13dJ6okw&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 11,
            "Love": 6,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "15 May at 19:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026704727409318?__xts__%5B0%5D=68.ARDHkVMmq51xKbsPikLaVkW8WxXsLsKnF06nFBsDFW13Xr7tRCEgAd62cwr9nueZhMYlIcSoVJLneGiTLDuqRBKHiHzuUNy5xtYIuELoyTY_D7UCyr5P1M0toE9pevp2NVy42cPjPAQAMOJix_N9rRxVpC7HpcU7pH7qrjnZe2nMbcWCn87QAYOtwp430yOQy1eHNU-gSudbAt_ljwx1T09BBrFcDPsZGdkausw1rJP91-tSyNywEU-eiolc35DwTa7yxxxwkid8OUE-FK9pBoO0Jb8k7c4xTEv85kn4uSKb9riCF8xhi2WQ3o0743nlgPnXCf_hsIvLpBJEMFf9EDFckg&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "15 May at 18:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026693284077129?__xts__%5B0%5D=68.ARA1lJTTqXNuTMDP3mPWWJagKMdU8SSnWPSMe7RgVEIbm3YxCSlJ8OmoKdeY6krla4QNrLEJyJMEhQ55MiqoVQdV8fR0qu99x9fd-MobuKxdk7m0g9eyPLVLAH4qA8XfgFDmYl4ZAZ2ih-Xv_YzjwFmnkPliqARmRiO490LVnXm6m39Au7YM_nyY81ZICNEFJscsEesKjgjr8w095H7tSqrsW7rwUYQFq3eKFDzdvBJNGnATcbHK2Yt8CpO3jBxmoCDG0Z1Lsca966qEgw_CRXh6aQvvjmta1AFKRqWQoDw7R8rbPuWe4NEF0QWN3-Q_CEsJCTmtneJa6FU4uN4Sv03uAg&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 3
        },
        "shares": 0,
        "timestamp": "15 May at 17:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026587970754327?__xts__%5B0%5D=68.ARBQR1_TQZo3AkVEjo35NC_SB2-u4ZVacojPNMVJBWJNVCgnNfUAoZkZ4LSeP9PI7-8d77pnkaVDVDK9WX5pASbBJRr28LgynJ00vPEXKwO0fXh0PEqflik1U66yc0PlA_83Ohyw0zNwboHSa75WcJKfdQj-2BsrOAN_4j_eaHKYivCOqcdYJxA07Ie-1hJJTPjlKRC01wABfOSE9H_Qd1oRjYJEftkXAjNEezej_XcDymuw0URlcr1PEO_ENZZV4SUtv17A-VDZXQCt7q6mTzFpeFwodqbf06Wa2rb7LANhpce5CG6QD23Z-_x2pfBdxcBYiA3l1whp2kcFNLDgD8jSHw&__tn__=-R"
    },
    {
        "totalReactions": 8,
        "reactions": {
            "Like": 8
        },
        "shares": 0,
        "timestamp": "15 May at 16:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026482014098256?__xts__%5B0%5D=68.ARCrrefN6-WwR57cX6wlFAFtxRlTFbzdf_PcbsibW8mfBADATu0Aete_vd2ocPMHBfXzVWgudxbzrW4XTfMdTi2Dog0uBjj28-t7okUn_LLyxAYarefNuB02Rg3AjUd3Uf4qcXplcVfrxrveBx133bQNhZnC7wFUfX80A2p4EzH7JMYW2jTxcSmDjNPuKv9EEB_dU1Rbqu57xEnsokdMl_VtCsz0vxAdKfVYQJbr4ue-nGTuQjQDZZkV4ZU67dVv3aMRXeW5fu7yVFFx96fCJKqIV84D_3fEy7Jorlp55SuP0mWzBhLtOLTeBj4Ch2DV_a7KN_3jDCKKKgy68ZgH24mqog&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 2,
        "timestamp": "15 May at 16:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026426007437190?__xts__%5B0%5D=68.ARD5I1UCjFFLrwpQ20tteaLyq9RCT-XDLYc8vM-kar0FgODKCMcx0snbVTKEKFyXenJPJ1D6wiIJAfWdJs0hfkWxG17u6d5ddxwwosL2G-4I_7k7QbHgCgJxTHO3iMHLnIl78P2METE2g01-lGhX1CFMe2miy4eRFcix5EISo9zmmdkcGM1w7enteZ1laTWFKM9EwoAAZlhFlxJuXJ6ppzUWKvxoxDsmyvbjaw1Y_vreK-H1Q6GmJ246_RNQp4-iC2aZ37V29r_KBVktOICou7ZAegA-LEUUmn4aZb_0NnpCgQGQqnBqzLKAtYqBOfIOx5QhXwVkl7YOT0HJZOI0bf56yA&__tn__=-R"
    },
    {
        "totalReactions": 34,
        "reactions": {
            "Like": 32,
            "Love": 2
        },
        "shares": 2,
        "timestamp": "15 May at 15:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026386907441100?__xts__%5B0%5D=68.ARARzBFFdLWbpvWCyUAxFI2NLx4y7ANpYjTR_3xSS3cSr7iFWlKpXt8yKrgzuZpWKHPCqkZXL8Q0c3fJzDCdcowyOYRPDkb7QLIvwSoPDbBRwnsikSL3TT9WD12pynckA0j82ZFImJzc5oYD8dRuT4HD4cdSN4TNuOqVyl0894zEV8qL5_JcIPjlcdHNgG5f3LqE2yXTisAu5v7d1sZOm5QOwu_bwYqDDlqAdD0D3HUGZ5kuiAQFPouNGWu8NFmR587aJkTlCwJ_kg5kiNYoKXsrAEE1JiFzfO8qhuojMhQNPOosKrz16siGZEjFn2yRAX4ekny2lK-C2dk-3Q-CSfQ7aQ&__tn__=-R"
    },
    {
        "totalReactions": 91,
        "reactions": {
            "Like": 89,
            "Love": 1,
            "Care": 1
        },
        "shares": 12,
        "timestamp": "15 May at 15:28",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3026326464113811/?type=3&__xts__%5B0%5D=68.ARDiGakI24_kdOsM4DN0QpeGVA11lISTaGMfdyv3B6oqmQrXBFtjbCYxUp2KJLftB9laPtkvTLY830Ej-3g-muMTwp84hmw7JO1Iskjyllc8FCg4toEe6vac3GNKzF6UYRw2PvraLVhyKkTGqDtgslPQEe67BRiIzhbAocPV8ENMvfj7S22z-0QJhR-tYJV99VP8eWH0ChhlD8i2zmvktMG3g8L9jkid8sium11go5-ox6HSAdDlzRnFS4VFcB_k0IM00JDaSW1RzVn-_mShwpk2B109HXKco-yKf75Dotw4PGyRCz01iqq8mFjJMYhCWNtqgC_ET6cD3SLOQ23Tf1ChTA&__tn__=-R"
    },
    {
        "totalReactions": 72,
        "reactions": {
            "Like": 67,
            "Love": 4,
            "Care": 1
        },
        "shares": 11,
        "timestamp": "15 May at 15:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026305900782534?__xts__%5B0%5D=68.ARC4K4XzD-CchGKRftssdy1iZN0U2oGiVf87_X4_I6itMXI8NRkwczXd7ehxdakFialKoweesgFyB9vxTbGatopJvR6hiFS-1KRucp3IKU2pM_LjTiP0pxxlRU7BRcK7XOMlfZ8XUo0MmhjQG8h5ntbzG30sODfLCgqUhZ7GmCdRA42mVP_pOReIlDu_jl2ODhoqCvXCpwx-04KLQzUh_F8Xk5HoFvzHyoZVFj6N-uPxVePB1x6hvb_HR1OsAzJaFv_DMr7RNwDMy8d4r--dwIWpbGeWR5f-DckxGUv-hJPs1mb2071-gLWkU9382qXhI8ckqS9sDb1vr2kqq4Gcjo4oHg&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 20
        },
        "shares": 10,
        "timestamp": "15 May at 14:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026255717454219?__xts__%5B0%5D=68.ARA7kYIV-ytBzwN1xKak0lcH6B1SPbDsWnBzZkPJB3MEyoIZ0zUPonh7pTH1wm_zhxLytb_fFtKcvkNuF7Dph9nePJY5ggaqheTh6f2KEglcl8cQRyxyjDP2a30Qe_-vtuGwSCASNJ5xsis4n5kZ2srfuCNodeuPQ7EN8-D_YGC_TowZJZ7jg3-Q7Gi-Xbn3ZFpfUoSDcUAggrh6HG4W7j8XOe_1_hazXhbKd6uzmKvg7RrG7j38-SRwO3bJW4RqcmUfrGzyEY1HtEnRJDWqdDA00sE6mdoL3O4OzqtjuWZ_VqS2b-_6_I_YXvpzDsxPd8e1XroXSBTDPqTfgdbl6gPY2w&__tn__=-R"
    },
    {
        "totalReactions": 7,
        "reactions": {
            "Like": 7
        },
        "shares": 2,
        "timestamp": "15 May at 14:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026208487458942?__xts__%5B0%5D=68.ARDa_YY_n4mmgqWCWQ9xbj55Flrvphk4Vf0Xs_6CQQfLqQW2_2ZuiP7zSpnSXe8S_S8zyVW6WlW6-Mqly2yQ91r0FJjCBziBYmLd_elybUg4jgHjXauPCUarZ1exxIwqREFQXnwYIC3pguU8VCFEJ-i7O6m7UUF151pGYyfJXv6YQ1z7oCUyDJw2zSDqsgTB95w261GRDMc0KIJdlLOB_9PKJHaejwtij7GFvr0gn0k_cNsGQytGXpx-fGiO5KdcYRVB5B83risWW5kHkdnT4XwUTaFFV7beNSjmRWDcO1Bp9vy_RO8_-gwtcbGLggeteDTjoLOs0a9ERkjZ4B7RdoGL-w&__tn__=-R"
    },
    {
        "totalReactions": 16,
        "reactions": {
            "Like": 13,
            "Love": 3
        },
        "shares": 0,
        "timestamp": "15 May at 13:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026110697468721?__xts__%5B0%5D=68.ARC--f4-MDzL1P2nZ8YjGSrjloXIJT66DkmvVVcLun9kj4fEjOOWIF9x5tVx2mDGJHuDu6pwmMGPfgkAQorOj-azmGuP_xs_z9fpIDYmWoIwNcMQoTy5yAc4TKpS7cLUDIYpA5W7CiWXWzGZpgH18FXm6xDBlM1gCMN-9l9h4eo8F3QsZeoyx2qVMNS0J8wTBTThiJ5QdJF5V2IPCruTCcutTkrWDXXphAlgs0qna0MOpntjbWk7k0ntsNdgGsM2DeKBJg-kYxTvNl8qj58wqW-B-gRggBsDWkmlicl2aU7w8KCJb94hzuyrxwjXdFzIg4eA2YGLdu4Gh9nPL-Kfh7DYUA&__tn__=-R"
    },
    {
        "totalReactions": 26,
        "reactions": {
            "Like": 22,
            "Love": 2,
            "Haha": 2
        },
        "shares": 6,
        "timestamp": "15 May at 12:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026065184139939?__xts__%5B0%5D=68.ARBCohmkA-S1H7cQMfM4bsREIT3b96elQsomoWZe9PZx29-9yiPn2fq_ekbcgfcLUMBP6YXnksypFT5mZ_VvI8JZ5bOumJjCNe5svvDokDzNwsSVUwWi7icVcqFF6ibGTuwGJe0On0btdqG1MmDp7BULZhaqgcBRdRL5nfGCqm0m-BeDINahY-HvjLmXCGPlyfJru6wko2njwOlL-p9Z0DLVF8ArFBVR2egSCosClhY8YDXPxqXi9jmW9hmuj_YUWa1lG6CZJEr9pwONqOdVEy9yz43T1S1w6pfDNYyCayD0SLCVWur5EujQ-Uh57itUbMgMocmK2krUBFHvWEGqwZ8_9A&__tn__=-R"
    },
    {
        "totalReactions": 106,
        "reactions": {
            "Like": 88,
            "Love": 15,
            "Care": 3
        },
        "shares": 7,
        "timestamp": "15 May at 12:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026000164146441?__xts__%5B0%5D=68.ARBTxVQHVbaRYerFnH6KSoY1tC-vOZkFqV8lSaReiyxzESUpUVs-syxzzdoTaUWvB_zz_255bI_2Tx_IdmMJ7HW99yokt7bU4-G2mD9qwV97CempN5z84XTEl-1hWamHgvccwX8LN0lltLn2Z1IPkUT87Ccp7Ti6PUpRZ9i9hD74COTWFq3l1Eo_6YrwnwrBWAyoJ52ebK1yQioptbl4S_Q54proFLUwoMUdNcS6Iph6yW2vN8ZL0RNW-ORKqwZtEPcz9fj3LnpSztM8L-AQyc4hIGNqNHM7At8V7NwF7ry-suZxoTcJTDs6X-7ksPRIzwO1QNgqPYaYkGwEN-OYfGGqIA&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 0,
        "timestamp": "15 May at 11:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025981514148306?__xts__%5B0%5D=68.ARDDhAlKkuAq0R2c_qjfPbX3S7zRZdeTXG7rPH8vyEpCpxh0q1TMi6OQIhsMMRc3RlKJddzNkK40DJrXB4RCI-oP_u_QBdU_cACbXjqyIjcdHb1SEHo_n9cxDfiLwNnibdVnlF8bmaNZsGM116TjT6WhdPrqpx7r6bbw4kt5VAZW3q_4PCLSOyos85hEYr_Gkom9HgKA-N0QYGjeKaLVuLXgYMaEwEEt6KtlEuFqaOvhGQREE1xgLD8Bay-n7g6E5QUZ1ArTn8IHAigrHUwkODCbhoPiZDX4T77J5xXYGLGRu6hqkn6tAiEInN2I0CrSZy8_TPxrw0hK5fYv89ebnu_KhA&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 4,
        "timestamp": "15 May at 11:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025924737487317?__xts__%5B0%5D=68.ARBSGKsiQvIYTSXwu75pD9REQDN9C_qm7AbYi81psiya7Nbq1dtEQIbZ2p7DUwpSa8QTmvWt1oBJdQe_fAWxMKzf6d3qoJw0TKojTDIFHNefcIoq6Rwj0X4y3e5-J2xd-PYsphK5fbW3s3S0uGNEoH0ZyfOZMwxu8dAiZ_x1UYl-fL1qr6oO4HPob8zMRMcoqTgCzqyLINicCYbmgNQp6LN1-ewnAAiBY9nG-amu67dFNSVc-gZ2hFpyOFTAEvk85UcNSvhqXHRfConaNAqmz_29tWNbrbTeamKkiJsIkCoXx5nxOUyv3g2xae7p-lWSdM0e5dlbucgZvGP00SmGztDJsA&__tn__=-R"
    },
    {
        "totalReactions": 24,
        "reactions": {
            "Like": 16,
            "Love": 4,
            "Care": 4
        },
        "shares": 7,
        "timestamp": "15 May at 10:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025883900824734?__xts__%5B0%5D=68.ARCjglXT5seVxsX38-ddrqtMceTzLyA0ZRoLmy7hRNztxIK66Zxghmtf6BSeYxfWuPZxao9IM22eFxABNOAPMvX43CV5yQhBtAa7-kLdlIke_B-Jif6o8HCCycuYUjl1ICTlhNLskDvmbyKg9QoNIoqWtWRy1Uj8xum7Ic3Jo4vZpKwZyhpoYr6Hs-ETNDGRqiEgOLwZe2w7YM1BT-h9B-nBBjjUPf_Rl41PZAjWatpnBN5kG_mGwnLwrS3YO-HfRIpeOll8hrTVG2kwnwQogZDn8mqR1HPNjXBz2qsUT0K19C-mGvOh7Ob-nHIZ5-DHk04pyy_9u9O-mbsuzee1f6-CNA&__tn__=-R"
    },
    {
        "totalReactions": 22,
        "reactions": {
            "Like": 22
        },
        "shares": 3,
        "timestamp": "15 May at 10:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025846530828471?__xts__%5B0%5D=68.ARDAMt2EN2y-TlNY3I7YvPVXNbYDH2v1HTT14NZZyi4nPJU2HwKJdPWvTcOJIJGM54gaxmVXpGsiuBPP5ziRr8xHc9RUeBpEdTXbGFnyfXGZ3Jw92W6q2kmlP-KbLe8rjJAkhlk82mKlQlUbtdVLI0surObHrbxhYGMO5F97MA0RCdIXFSpnqjrgaZzZPW7GgaDeizIdDzD0-b04uUsghuRxowvwYD-vaiBu6nyn8WZwxQFBQag5pd_P-RqX7yTk1Ca2-LXQMDsrW1ZuXGgws4fcWexYoOwhrhdln9Dw8UdU11SWpRPvwEQDuQdlWrPtjv8iYihAarb3B_87W-GRhT5BGg&__tn__=-R"
    },
    {
        "totalReactions": 21,
        "reactions": {
            "Like": 20,
            "Love": 1
        },
        "shares": 4,
        "timestamp": "15 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024669224279535?__xts__%5B0%5D=68.ARB2tiSPcuOqAvFcqNtDzA-AbvrsSDHS03J-FcXVju-L6Pk0uE86eIJ4bDm22GcK-ej1lfYUCBuCVZ3JGkAG7Gw68o3AUUX9LTYrYgdy3Rg2ZlufMsm84q1VQGijv1t1cwAb-_4jNwJ9Etj2bOTnGhJvF_E7vhbWlv54dWnTN_oGPLY7emIT69XqCJJU7mKg2blW7uXbyQd7-3uQEu5NmnoCCXxYD3Qj73iTVI3wYrLnaDdjIml5NFU2SfWFchKRp37BfArW_seQo3DNY1giJFxdzdjZzoraIFuIVmAsk8YD602-hJG4gXe5pDR6cFtzxPrmveRGJ68xrJIxE4PnN9cX4Q&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "15 May at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024664797613311?__xts__%5B0%5D=68.ARCFWZCvXeAeI8eRNotvcofFLLc9JU7pZxSLeu3KrMBnz0A9ljYsr6S2WAMQ8aE2VYlxY5FuovJ4J24eKadj29ExwJGxibyzH1Rq0PorYkG7NyKv4ux9uW_8OsrcDnJvxIsbY1eLTIdkFeAOt640CfSzk8Pokgs4p3ziqclG2PZy4uwQLKP0FMdQhi5JF5SF2qvyoNys-0krTyRQRzQlq3exX5jXXBGfi3b0Sy1NTsxtgpVfQSJxqhgRWJIDG5bfasPqXTlQKDbCePDLFsefIiR1ofChwzXyZ5Nab-x-YTWfVAi22Ti9BrD1mLzGe0oNLz0yrK87KbMOL62w3--5co-jww&__tn__=-R"
    },
    {
        "totalReactions": 440,
        "reactions": {
            "Haha": 173,
            "Like": 131,
            "Sad": 112,
            "Wow": 11,
            "Love": 9,
            "Care": 3,
            "Angry": 1
        },
        "shares": 22,
        "timestamp": "14 May at 22:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024678490945275?__xts__%5B0%5D=68.ARAszVRLoy1H0_Ba1qgrsaX1OaG3iCj0aCqWMNe4-AkF5knkbYfOlRM1H-q0GnRw7mTB7FbTbqVkEIHSCL1aKm42xfpz2UsW9fdPVQ-ir1-aIARaNdE1q6LLAOTSq0Q8k5tDJub1ml-Gh9AzXjAkEoRvL35EPLNUn12FwrWOPa9ZhtmmV1XibU0Xa_Rem5dD-fZY73lih5Rs8nA5oJLYqM2gRuQI1uubGtNwh9056bswG0fpR77gREukUQGHsriAltUhPYJr3rCjn9L_fsbgO2HA3dZvFjgo6j2mCCOQEo_L3_QHGbfisaF0KpjPePwusGwxba5pGsa9D9H_d5oiQA&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "14 May at 21:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024574780955646?__xts__%5B0%5D=68.ARBAZPN79G2gYwjgLlSj2p0oiDY1vF1JUOIbB0dQqFQ4GcrHcuPooqvFLKt7T1PzYaWKSXUgtTjJyd4aBSPSH8BsLO2avlb5gvJ1wFYVp8UN9mpB5zWRAv6p-a5bGD41R6G8DnHCvWir5v8PkPltDUefCVHZDZstFfjNQvHUAfuA0I4cB7uPd2oAwxZ4mtQJinJpbbaEwGcmUgZAD2Ukckx3RXxIB3svPE3QWMR2y-oEv6FBaLY6rU4YX2LDpb6U07q2OGfCFQ1ICDeOcmI_N-nE4jQDUCTuejBcrpLCWxBA2ZCgzW1AooALdyv8_uVKk-ud499qye3vzw0awrdceP-bWg&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 2,
        "timestamp": "14 May at 21:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024498827629908?__xts__%5B0%5D=68.ARDvwwnkee7AoOy8eTTRgl4Abkik09xRo5qxyZJjUZQMV-nMsj5Q2TU3q8PXzUM15FX0IUvmyTltmKKNMEX_to5F8R_xug3ghsfopeFprpf0IdBiCZJJsLuTH1ZK3VLyxLvWawI1z7QBTnL2FjH6GY37CUpyEe4IPxwgRfIsNMLrZR_zN5gdSxldwYYGiLdSOFHhbqrabFcPbAgGUFauFNvca5_cf1su8CUrOx0M2rRGSo-oztCmeh5qGngVWKl3wcmNJnvJD8PkHXaCjyh3KbXGyeZHU43Fe0oBV68JuTWSqlZ7TpnvQ0C6dei-s5yhXIVATYUdKKlHJ_uz4CK_1DDfBQ&__tn__=-R"
    },
    {
        "totalReactions": 104,
        "reactions": {
            "Like": 88,
            "Love": 13,
            "Care": 3
        },
        "shares": 8,
        "timestamp": "14 May at 18:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024162954330162?__xts__%5B0%5D=68.ARB4SlrfcM3Men_fJRgJdQ9Gkgi_DQyZUJdnAZpM1Dvw4qlWQQAZlyga44Y2BhLFFhq71i-8VJQdjV8OZztzoekRaTrD1NHI1RauXQDJ67n3Ixe3jBCgcXHTiIYHCRHSlcTq_nlD_-ouQoxnA3HZP-TPYLEgz8qHDO-5VCyMd9EasiyaUo3DIZa_jEkrICGHW1WCGk1fZRir57WCW37jYnZ8-edDpHcnUBXR4ludiR_QAbXGouWaqhJXLs23GDVG3uCCMt7MgkNVFco-4hX7j4dSL0Mzc3aK0IHkGLo13BKdJAVjSkHb4NCq90abAqubBORnNbMkggn_NtLi12xeXiiUAA&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 13,
            "Love": 3,
            "Haha": 3,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "14 May at 18:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024158927663898?__xts__%5B0%5D=68.ARDSKmzqF_H4m4Kwuy0k6OM7I51MIeT71PTHHFkwvahkNOsxPRIRNKowWyODhFrH5jEnx-3iOVj-X8P-NEAYVzCmCXs_YhwlTGEUhr4HdI1Dto-yGVwuoMaNF4-ZLFRlXRFlSTODVJoYPkcKp7LpcXqleruukV3AEjPhNC3JTs6alWYZmtq2zPk8zNsCBIwBx2WJL9UarSX3I5vTqAv92MEx0HjVSa_x4YBzVRrptPJI_Ouv20qIF1D2aglSRXqahTu90X4JoYEFIDDfsl9us5HCfXSRc2p3sisteWwn-ouYMmmLvY0OpCvsF4H79N-xS6vxNAs2go04VItD2ze3DuHdSA&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 13
        },
        "shares": 5,
        "timestamp": "14 May at 17:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024071011006023?__xts__%5B0%5D=68.ARBsYmI0-Bk2avHH46ZYXZwnSegSN0fftQeZ3_w7GIXTa_xUAbdy-NRSm5dZYAxX64aqbsf9S2DnWNZpGak27xNB_JTkMVN9E3BEQrWErofpXkx2ALP8jIM4qtWKCLnEbw_lN9bALDTZDCCfNpD94fF31NTa5lWkEpJ9uZb55eDt3dyarX49vgA7oH5f4tbUiuO8flTPVISArJjlOGumG2lgKplpxqbHgOu9_Tkl3gwbYC2aPYKQTufFT2ZQkAPPnCgg_Y-D7haJoCaWFMffKbokZFhbkLecyp96CRtN3keT3cObwu60dXtYovmYuYIHaCPajhMvVMxkEtK23KZ5E5nUdA&__tn__=-R"
    },
    {
        "totalReactions": 223,
        "reactions": {
            "Haha": 112,
            "Like": 76,
            "Love": 25,
            "Care": 5,
            "Sad": 4,
            "Wow": 1
        },
        "shares": 32,
        "timestamp": "14 May at 17:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024019424344515?__xts__%5B0%5D=68.ARDEWJSND2hg1cX9M_r38CwsoA0sGW67yC8iAexXEfD2VkHu11pGweuP4kjpKIFz3n6qe1uJY4E17oXjWDicOXE3JPpBoUIK1PEpuPld4NWgai6hCl2EIXBoZ2NC4Bzm2U9fh9VZb1Cj3ehBG3MjdQPShdswo1UWF10k--28KG3FSpm4_WnqKzT7NRnT-cA_zekq4Ed1k6D5Upq1hdmeIOO7Fp1byjHp4BmwkTIpfGOYFu5qZkaxUAGPFxL3RRNb05UhqeVC-PGCt-xQjXxQTyIpTeo8U9m4ve1E2J59Fz9Vfav-btCHFjb61FM1jBgFz86s465Vb2IVKyrnO_8aZIT-lQ&__tn__=-R"
    },
    {
        "totalReactions": 16,
        "reactions": {
            "Like": 16
        },
        "shares": 5,
        "timestamp": "14 May at 16:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023903084356149?__xts__%5B0%5D=68.ARAOSthGLhWEIrfsX0AS0YgpQq33dk8v-Xln9ttiXfN79PmEDTj_lRtn0WTo0GNlfmu-hQ1B3rqNj81sRpSe6LPk8bNLe9QDRbfwSorYTj5QIJ9MV9S0HSvTdkjBziisI-tGj_YKBTwy-R8gfb799Tx1tA6Ve9Ef7lYeGtfyE3ltqLEbyCW9mlYMStNd4-sjlSwpbeDDPlzoP6nzr2O6fFKWe9Knwf7x9BCJCvV3j9b-MFMAGae4HyvkUu3W94kFj7LtsX8l2fVvLX1pJmw0vAK2ja_3OZO6WaFSUaeTObpyv2YsXnjuJCB12KmN-Zo-iydp5AFzbSQscEC87KQtfKDJXw&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 0,
        "timestamp": "14 May at 16:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023882784358179?__xts__%5B0%5D=68.ARB4kX22q1IitjzEsvAxWEwfEQROQdBFDa8NuMfgktVQktNbMy67Y3KfqlFBSz_CDBLmNR4A0afwJJsSoo8UxEIOd7GR1J2-3RCgfd87zGVwzVjK0wVdBw4ZXQ-2MuZ1MviyXwyQwPDNL6jjA_eSwxH3OMosm2IDSRtYEkuDX00FoDB7niMMGG-VX25CKJxt_4qLfOQIwZ30KammVfmHbb1kpAhNbFu_nr20sZQk1NtGGbVPuYXp-AVF8mPv0oaspPK8SZzVtT9Ph2whmdG_0EaDhPcL8mLH4TpyuYi0czHvjFsxAw63LDEMPNEeLK4JvU49VQ2OUKOqoluwpEq5vhllgQ&__tn__=-R"
    },
    {
        "totalReactions": 373,
        "reactions": {
            "Like": 322,
            "Love": 47,
            "Care": 4
        },
        "shares": 31,
        "timestamp": "14 May at 15:38",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3023839504362507/?type=3&__xts__%5B0%5D=68.ARD4Lno4fCsn37edUI3ywq0GG2exzeOplIOa8mwic-V-YY4EBpXdMAnkclvQqgemnhvIlQhj3DrvFqJeV0qNJIX65D-a2-CA2aTo_gv13_80cKtqAO8BQo1mXuiPNvEMagvSVal_En1nRCPvZPMVJQnvOWnu5Al9gzML0DJiF34OhImg5QPIkSbLsuKxNeq12XdlnmPaVHA11afSk1B5vHS0EPEnqtqi-O7yNiiMasA2SRnL_0CeIScCErkGF27rKt7RnDHbh4-neTgrhmR9fMNAQBNzTnVlz6xsTfwFUlJnj0w8eEOZJNCAEI_9PXsICVLC_Fw28HukUm37g1J_0ydW1g&__tn__=-R"
    },
    {
        "totalReactions": 17,
        "reactions": {
            "Like": 13,
            "Love": 3,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "14 May at 14:43",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023745987705192?__xts__%5B0%5D=68.ARCVSwLuPLOPEBQaRzBQwMhbXHqGh604di3Mer1l_SFsUNCPQ8ERClLxZFGEggdF85fgz5UntGx_R5qSyKnVxeOmi4UZ9sMsT7hqCsbzmSx0vtt671E5zYntqorQbU6C7knPof0IApiAD3k7ZpYmh5oWdr934bNwINFXUoX-tDu9ZkUZQoyqjz2u6K6-MliE_3K0kK9Fep8XVySgKlRwIZG_f89ApXvQ56BmUs0j7orEA059RILB7sQ2eXrseV2qSj_S2kfWOuKHwYy9do8xR5VLLTm-KgUPyNbM6VQrYnk6XeZg9fjd3LuTv5_WLE6wHHSs2d3w3iFay3QVtxH4YxNkjg&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 7,
            "Love": 5,
            "Wow": 5,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "14 May at 13:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023662321046892?__xts__%5B0%5D=68.ARAvqFRKWF-S1yWkN1jU9y6uGnTKkwQIZ_7x8-dte8PBE-yHlV0xaN_9oVmw0UCfDgCPvaL5RQBJOZOe-i7uA0opdlbYQpYbqtFLs_JYA5AnmiTjimAESVED6Vw8ZwMLSRP9R7xcDFNlvQMONsLllmuG3jrDtqxZdrvR8N2yHG6ApBpJZKbj_4glowx4X21Tk-EC10WkA_Rv1ejqPuHiDLQOS-qvLOmAxedXpnf1nlWVSO6Z34r2vsj3k5Pb0ZMQP_K6IMLB6TDi4s27wqect2nTXX1DZEFljJo2izYrhOCfPTrhOR5CqfOYawXeinguE7oUYjlmBKgd8o8ZjuHsM4ELlQ&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 13
        },
        "shares": 0,
        "timestamp": "14 May at 13:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023572414389216?__xts__%5B0%5D=68.ARAzvAZc-RfltIc9ajAleh3MLIdOr9-KGuJIptTcQiG8_6ftLEzzS7bXaYid06MJV8tFeQo6_aLvKvoyUf46ITh7k9JZYrs2r9b2bTkV54MomlvINjMx4X_1VKOZujdyTky4W5xn1hrAkjYRd_8CsaiGhRWV4BszfJfT-w5YLbWsClZPVYbo0ofA6GtaQsMuNFv2cqlQphwtD1FT8SExq4R2j9OErqqJnfexMp4RQc5LrcLnw9mDQsgpCqeN5m10mPmB6g9-6Fuu9oUaVPN2iVoYMk6mrg4DVglkQT8GzUKUW2q_6PD8o0P57C90dKDq9xGgJxOMMydgjZSArmjPhPh_Rw&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 12
        },
        "shares": 2,
        "timestamp": "14 May at 12:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023501404396317?__xts__%5B0%5D=68.ARANNt2_PLZHr7Xk6ZG-p7VbgguNxeNArweW5S7nnlzqd4d_3iPcS5ISmNKadHqkS8Xvx-rMKuAR8VED9orGfbodrzVRYhJP-MqJ5YBXkLVDXqDRFjDULPKD1KJzuHL5xfB_H5VxLHThiK0zYudrWZYP7aCkE5xyfzp1U2UmG4JN5R5Ioh7VqUYhJXf1mqYXdN4DkYPgK_dpKbl2tQcH_u7iQrlltDaGP51D6ldoIzG_tB6QhCkC0HshErqSUPs_3ISHeaSXu2TtSvNipEveGwK0s1aFR0biXig2oNkJvvRSh6VzSZXUjH0HkogQUKUwBEUR2kp6pUOQH3dvdqaxtDHXwQ&__tn__=-R"
    },
    {
        "totalReactions": 1245,
        "reactions": {
            "Haha": 937,
            "Like": 165,
            "Love": 130,
            "Care": 12,
            "Wow": 1
        },
        "shares": 175,
        "timestamp": "14 May at 12:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3023447664401691/?type=3&__xts__%5B0%5D=68.ARBS3RBBk_o_2DnB2xoIQQH_0csJgoJzsgC9_KwXz3LRgMPVFCFlm2MPyc9IQzqqu4MkgGMETJo5_wn8xCJX3NzGAvKGfe5Dmts9aRsW-U7OZOn1OvxnADPRI98HDlanZNbsBH6NVNFxjRv2hlU76iNih2fdKQ8yOijC0O_TPqY7d07U_YaoSdKHLB1AwnKwrw4wumcmzVHuTwg9MlVgQEMHYEvufGHUl4w0vK8i_vKWUPLODyiyLwc77KitBSD_7eW9ScurC5_aA4w1S7VlqJkk_kcduINTNt8luQZRGDRfZulJvbYM-dZcMFc_hz1ccklLd2Ay8YgzREdblJQEkbp2vQ&__tn__=-R"
    },
    {
        "totalReactions": 31,
        "reactions": {
            "Like": 31
        },
        "shares": 6,
        "timestamp": "14 May at 11:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023418917737899?__xts__%5B0%5D=68.ARDhVRUOARF_bUvaGtgtiEsa_v2oiCzCYqrDuh6Hai0REwB0DfIvOsu8XLWZPTG_cBLBZnOoImSbc79z71GJ3ekAEv6uKtLb5rciYcMIjzZM8YVXYqpyxnA8VFxYIq1i9UVI5RTgC-j4z7Ko5DVUQLYephyUU3f4jGvOpxXY_h1AutqpAyl4bQvq681jt01254y54ZAB6fVWYY5ET3q-HawXSmoK-lx1i1pBcRQSE8A_VmS6oC8c2DakxlaNSDSLEqG-e47S373rr7IQUw4d2eiL3Cz_MD2TmdAw746RaeIBbx-6aWGXGYYyIOi6Yx_2X8VrfWWFLc_GQ2e_nTNYfEwFKQ&__tn__=-R"
    },
    {
        "totalReactions": 534,
        "reactions": {
            "Like": 351,
            "Haha": 88,
            "Love": 58,
            "Wow": 21,
            "Care": 14,
            "Sad": 1,
            "Angry": 1
        },
        "shares": 95,
        "timestamp": "14 May at 11:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023364314410026?__xts__%5B0%5D=68.ARBSb0qe-HM7DUb6x5xMl8bPV6E_x-SGqVvbc9Vdylers83sRWetDRh0N7iBbgXb7rrPLqrkCM0gXSoAlo0_MSE84FWIb0l-rYaXkqC4UZH0N_33qgWyiRDSBWRHSCYlL_-lm45PzklXCWnBG2vVVjv1_4XEfdNV5C5BeHHVrUqsuek02CYinObt1eRwKF-qIZrjnub7EAwKeS4V2t-oqpyaXKOoUr17xxWtwnGJrDh3BKGoBH3Wa3rLR8qVvg2w2xEA90gTIgUNzvHYdWG_zjlurHR9tuM8mqkzMaqv1y3niHtduZcUIMRg8wTqudmAFfVqRB1VN1mLfIip8luXNMoTag&__tn__=-R"
    },
    {
        "totalReactions": 534,
        "reactions": {
            "Like": 351,
            "Haha": 88,
            "Love": 58,
            "Wow": 21,
            "Care": 14,
            "Sad": 1,
            "Angry": 1
        },
        "shares": 2,
        "timestamp": "14 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3022167064529751?__xts__%5B0%5D=68.ARBMmPTWCdevxJeTIxTBPzrtRGWKvFbdGuwrN3W17mdYHyNgcEQTWDFlwPi57JziQMfezCfSWQvtbyPySWFRHmmC0xhnTL2FBZlcRRXoEfhC4dbJMbBwRGQJKOBybUWV4rscV93PYCXD8lTfvDsOcoP4s7NbKP0uide0kSObyDqUPnF7AUgJbynimTofEnD3yvE19hog1mWSUJICqy1h5t7oa0qlwakQQBEWCpQTk9NZvGnR6ZzTDF9yaXLxxCraAFa3ILBsgkaySjdnw825LS76aXkxJrQytUgxT1bSB6iyPfspP1GM8FYp9HWOqVvhbffpnEP52syqHjG73IXV3t3gyw&__tn__=-R"
    },
    {
        "totalReactions": 132,
        "reactions": {
            "Haha": 85,
            "Like": 31,
            "Love": 13,
            "Care": 3
        },
        "shares": 3,
        "timestamp": "14 May at 03:15",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3022440127835778?__xts__%5B0%5D=68.ARDLAHUf9m87uvtootcoe8Va7RAY0Pdu-EjTmArrdoC-E8geKu4DP0_Y9QvSzijl6V-JZKahfJ_bzgoh-iG3K08xqJnQ2TZfRA4OtV-HyAMEQdlXC22NS7Nzb-usAU2IcpnX1qpZ400n7QZHgfJwB8NViboUl8ZP-f9wX4qfteiSdmKIu2I2bobdNvwJPsR3dFX10M68EhpV3FyKGhasS87Iyy_0PrlxSZpt8VhSzMFv7cQpMeBSNJY04-FarJCsvZyAnwOLln6DmUTNS8YiGYznC17NGVmzPtMdBG6iqsdmKee1x8NDR0APHQRCqk-9IqKBeiCteVIVBrP1HBwB3BSxGMvdEmGmwMxfI-DM-6ObOQh-kgYHGFExvN8z9aSCsGcVMw908p1fHGKFE-pXveO7bUhDd_dmS1urtgd1vfDX0Zpjk-Lyp2lutvX4KqIXiqxqUxYufeT8GWaccishqiul8u1ZYgOsRI9deIfVZp9TKLTH6iZz&__tn__=-R"
    },
    {
        "totalReactions": 132,
        "reactions": {
            "Haha": 85,
            "Like": 31,
            "Love": 13,
            "Care": 3
        },
        "shares": 5,
        "timestamp": "13 May at 22:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021817677898023?__xts__%5B0%5D=68.ARD3Y5Z1GsZXf4DCQTidA6lwpKBmPJh67MO9yTZwH4HkxvuVXhwQYrWxm4MPjNrxbx0Qi2Mb9cYufvVxwO7mH5-gobYEmXKmeuqQmIKdoHWGO8NqfLQ9zjMH0lNkpOY71yZMT0QkRXFXmB8HnEB4YqHF6d5bd8VVafhMb7v6gpx8Rz6X0TuPquZfVgSJTvr66ToMNsAu_UoAB201fgPLSr_fByrkKO6JKkaJRCLXSDJgQrQLYm4ckzA5mXPL_l3J969oHONsJS1qL0tnX0cRroomSaTRiI4nbHuSi9beo5Nv1W-qehMw1dberXwVVzkChAK7O32mvCWiim9N5evUfg01qw&__tn__=-R"
    },
    {
        "totalReactions": 27,
        "reactions": {
            "Like": 21,
            "Love": 4,
            "Wow": 2
        },
        "shares": 2,
        "timestamp": "13 May at 21:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021432077936583?__xts__%5B0%5D=68.ARBpwMakxx_zrbgDh4Yx7tsJKQMAOuOSqH7VLCvTIS_Blob3LnOZ5UdwRYRv2udFsZXAYWmjypvuz6A-LtaD856ID90dzHek5sCSYaKVAwlNazzamYl69dUXtCXblfmc1CaQHcpHuvbUy7qUBqaN0CFomUiuEabF93GrAuFf4h7MUmECC6IhHnPQ5ywSoY8J--6NKP3sZ-TF0IfwR01uyFzIGXeHvmkIy57FKQEWO_VVejKrYsXwS5xnQZhije9ABIuOPHjnAhhV4Hdkevhk5ShRUaVGAcrlpn3li1IxEgZx3OyaSwNZyRl7Z8inBQYtfE6NCCtzmYLZkgqDljo5-CGqRg&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 10
        },
        "shares": 2,
        "timestamp": "13 May at 20:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021388657940925?__xts__%5B0%5D=68.ARBIW_7ZH2Gt8TO1218MKo5QdRMod4gEKnGuXBHCjBuXVRpqg929wySIvDqHhnV-E-WnDklJxFGevKupA1Xvv7CEz_EZpns72-H7rzU2GzKpHatqSWzkFjiWb3hG4ahyjfH9pgursvtTnYJMFxtD4o-3wgOs4jRSJgY0OpuVtiNHr6ctiLyvjk7urZHVAKtVvMlAaoqE3AFF4JGEeKOUIcP4T_6PZCcNOFM53WgTCLqOCYTuVvkLyne43hNMgRKBvsCoKM6c9R9sAXND6O_lQwYDPw8yQ3tur5fxE2zb8PbAnThYKh3-RCavGws40yLu993id5sGTBfKrkXh9YjnYwLSdg&__tn__=-R"
    },
    {
        "totalReactions": 23,
        "reactions": {
            "Like": 16,
            "Wow": 5,
            "Love": 1,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "13 May at 20:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021470504599407?__xts__%5B0%5D=68.ARA799vG_eW_u50tEpgY31UeGXF8AD_jAJvpqSFasesSaICa5NHvMAlNQPux_jLK7i8FuNhVuM0iq_mdQHHzGLkOBKu1E6lXjkw9fDxSrimveppREb-RsrUGQiN6XUgQWIPnmdKxTje9CwYSng6rKlFexgwOtJkh_QawD-xGXb0-O887E0gabxv3Kg6v5Vlz5WA8QdtsZzL9-mGFCs5idto9o5PiES7HBR8hXAuDuyAOkebtpBGdpnmI1Wdm1opGOSIsFbkXxINkff6V8UK7PX37WjrogbVU5SeRy6348DWwZL31M-gVnjz7hSbyb7BXwMwqcjxRx1Q_Tk9sYwtok_4t_w&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 9
        },
        "shares": 0,
        "timestamp": "13 May at 19:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021467747933016?__xts__%5B0%5D=68.ARDjB1uTWCOaUutXv6zW8ChGu2OYX42ENoZxw66xxYrV8olPniko57l7k0oDvZSr8QzZeIhNbng3A_v6jSStEq1MLEreph-CYYlWYq_urWiOrZmOrNWLk50w_WWw8HqxETeRKQuzfXIR1wbb1x8QnFyU_-gfDWXsI7v2npUFSui0vE1uy8Yy9CWmWeq9Zedwwt8hePzzDOeb-CEJzOm4vNEvkDPyhgWC_mAfiUs5CBYsLN_b4ZoP5MYgPpdNroZ1QBIQe25Rk_2a-h-cbwrNzyRXwGDH7j4obuzduDRNOMf_Eqhuv5k0pDvaHl98xDKNBeLKwp_XJYHt27oGyGzXusOgCw&__tn__=-R"
    },
    {
        "totalReactions": 16,
        "reactions": {
            "Like": 13,
            "Love": 3
        },
        "shares": 4,
        "timestamp": "13 May at 19:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021409527938838?__xts__%5B0%5D=68.ARDNOcVqx0eFzm7ZH_GrnzAHXPw1ggoLVqFFX5whovow1shZmg4wmJG37PgHVhxZsnEI03Jx6V6YqCKs5sf1UhIQv7_YulvV4m_SP4CFo7rziZJnk6_2KstpJj2MLWIV_np7FfAzUhy66k4iZo_tGwSGW5_NuRUwxBbDJjtKYF4ZeTCazUbzgdJ0uVMuiuiR7fmBy8yCh2tTC-DJ_WV3LYCpdrLUCiJIXUjLa_4LIXK77HFgM9zyoxcFUFHBzFLlIehb6suub1F4p3E3Ez4bxdDQgjsp316w_RIwFrfCsStBaO261aTEchYmpjR2haOy_2W5g95Qu44cK_0j1xRVkWqTSw&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 9,
            "Love": 2,
            "Haha": 1,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "13 May at 19:03",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021361607943630?__xts__%5B0%5D=68.ARBhOEBJsmIJJXCuibCOwoVGDV7Qas95_mS70DNs-jo9zq4DTiBjcYRcvtVrhY6Lrg85_zaPBxVPgS1N1UfJxhWekT1AbosMURJt2Md2l5v8OqsBSvAgkc43yy0hAo5mjDwzLAtxghv1zubjZAxl_LPPr6atYfIr3YVE04pLLrezjY3LhM0ERUVeRHeaVsI_pCeD_xNWNgkujlF36ykJDwJ_MLK0pnW660Njo05lyvgeE7U7yvZ8Y4zAeSDpcEvakEjDwg_N_4um4VGajLdMCu7YRAqLrzwclRnyreO9KHQU_43fArToQbkSz8tVw_j-1_LH8XaGrTI5N13JtiHAq_bSMw&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 6
        },
        "shares": 0,
        "timestamp": "13 May at 17:04",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021128994633558?__xts__%5B0%5D=68.ARBdkMKCnNSS3dXOoccMcsqBNqoxL6E0dZTSyQeCfG-tYwns6KkjppOR5RlbC0Dtt380En1CZK_tK5QxsWQ9X_ckV_wuvsq8ay_Kzm9fqj0iqVHsC_KdstohPxQHKucyD61_t0eOltcMRxXevHIZDhs8GJO6MTAGvSZxvhd5-krdHPyKuOkXh-JOXvqL27A9DZ7GZBhBvJxAWqYE3_LRHA1Hj8Q5tOB3rV12jLdTzBqbTX_0worRVOhtiWc2hU2VKMyJANxp6oGIF69FtNG2EDY6ca_n_DL3BKOeU0wLvFUdvWvcXtqxwukZSI6r9szwcgJED50eLEtpX-6jZ7h5ZXYLgg&__tn__=-R"
    },
    {
        "totalReactions": 219,
        "reactions": {
            "Like": 173,
            "Sad": 25,
            "Haha": 16,
            "Love": 3,
            "Wow": 2
        },
        "shares": 5,
        "timestamp": "13 May at 16:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021042311308893?__xts__%5B0%5D=68.ARD4-vOceW97-lcNzrEecfIpLSgTJ8vtGqYJ4FwKydEdfBWgE3Tnv6DCrICPdmNplSGkYI6E64vhRLMxvmN0JKMRUpH3NKaqN0VE8CS3rDdhABVsOUcbLbHKzZ2O9EBtNgupdGs_1rjL4UGRHLSSwbsHd4rCoBdYzT8g6Jx-PbDimGNA-nCDqTIiBDySsCIJjY9LQUzEmuZSMeWdXTT8Ig899Z7Sr-C3xGPY1svrgrXD6xDEc-S8q_ICuEl9fagOYzoEQmJAZ4HBpZMpzg9deixmkCWVCUja7u3_I46xC0p-z3n-b7CWz6pRo9uQ47ms-QxR1JLsBDFj9FNHCzQpUKsakg&__tn__=-R"
    },
    {
        "totalReactions": 24,
        "reactions": {
            "Like": 18,
            "Love": 6
        },
        "shares": 0,
        "timestamp": "13 May at 15:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021004554646002?__xts__%5B0%5D=68.ARBcEVsDVCs99BsFzMWBHz4YXTlJSYqs4cLMDJEjVQkIF3uoQqyjYwJeQr_4ZEI_CXywwWDRtZFE0lAwaqF_hwLstfe00ofQyk7rhJprkBp9Vz0MBk4KuxnSpYJJtTIago0pwBITd-b0ORoYzCGXa3bab8tXL5Xac0Ac4fBOqUAjgGSVGKh-GFAcGDfTAxUBqhjXe8BquMY4Njz34cYkHNvuYfi2j9Fc_PvAjNPZVPDvJDYZhK8y2qU5GbG90wrNZ9n3scklMtYuORGji_g2h1XnBm2na4Iks5KDBdo1GbrAiJd1R34eq5U2jXXw73BrlBqR5HlKIk2mridW5gYZtYJsrA&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "13 May at 15:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020960341317090?__xts__%5B0%5D=68.ARBYw6HGJlWIe4DXCKv96qQ6QtRbLKC5fsuVG1HA1wvAxj9eKMSQfCHbg5t6LDaoO8hzLaZGQ87J_1JN6-yl4wrtOa_C1iiiPz3jQdzmF-Xy6ALf7bp_z_QzqW9Ym8_kCdKPiV9KcOftJIs8OROgJPLNAx-nWotLAEsEDMSPu46Uh3cTI0ungRnNYdq0GbrB-m9RB3mqsOkqIVd4Al6q28ABdo3NxXiRS7fd2JoxKQwGKOq3FL6pM2FZxbluJySPZkyjQijOg2kFpE7dUpv029MxbpEWkGLtRfnY8S2vFNuu-Zt3vBAlchfJLEh5441A_KT_GKLmA7takC8EUxeAe6ur2A&__tn__=-R"
    },
    {
        "totalReactions": 27,
        "reactions": {
            "Like": 23,
            "Haha": 2,
            "Love": 1,
            "Wow": 1
        },
        "shares": 2,
        "timestamp": "13 May at 14:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020910561322068?__xts__%5B0%5D=68.ARA1UIQZqYUiQx8BiWMtBExvnfa-e1nhKWxKCGMywjfVtsSCdvPsiJaWSmj_w_Y-3O2ibcbnjciEVv-9Aj3jHctmwyAUjg2-9SuoWDfKcLFlavQA7tsyHnhLxMXjqYQEF3M_LhQ3-3sg5YB6mx1PByUdSniY12-dcf87EQB-zi_rFo1_e5ZJDK3K7yrnnuqNRmAgm3zrsLQLxh859PQggE5Tuv56HyNcXjtxRbyrqfny5LIBSZMWwJjrBJK6oeyhorMBD6mWdYJ9OhbrQ0nxH8siTxTZhcRgp9tMDjXXb9BQE9Xc_v61hG8hNjh6JXKowzm6eDpZCuPv9XJ8OSPNCw_L6A&__tn__=-R"
    },
    {
        "totalReactions": 27,
        "reactions": {
            "Like": 23,
            "Haha": 2,
            "Love": 1,
            "Wow": 1
        },
        "shares": 2,
        "timestamp": "13 May at 14:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020861854660272?__xts__%5B0%5D=68.ARBGKBzgdCV247peCdDX8aHtkjYvoHxozhiUgWxjkfRpEICv7LWMYvLF2yG4nWea9QI1JnrFhxH7CFxu5IrBUU0MwANLJiYHtgQQXh04Cr81tO-fDoBDckguYVABjsFhEDP6uPIUEYK4-VGohlx0cq7J734lmU5LJm9fsz_k3AxQF7Hz0BdT-WEmbJmGD8j_F7LIFKjCFwoV1o5wvWjyo9OIxXe86Lu53M0hj5d3nl6WrsWDIfoA4A2g8dbkM5kqQDbKhCpBqcQb_jokdunHqoyilyOkJkHelzmUgNOCvFRy5wQLST06bEe-fUUiOBOvat_0LPYxpchIf87pp2pg7F1yqg&__tn__=-R"
    },
    {
        "totalReactions": 33,
        "reactions": {
            "Like": 23,
            "Love": 9,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "13 May at 13:55",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3020817507998040/?type=3&__xts__%5B0%5D=68.ARBEUNMyTdTpWok88E3CeK79z994WEanCRUrah57eWaivyKjQeJoJ1eISEFfq_yoUq-D4nYPoPUvhrGrbAJFyeWnnPRFbDXUmIgfG7ixy-uI9smj0ijSxZNkkjUzqnMvnKNpezJIl4_5-HerXbQ2I1N0F8ea_DW5ZGBcTaZpcTF84zlpipUoYDxHxZGc3tn3R-pAy9M347LeIt4pGMBhB_wHDXkuQPJx0JuKifmgYikxw7_QzxGWDC-36UuhqivdpkzgiWvujO50GmitwM69gd1jcF52E9K1ZJ-2zFf6lznXgs7ROtgWmoEpFGaQduVGie3Q2Bp2r_xuA-pfHhjCQ_FD6A&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 13
        },
        "shares": 5,
        "timestamp": "13 May at 13:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020814604664997?__xts__%5B0%5D=68.ARBkjoSWpPWSbL8Kr_I7sgThIAm6mz2RKm5gtVTU6zstOH2JFRsRLMYhOpp1o2nsLbkArv5dhikwOv-K05h9_xqdIU1uvRmmJqn_fq1OZooUsolU7yV4Pg_ywk1nVwaAC_P9eYlQLk8r5ZceU6EpLAEBJKisdV0IsehtT2TNVgHTiiMdMtsMox7_Y-okQ6P1lkZtnfKaHd5kYRsSEoVnJu5j_S6nXip5b-T5tDymFLLeWEDcirPzwp9XhSkXb6Zm1-B-5JGdRbYWcGL1u1Uv1QfjG8K7VvrPHWYQ_bQssVJLyNbqqzyyvV1OiQayJIux0h4yi8WcW1JdfnCYtvCrkqencw&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 8,
            "Love": 1
        },
        "shares": 4,
        "timestamp": "13 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020684494678008?__xts__%5B0%5D=68.ARAConep6PrbE014pf09LUxPsKwhIsqvC6V2aaXrWIRIK4p_3w32w7xBiKq1axKsteObfmJ2pvbKEpGdOxvtT069vcClMwwxA1Zz1JlRaiokX3ZeCVdtAcH_QG-PknRTW0pezHPCXdo85GiEq295CvxFDBjYIHSZyoo0pAVlJNLg1BEbQrcU2obCO3FniAnJyaayrflO2nypYVmECTtClkNe1htlrkC-O96YbJ6slN5jRLUq1UKmYQFKnzOjEwGE2bEvvXsVdvz0ZyU_5x_dmFE2cP7AojU6QaOwEa3R90YB4dJFUc0ufzWDxiNPCLbeThLpvvhSHc2c7MAUDzO7-Jrepw&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Angry": 3,
            "Like": 2
        },
        "shares": 0,
        "timestamp": "13 May at 12:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020691654677292?__xts__%5B0%5D=68.ARCjCROyNwNLrmI7-YCDGDc0IYmrZlZVmRdgzp0234A-iCayPyxTG15NgIL3RTYjmBt59TidUpr6w9BP4izh_s5trhu2gkFNGHujthzsuva4aUrXwp2uwxl6QbcSww4s_Y7qNx99P9SD3ipeSioyTU72Z4I9XvblP8MNzfP5OxzhQ0xgp_WlDpBX9Bo-wTTr6OZX_nO5rohCc2LPqFEicPsX_B_8xAaXRWavsH9PMXnyHM0Yx6_9EBIV2r15_Soeg_sXvyb7FvD2L0udLyBJPByFlhxMHAMyC7dJTsi8QPgdFjIZruHmsyhLFoVIpyF3NL7IembaaXvyxmFKcO6cdDaQtA&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 2,
        "timestamp": "13 May at 12:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020651681347956?__xts__%5B0%5D=68.ARAA45qcVukHz0UrZY9RFc-B-WC6Qef-4W_Psi8PRV0NKHeKMGxG1uvw22R9g_pjCjgiuZTnhyixM6B3MTxXQQci4PVDCXEQ5mS1QTRlnECWFwUL6hlm9aIYAv4QzLmOAPVbJcrs3wXNTpK6jPTcRKicJ600xnUaeTsrj-9akNNITEiC7fHhmQ-fzaXDeb_fvSPiBzSPD1MbzzbXvWTUiHco1Jp6HSt3QEnIqI6Yn5uQYqdjFidLS9DA0geXuf0x_rkEg_PFYYEidb6QEHSp5OfrbYYuEdPkcjSwWosLM1kH3IFtPJ9ab8iJlxD6AGxZx9myGROqOVceX6MFdm0oJN2X8Q&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 3,
        "timestamp": "13 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020600881353036?__xts__%5B0%5D=68.ARCdahnfmOc_IUUg0K7u0OFbxOXKO7NkXJinAy4A4TEdxqkB9pLDeKwkKc3z4rMhk-3W18cqVAUbs2HGBAVWusnldA6YPr0uQEvu3pjxhrMdmufrEIXF9EFU7-Z6jNJIETF9bKj1_v01xqA8L5PLm3ddpS9n2EyfJ5f_2b9id9Nsvclwycjg6wqB8cseM8l_1mQ_k7OJ5DBAjazAIK-4MOdB0ZEOVBhK8aNiR4IJv-wWf2KGOaZ5QAuJrZGSba3RXOpApOjRd5Ln8bkeEMgNNetRveyMbX7U9lhbH8tjndLB2p0LEzSQ82kwzpbZ4CT7oFImGDfE-P1_dyz-r83js0f7dg&__tn__=-R"
    },
    {
        "totalReactions": 187,
        "reactions": {
            "Like": 104,
            "Wow": 33,
            "Love": 32,
            "Haha": 15,
            "Care": 3
        },
        "shares": 8,
        "timestamp": "13 May at 11:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020562628023528?__xts__%5B0%5D=68.ARCWGTGe4JIvgdS4_ws_QUyperys_UVch5tSYZvnLQc3Akz5-erM_8JPFmEmEJDou0izmzJ_9Td3RURLG92BuAhefU7yTBxIWK6z41tteBDp77bGxLYVMsGbsbcder_0k4MBzGhNA1YU50QOSsiGB5XZ6i2nOhzxbEMXOSNV6reF2MLw5cn2yZ2vykCu0j_Km-Dos99XjKlaI0X2tUusBOjiPehe1nArhsH_T1f7d4_HBOZHUuAusim-xVBGO3J-NoiAZQxIO9kyb-ZzgO8BGvnliT8mRd8VsCpULMrK7DecxbF4OrEtNFeNwVtwiqJRHbHuTiOwh_k6Y23tDaGmYrkBWw&__tn__=-R"
    },
    {
        "totalReactions": 187,
        "reactions": {
            "Like": 104,
            "Wow": 33,
            "Love": 32,
            "Haha": 15,
            "Care": 3
        },
        "shares": 8,
        "timestamp": "13 May at 11:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020535038026287?__xts__%5B0%5D=68.ARCDntsKW16GfIBolailAgLuPF55VubiuSJ8gb1bWlUw7uSFhKcTQhPrYNyQNJqvwEKkFYh4CZUWFb5vsDdoFu5axiA_JEgmvepVn9RuNqelaYsQOhad1vUMNHJDlzUXFw-nsT8OFPNtbR2hcGDUGudJFF3pN0BMHFXUSE65WrKK7r5HEYUkj3RC7TXvN8DUXoaBWCTAdQ4m1ynDQgCu0_v6Xm0cLsZYvTFKlH_ap-nPoHyde6_pIeNKU8gsIp5ByPdRaogmTFP4nTgGeJxVMDDZIriwEVw2J-clPVkWhTzPQBGxAi3YmUjowFZP4kaq8JjE6BVZH-JHWdwGYQYYMlIAhw&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Haha": 14,
            "Wow": 3,
            "Love": 2,
            "Like": 1
        },
        "shares": 2,
        "timestamp": "13 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3019678014778656?__xts__%5B0%5D=68.ARAtQxTx1Zk4WVysEEQ4WGWfcPxwTY4RPMR2mEAcqLJNjtPXd6Cwx6ARiy3L8RkG9_slof3VIB8VpXYjbQOVv0rMK7dTSH1EK4gWjByOEzZGxsdbkB9WCvyR_Bqyo5w5BX7Id7dmspdOnCJYmAPhn-vhEtu72xZQMdR14LMh8VxcPrCti3qJBwRbId2PpTr2Y5L7yvUzlRdjBi5BL8JeGvlNr9cJIuq-MC6s2qGkFqIPxFGl_tBwAW4dWPc21YemoTMpvg8SJH9SnyCLRkiEXyO0i4PB0yVhnumSVAzP23qJX3otV2WGaULfXLmcuO2lCOq6ccInU4TztR1_WF2_XgetSg&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 9,
            "Love": 1
        },
        "shares": 6,
        "timestamp": "13 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3019672711445853?__xts__%5B0%5D=68.ARD40-mR2AiN-_XXnvOEbgiGJNqQuyzK3eW_wn69qnmDFiTL0PCWSkBTboj_iIEfsS6PmoYZ4RywejcuaffOIDHTyTW9_gKpBm9ShdF-kdCv7zmrIzWvb4zvYEk_Ooesjshuxx5sldEmCkoD_nIeTKQPjHx_JQGCaSlkuXojF6gu7_03baMk6-PvLxGXsfJhDrABQPCCFoy36YVkp1IIBOVZV1R18jpg-3b66MIm7Z2IPA3bffaTXjldS0k9QIdV8xzYBw3lElA17jodI5HtTfD-tWwR3sZeMQl6aSCVRktzYxiEjb5IZj1B-W1zyTKI5-jPHXvQwZExB21mQGVFxlPg7w&__tn__=-R"
    },
    {
        "totalReactions": 28,
        "reactions": {
            "Like": 23,
            "Love": 4,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "13 May at 08:59",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3020362311376893/?type=3&__xts__%5B0%5D=68.ARDtZ4OnRGjx54j0kWtDC_icKHDavxfo9lTLj7pfFG60zvonrYmejl8Pf_zYQsbA8nTOh2j52VNR1ODILiAMJSxwx--H7pPj7X66809thImwdVaYVY_2V-b62W-4T_vsLMaTrFXUth0mDpVBc5N7M749D8n1nmhNxeNc-8f9BjpKua0JqQdtMLeM4N8DOc8UxjjTx029k7kGQ_h-xr2HFlApfP5Td3iWLe5STYQ3Ym81spEROWo8SJX78TwZRuuwmToDOOAna4Vce1lS78dKwMO71j_Tjqckty1QnVNBEoybiMQ1IZS27p5IMvyaubrdZOgFTkBcQJf76uMZ3XJByklVUg&__tn__=-R"
    },
    {
        "totalReactions": 2,
        "reactions": {
            "Like": 2
        },
        "shares": 0,
        "timestamp": "12 May at 18:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018799064866551?__xts__%5B0%5D=68.ARDx3Utgn289k66EsUKHBOgCTuLdt1D-2F86Z9UyWAMUdta-MwqfAe3g7mQLCeLGNaHw9WZd7Sk7JwSUigheDTdS0QDGPvg0wLJLmxyh1TEEd4IjNm4kEm5EM44_BbF_K7hWd5tJXPj8OAuHTsgI3sC4XNP94M1mO84VWYDajJC6G09ckkm3fn4fGNFSL6VeySyigKWCoS7WIJwcGtTsPyXlSOXXEkG5XffDHsjlNhOXjdWNs1MALS19ztJvERmdbPYtyza6_0MymgFKWxlQb_yugt1JML7isnKKYVjF5KYWY_frHzGrUW-ap39zRvHF9x22Wr4lVL3NsAbZGLT0JGRgAQ&__tn__=-R"
    },
    {
        "totalReactions": 2,
        "reactions": {
            "Like": 2
        },
        "shares": 29,
        "timestamp": "12 May at 17:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018709828208808?__xts__%5B0%5D=68.ARClsziNWAmhHAWItqX-1zBtgfyOHUW0xbQ5Ix4EcVZjTB06fANosxf7rakH2HldLs6wG1KzrbPnaZto4g9rzv-BWOmy30ualeDcz_PltU9xnqBqy3-mzIyqimESxDQqgc1LoziEaMwRUE8ElzGpTkZ7hvFY2fNKiRbSet5gazcZCjgvvVEiurA5OJQ_SmRErsMiGWl3wfT5yqClzBbxsgnlyvVnpGQDCtYckMXn3lJyvmV1Hm6jBREGWaNnxizzzhNS_ZCsibqtRhN9ahrVNhywK3cR2FsDtSGZuwWdBPjlIN8N-_nVvHiRxA_wACAXBK2q9M8m_O8UKL5cjMiYXu4nCg&__tn__=-R"
    },
    {
        "totalReactions": 50,
        "reactions": {
            "Like": 46,
            "Angry": 3,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "12 May at 16:06",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018557994890658?__xts__%5B0%5D=68.ARADs-IL6nVXjMcYDj2SvAmZWBa9oTgujqpDh-6-GNnLYopqiiszvvOoKVTZaniX3AoeQMOeB3OSe4XxNG_QaA5jBPNFG2dYoLuv3Zc4r5GzxQDfK22q_IBEbVtbH6P7y4KS45fNnuihyjtEUK_W96GTr4gmBDH3aOHT7oua4F7jhe_gO-mOZ3SKe2aEs_2II_sRqcboDzivojnsu_rAMmWDUSJQXKvwvXelyFQbVbY7FOMCDL4_hu8Z3i45C7gcPMkgHnCfAI3qua7ryIMcufDYnG54FMhojQNkFIPoi-z3DQ0kAXPVHVbHBtX5pqJUQiANtO1nOKCbse-P_mN8aQUh0A&__tn__=-R"
    },
    {
        "totalReactions": 19,
        "reactions": {
            "Like": 17,
            "Love": 1,
            "Haha": 1
        },
        "shares": 2,
        "timestamp": "12 May at 15:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018474388232352?__xts__%5B0%5D=68.ARAjNPk46yHcdox8GTiMPybRwmBKRQjJvQbmppLI-9tgLbh4B85rAlUHr5xKoLW_vHZdTvTGG75W_88mQP_bFa1Hs1FI9v-vnxBtVti9JJBJbROJAJq_9RARaP2pv_8ntr74T_JbmpJidY58Pda55ZTJlyp_okkeCrBYUi17SfccagO8szUjdrBIa3ko3JJPKUuIAM6P3qDmEQhYCjI68swjBVU-Y2gE_n3-IAcVXJ2f1EYI9I5oI76ZR7e2WOMuUnWcvAKX9fOOLqFxXfRBcf14_qb4NyxOqzqJQHT8tTb2XEvo-zzHEUp-QedDKkrwHAGmjJqi28V8GCiQJt0wxcblRQ&__tn__=-R"
    },
    {
        "totalReactions": 7,
        "reactions": {
            "Like": 7
        },
        "shares": 2,
        "timestamp": "12 May at 14:42",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018426284903829?__xts__%5B0%5D=68.ARDsIe3nAvOHoS9frjTeOZZSEINvfxCRimnyxE72x1OKJkNL1UfoPjR_FRvNRdJ_bUnhKaMMCqjkWagTPOitQglYDDPwRA5kDNr7An0eKeR-ird4d6dahmoeI5Jm2YAswMZsCnoX_iaqOG2v_bpwmMOCG8OrNizAfkd3EUq1sik57zKyczZtRsyyEcHMOl1JDxemPWltQ_1G21ttl_kJsji4vzp_lWrak3cVMMSej_NsJ873Q4zNr4JsUealyhopJt5OooGmM9IQU1cCQOp6gmj-SQry--VPep_iL2gfWxu26SReKGb8aEZPq0U9HsRIwSNneC9TbB8d8ph4NqwKz5avLA&__tn__=-R"
    },
    {
        "totalReactions": 25,
        "reactions": {
            "Like": 20,
            "Love": 2,
            "Haha": 2,
            "Wow": 1
        },
        "shares": 4,
        "timestamp": "12 May at 14:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018373124909145?__xts__%5B0%5D=68.ARC7nV6JZxoTJgPn73oxPLS0yWBDCaLHGWmf0YwrO0uDfKDQV87Dnpa4XOSzc3v2C9gCEBCjA-5iQ9O4-vlrpUIZHW5dTIghvTlehRZflrJfMlmd8rmubjGdVYI-2vlpjfHaq1HnMXFeVAMFhCZj5HFeRDyukNgANg3yEttHnuAnN25bLTWG4ipspCNJrluzOy6RP-Hu3lRzdQ19WgWlSSO1SrkSw7CRQXL7JUD8CVVBiEezjF13TQ6KFu0iHf2cQ6bQhnVLsQa1evVTZ5xHPrRe97nqYh3Uk6tf0Mruehd9vPFgkxZC4LAIMoqwjm8GGJMoirLzte-thqgTuN2betY0GA&__tn__=-R"
    },
    {
        "totalReactions": 25,
        "reactions": {
            "Like": 20,
            "Love": 2,
            "Haha": 2,
            "Wow": 1
        },
        "shares": 27,
        "timestamp": "12 May at 13:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018328174913640?__xts__%5B0%5D=68.ARBjFKkP-RwdyZjhT_rQRUKsVoyxErka09TaOHa-YUpwMUSByEZoWtyd4hgKaVwBePe0iAJqHHisOLE1Tqhl_vAM6DqW6cjpmF5Dxm65_UmfiguZrZPgo_ISK2TPtcCfw1INXI0uNRyndE5EH9pFVKOgDffF1KICeoFJzTW_Vzrd6rdgRZUvshj7BX7QQh1IegpNWV4CXt8U1nh60iNRCsjxncTK1Oh4jCrhKsDCTFsUSgAS6Ui5beFblhxyjn6eHTSU8z2fz3aHV_DwR0PPIdjspPihAH9IcMwmP0snSeoX2A3jY4r6dfCRnFtcV86BxekkGZIKLzqpPqVfKBe_aUSnnQ&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 12
        },
        "shares": 8,
        "timestamp": "12 May at 11:31",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018141124932345?__xts__%5B0%5D=68.ARDBOj1k6eNLg-rH-UlL5xT6yAqhQEIRRt3nmPT2gtXgkUq0B-Po5JNuUjpZKbj-VaXFGFp16zpcNsZJJ-GVu3cNmW-9IqMoOihq1PPnSS7hjYrEImLoFbhL0qs-hLsQzij1GmOIAhYT2CEXo1KIlVLmkES79t8XY8JNSxK3v1534udLnaU4LiJJHog3cuwKXN6AfeKxvcHWC2fnYke3WZ8RNBkUz2j3r0fRLdvngKswteR0PaOCMnfBt6v8NAOEoKoc6MXxns6stvdMjmWcU9XYP2qBWRei7IvbJil8ZvPmTE7F3NLQ4pv2noOEpBJdrF9Df7w9ShQZCecrwV9LY01xyA&__tn__=-R"
    },
    {
        "totalReactions": 280,
        "reactions": {
            "Like": 162,
            "Haha": 79,
            "Love": 29,
            "Wow": 7,
            "Care": 2,
            "Sad": 1
        },
        "shares": 36,
        "timestamp": "12 May at 10:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3017167278363063?__xts__%5B0%5D=68.ARDNn_BGxbMKuBfMOWVjEwNwGA_Qm_8USklihKRR9Dzk8Cm055937ChDfosQGV_4slS9cu_SPubeDi6k_aPtDjLyVOuscjDfRbi8ydu5COIUlOv-cV-ZYhpHwBPslupjrGzQ-R4-EXYOoIK-mMUZpb_XjodkeLpbJuwZBZrHPyeW-Ze9t9qgXzjK1ZZpOfiDPEmBELkQS1pNlrFhxLlscsq6cKVkLP_SN6gu3XSrp-u7K1-J41DZ92mN8_KartNQSY3qSr4h1M4dDVz6Bd71tW8Mg1HU5CnQGJpT0jf_jChs7VHNtv7GeEjMAsMfN2HjT8Xgd3tHokDvongq2Z-7Z-I8lw&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 2,
        "timestamp": "12 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3017160041697120?__xts__%5B0%5D=68.ARD47WYFcD2tD4pkSnNW9NCzdlQ6NmaSoJF7_--Kt7qSwniHqfeWkqDQx4cBWbKfYKjqa6kvfs26FW-MDi5VJ7-l0-K5VARh7Ozf5nF8TZ25o0HKM6Q8jJ5evDWYOCus-7P-GzRyuD9ktd8ugqg4wRt6GN_UFA1qndCyUVUHIOIDpnI591ys5ziEsts9OeuK2OKcyAAlE-NY-1-T7fJIS__bAKpmggqv3XvyQMJ_nhAYLvNbOwacWM6EgE6HRRRr4YxUKPT4rh_cFYxmQaTQ1c0y5YVSZWILXsJ1HD_DtxC1dzvM027sCGl8-HzJLzpAi37JYZy-Nx_H5r7zz1noswvnFQ&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 9
        },
        "shares": 0,
        "timestamp": "11 May at 17:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016414505105007?__xts__%5B0%5D=68.ARDgG3Z7TRd5q84lTeGXigo_h12eoLrZFNIMBYk75hlAjm9PjgpJ9RtVWVOBUNU7GvH3OLuLMLNK-SIMjaMzQjOFQUiyCtY4_Y8R5U09j1zCj19FGmddwa-_4RkOMXV0fdZGa_AwxKBWGyNgHtZ15ZPtJz0IRtSNwisR-GW7HzwOzykPIjZNHqVPgfmIqRJcPT7OKI6elC7etO5FG_xXRLDyDKwBsvDrnclrTD-RgSEDt5D8zwnZ58jUZeGhrXtnXZL_5klmurNErZWX0Ae6R9X8q2VPLgc_WpBYUCgNopQbcU57X1JTnXRSLtdW1a6RC1rdBazxH_2l-axjaPE9JH3DJw&__tn__=-R"
    },
    {
        "totalReactions": 66,
        "reactions": {
            "Like": 52,
            "Love": 12,
            "Wow": 2
        },
        "shares": 4,
        "timestamp": "11 May at 17:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016323788447412?__xts__%5B0%5D=68.ARAiTnX1etEoxatWvtO9e7HX_tQjYb5cfFSe8-3Qol5FAUw5temmAv_lpk2jb3aGh1F2_obfSFJpiVFYl1rKnWZPEAbIBO8PKfufIGtkg5TjPllxbuvLRZN0dWZBmz-BDGv7fJVZOrzxg5bzIZ_PtMHtwTHwT5_Yuu6VUsKjImHposgN4ByPFhAyBpuSJCY6Ey28eZplL0AcUwmqtL5YLsMpHvGL6rsPLVnF2vV7mgDEUtOzZjr7gcfU1CFArBTandp1KYOR7fCzZGT78rWKyVn8dkswvC3execfXTPb4hL2gUOQLyaMDBK35pEZDk-HVeczDYwsXJEbCASac64sVdB9JQ&__tn__=-R"
    },
    {
        "totalReactions": 66,
        "reactions": {
            "Like": 52,
            "Love": 12,
            "Wow": 2
        },
        "shares": 0,
        "timestamp": "11 May at 16:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016241775122280?__xts__%5B0%5D=68.ARCHSzKQXl9jiZOzHAciU-ER0_s-jLJHICVkseuLJ7KOs10lJR6OGm087LlVYHnpok0OL4_UX3lTX0AbWWOhAJ6J9fRciiy4gUWHv2r5O5KTJuJKKKj-nc0DnKGvBzS611WLRdizZ1MW0dMSa6-VlAZ-WyEA121tvuxmhynpKeLyxFD0So-0gEuB9xcv748yE5lNPmSTw3AirGu3uJzKA08jUJSi6lpV6ZmH1OlEEqdYm5VpIZkHYZJiZ7j1dvQ3e6gczoScJh2k6M1J_cjbyAi75lMevIS3VMs4ERlvERpfJoy2R-dGAifAm1K88Q_YFN0WHvrAW8a_G8ZHUsI72ZVgmQ&__tn__=-R"
    },
    {
        "totalReactions": 22,
        "reactions": {
            "Like": 21,
            "Love": 1
        },
        "shares": 21,
        "timestamp": "11 May at 15:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016147991798325?__xts__%5B0%5D=68.ARCLyek5h-CVBLAgDk_Z2OROwMPfH-0V11rpNXvrC0gpc6f2vRhV7ySvO2rXlfqtUzv5JHTjvFczlVfiG62mWc0t6wgLqnTjryM7C3LKqlG9k_vSv1PmKIK6rNIj5wUtwhkqWwXUKGfQf0bR6C_RFmNn8FC-g4tZ7ZVbfKmWRj00Ouwob0XRbtTaCi38AV-SUbbpKuQLQ0DSS1dJYMffZnjOBFel_Q3IJ06mSjXiGhKBDoVGx6pm7swyy1Lgwtb_az5nuWyiCdR08xM7eHp0YFtS7yPoB-z1v9jZvtjAcRqLScAyhkkT7H1syZ7asAzFb0bSxmjWDtKY7Oxw6cSRab9hUw&__tn__=-R"
    },
    {
        "totalReactions": 22,
        "reactions": {
            "Like": 21,
            "Love": 1
        },
        "shares": 6,
        "timestamp": "11 May at 14:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016085665137891?__xts__%5B0%5D=68.ARC6hm7W-_R8xCHVl4FCkZjCNke64kn_zQXtnuLLbxFcl6Y3gsMJ7z2OqKlVMXs9RkWhrvbfVH8TZfUvgaK4SgQjR8BnFpjRT3jx03twsZPCp2RbkBZOpb3Gg-HIIIZMpkzS4ss2aLCFIa3EdpDtkhrxMV0Xjw3XJuVsIIRYj9yUTr-ZaTuMRjN9PgxY1K1XjQ4AACnTo3pw16mU1arG9l-p34ErvKORftNVs9Z-I8lzF7M4cK9HBDOBCtDRTssUx9kvnWObMGFKXjNdoxvVL5ZE9ilB-AZINtHGtaWTAvUjYhjkha3PP_WiuCoukuLnc1WbUTsbqoHvPZl7Wq_5n1XaOw&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 0,
        "timestamp": "11 May at 14:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016045615141896?__xts__%5B0%5D=68.ARC2BlHc4rmt2qwm_N-oV3VvwPNQmLujs0NhvUdoh6yF0Atc9tiqiDe-z5pigp7XEJBFjjzBGvTLkh8lvaFnpcHEiEY2ihw4GsX-glfCEuhJ9uuhzkgIUMTzAdeCGf2nDmLA5jTBBs-0jK8fs3gsdPOUgSK3lJJPOwr6OxJ6xS3DwNzlOj8EOLtbt5YJrRJ72g41nnqwTA0q1nM13TmRw1QgC0tZumyVOZFc4L4LEvu6SkwNPyG40hqye6H5imJXqxygM8cuCggK4zW9l9A39jzTK6uJns_BkFonFQWzZLSj1jt-6HaEeWYKFxE8-LDDIjDBgAYJavqgJWG2fQNfFDwUfw&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 4,
        "timestamp": "11 May at 13:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015973371815787?__xts__%5B0%5D=68.ARBG8fd1_GoH9vAfiXvnSWhHebPaPIwXSFtcKBO7qt4141YBKB4z2oUeS2ha6D57Sd2tIjQDjmuzTrlgrzXOIVDl0NkcmkgHh0X7cPimgHlrYcvfR5R41O4GOhdS0LULG6mVWXWLZAdpyrGzOU5LndL4bojQ2iNE9uiVS3zRxadWI2UOnoXKMkA3YgYAtOvL5VGlHM9z9VWscNYoehQAHNZdeLUoWNnRf7cbZFOy3cCaxkEqAusG6lau6J3qbZnv-LCWGS5znG-TSsrgSFIUfJpv69DOOkEuKXBXdPu3JIsjO27b_c399a68vDnO7cZ3xLdWuBFMty1snZYE1eS3Thv_dw&__tn__=-R"
    },
    {
        "totalReactions": 52,
        "reactions": {
            "Like": 40,
            "Love": 12
        },
        "shares": 6,
        "timestamp": "11 May at 12:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015919928487798?__xts__%5B0%5D=68.ARCW73LKy9mzPg2WoEWvN8UImHVjwALl06-bHMOVYmEZuLD69x3viE4XXYaxlsrVbDSX6r_3tCuz5V9LwW0bAX-6pSplEaNZRjw5xNflGiOb4ilSAXM3o9fS7sRZiy-ifY7yIgOxaqniYjzr_bI7XuohyEuRL_E73xtxQLthUDgVpWvHqNrp6Zo4WnSU30_3Pr8djzNohzOXKg9jABE_JpVIlx1EJfxTY41Zn8Ehnvx4T4RbID0MfM5ohYKsFuR92o5A3Sa7XBzmWRJdz67c_SUDD3Epw9PCnyxr4puRPzrY1SjAh-OmqaM8lSRCC9w-hlX-hZIf_Z2vZ0dOZ0SwqGJ2cw&__tn__=-R"
    },
    {
        "totalReactions": 52,
        "reactions": {
            "Like": 40,
            "Love": 12
        },
        "shares": 15,
        "timestamp": "11 May at 12:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015851891827935?__xts__%5B0%5D=68.ARDGdxIUenPRow_no8ECSyAvVYziQ6l5yyLyZ-naz8HXwgm_ykvBLklT0ptEEbZWV1tVxiJPJo9M_revMreOHg8q4SA6TcSsYwhg9tdPVZESvujrEcN7rNJAdafZLzdf3ttF4LEBZvF7c3EQf1zao6coRVRoey6dDDVCGwUdWCf0BZryZpObOFrmZToLRtn8BboV2WqzZrgzyD9zMqwd1Rfld75Sn8eBjkq2EeLA-YM48ZTP_vYHUZVYq2BtuXAt32LqO-eNsvcnNp2X49mKtOYyDZh0Vsy5sPrQwvea20CFxUf2krpfn8UE4IeUIKg5_dVQjcD2rPKLayVlmdlRnknj8g&__tn__=-R"
    },
    {
        "totalReactions": 28,
        "reactions": {
            "Like": 20,
            "Haha": 6,
            "Love": 2
        },
        "shares": 8,
        "timestamp": "11 May at 11:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015793908500400?__xts__%5B0%5D=68.ARDyjmvgCpat9Zq3j06s0VXkjTjsxHkyPK9RDOG18N0m2eT8Dmxu83WUbAJSYFkFj8uNhfExriYONE4q9W_1zOPaVA0-TQicC_xrW-6GJ1Kr80btnLyuInyBbgkWTo23bAelXfH3u_2JY7mejIwIGk9uZfDYLeCe4fRafnK7dyFETOXQdeHbOdfGyxjy6RtzauP95WjIPyk65_DpJ5uEgdlS-X7dIedUiv_vhV7mRIqhEb-467uh-cOlEPqgGd_TQjvwO2wytmPwz25DYt5eLZuVgTphZ7PXGq2dVnxHPJwRSyyaLyRHFwHScxAlSSNnsgDeJoADVF6tnGKUb0on644xAQ&__tn__=-R"
    },
    {
        "totalReactions": 16,
        "reactions": {
            "Haha": 13,
            "Like": 3
        },
        "shares": 2,
        "timestamp": "11 May at 11:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015775868502204?__xts__%5B0%5D=68.ARCk_Jxsg0pi7k_y9vuyOF1aCukhyU_XqJ_jYEnwdGz-sbUDZ31qDtq9l64C9jT4I-wXRAv7BzYq4fGHl47lmchWmr6smk-MmeMMi8n7aO8ittHdZf0nb0eizeDOz0E2Ux4CAhRMNwlNnlS2oBSNpkna5lp-trZ1_rmQFzvCllWHGUwhZAn8-aN_2di-zHmwqjXVIZZRM4kNCq5hPwXKphkgXkOZ5KzRn3zWmjpt6w26GkwVY-eXOr-Bnsz-OsmeZOoiNrpEc56UW8XBX1MTkrMZzURP34WwBkI-aGrqlNhGo1zR_CeRWXdXn7nklkBT_5xPYzvAgi57K6PSvUVpIpoPdw&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 9
        },
        "shares": 0,
        "timestamp": "11 May at 11:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015745165171941?__xts__%5B0%5D=68.ARCFxsFe93Y_0EUQxgAC71fp3nEd67FAOxQFyVcJwPIXDOLYYOnmtOdaCdDOdo5npQahmBd_2B2buEjeShdUgPmJa2ZFHy8HJsSV04N2Zk2sSHTbWZv7VO-izTrOnIB--tBFBaIiCSzxEW3g001P9WF1OUkQF08T6luhrqF5vS92y2CvQkRdaZVZPnY6w4rJhgV1-LVKNrFoYC1WB-pd3vx2S3RD7XCbKgQIYA4VaCCkh3ZM04exGNJ8I5LYu0TVwmkXNOLUJ5u1VvCuftkWmZa1yOVS5AEILMZRI9y_KtoxPK4mIDWtwBRWJoA4ew9yM5pX2Y0iauK28CT-frvKG_5wZg&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "11 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014936601919464?__xts__%5B0%5D=68.ARDwPDOOVYomWsPYpbTXIrxOii5PtzzYApd2pV4m_TcyeweAMo7FelRljXU6ICtATOwxHKVztasoIybUhUepTI7o08a8Ut84Ls5WDJoaFNspzIUFgcBOxcY3wIHRygdCYr2ncREqaZt_7B14i_Uisda3yOT1Gp1cg0IkVFlPsuNoah6S0OKBNe86tyxZUNlulztkDHGgnTx9u6ttgbJTkAP8sV6LbouP3PodLeqO8UCdbWfS4itSMyVHVtRgqL2Tt48_X2HLiqXoxaPbwZCTDDT7BE9BH9xCAr04cNRb5iQU8u-4OE2bfp1_VTNUUz4hD9QBGfAJEvRrw5ws4g3DFuWP9g&__tn__=-R"
    },
    {
        "totalReactions": 182,
        "reactions": {
            "Like": 167,
            "Love": 13,
            "Care": 1,
            "Sad": 1
        },
        "shares": 65,
        "timestamp": "11 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014933205253137?__xts__%5B0%5D=68.ARB0FNOde0PYdg0mTbBBhQSwwP2URLD_1kkUiQjiD0es7STjFrOba8ReN7lp2uULtcRZRhWGFx_vyWB27nzBNbJ3NVitmabm-TIFLO8-yfFgCYP8GYhOBenBUWSbvkRUGKCvIrkHv18m42eTzjc3E9HTcUps9iXgetSAR1z-WANl9Fin4lBB-7Xyor01S3IjyLNXWD95oj51hlSY3OqaT_wf1r1pXZ11-YvVeVFJScdD6HL_omKDwr7a8zJMSR-o5eiSOV6SKxLA8i4ZqeyxhDf595FfBNIIDRaIyadYQDx6nP2Gw1SgfnWK_fcnI5lM3X4zBQAAMyx-fFFks61DmExsRQ&__tn__=-R"
    },
    {
        "totalReactions": 509,
        "reactions": {
            "Like": 453,
            "Love": 28,
            "Wow": 25,
            "Care": 2,
            "Haha": 1
        },
        "shares": 44,
        "timestamp": "11 May at 09:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015668335179624?__xts__%5B0%5D=68.ARCPfZcUX51DAHvFHdNO1ULL5kKGxByPTLM-fWPKLWWvUviA8f-JV3CQoDCiH8HFFXD7EjMIYVid8yIi3eTOmWQJw43rxdDSZHovUNrzVw3GcUU7-toi8dA8qPiT3JTcDe6BZt1fOayAu_ElW_43gzdBm6xyX76c7mv4HjkumFJx2MPft3o4F0ibmYfVuzKgROeBQx3BZR10P_v2drNhjVi8maPpGNTQhylDFIjJbVN3xezu5uDeB-Ed48eOitGFAqULYKvXuMIb3aiN-stlDEebgkA4HWnw3zVlmpVh_548CmO4bc9yrbMiF0Qa7yBORv759UMMdh_9Hdulf1rjdsQrNw&__tn__=-R"
    },
    {
        "totalReactions": 509,
        "reactions": {
            "Like": 453,
            "Love": 28,
            "Wow": 25,
            "Care": 2,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "10 May at 21:33",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3014277791985345/?type=3&__xts__%5B0%5D=68.ARA8iYPhvgIFZeGEooyGEPV6YK8eSqQDwnM6eHVkujJNvboje6amum9MgajFpwzzJn98rv5lhpMF48jn2JWt7UtBDzs3-68U28aFXIP1Kafh_-u3o0TBNGiqlMe-lnjJFfzjrKBfX2hqpmMTK_1BZ5HzWNO_WgcrY_maN8dCdrNKdEoxddF2_R-ufuF9ymZtcC9c0-5ANO92Fngt0k5J7h3hH6kwHhOkdIsnLROvoKGk5K-E8HyAKMDuATwd5ny55_yQEijseDbYFO5mTuiZIZt-fWx28EP9jBob7-ZsDhXRM9RzzKy-M6CclaLG4O3dk7w3RKTYqE4SMEquV_1Wx8UzZA&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "10 May at 20:56",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014424265304031?__xts__%5B0%5D=68.ARDIEVZrJbkOsKTzC3Tm59UpW3h9HIQuCI2lvBUbkgiItrRCLuzSymrkldVfdt8s4q_sxzn50YSCMjJeXIVrfXF1Y4Q7Il0LcnamWAA11m09aFx-XTDU27LsorlDoWXGQMxYb9IFxn7-z4L96NemjYnjFR0DORAm4xCd8BwJJJ3Eckgiw6TLbfhS9jvdMuCsMvez0yQR9-dQbwjopu9ncvMHsIF4briXw82fDwe7ogRYQlDLG_6Ey_zapvOahbOCh5gBRQOeuGpoVNwySpFd-fPtlYUxSdMvCCoOKOXJm2dbfrAQRk9ddngMvp2gN5v5Ce91Qir2XDTJxZsAKysf1ISZWmM1zNXOsQ&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 11,
            "Care": 2
        },
        "shares": 0,
        "timestamp": "10 May at 17:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013920538687737?__xts__%5B0%5D=68.ARB2KOzCT91cv34y2jwCEOApXSyl0-Zq5PBujepWIqtW-bjICWfO-0J9bmgnKS7eb7vYdflzQt1gzNu8w9I8NnG9OG4l76rQkes9uwtExez1hUjx23YOEt5qn1pIYSyFev2UTI0YlcLoUV_bk6WgZgzMKhbkqbOV_E2HwOMYlKvlDiSGE4OelRn2HZrvAfmJhuIkG1uuRAVEySq8zVHc6dWusJFnvAz43IH1UscX5JzUoh6v0XkVMUT63UTYKj7t1Z4N3YaV6g5G7H55wOnLkR1-7tQ0y2viBI0WNSeOBnVNQC9KP53qoxISw3vQuNTpvBEwXYD6ud0z2hYzn38RZ9MaqQ&__tn__=-R"
    },
    {
        "totalReactions": 159,
        "reactions": {
            "Haha": 85,
            "Like": 47,
            "Wow": 23,
            "Love": 3,
            "Sad": 1
        },
        "shares": 7,
        "timestamp": "10 May at 15:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013822538697537?__xts__%5B0%5D=68.ARBDFNPweXGLLZlFhWtTg5S5dZRkuLSz-aeWokZMwoYmRYW-Zjr9uF541ciyudcng4riZ9uJuoKMepPecSl7EA9vdwlqA2rzyFl85pyf0gWRYeZb6RD3gfhMHrFAhyyN7RZpOKKZw6nAniRvl1aJ88do6bgYy0zwZDp0_pXyOv-1QJFnrYM_QhU71ViRzsbvBqASUTx3WLsg2qqlH_x31gqJ3biQH5yUBxY1W0zLk6Wt7fY_lIX409Ej9CWP57s-B3l1aQVucSSkFV-Z3j7QZiupGc5n3M7F26FNMW-gOq0Qq0Ojx7FAF3hL6Raurogmu0-feO5J_udl7aOIlr0XkM4Wiw&__tn__=-R"
    },
    {
        "totalReactions": 87,
        "reactions": {
            "Like": 55,
            "Sad": 17,
            "Love": 10,
            "Care": 4,
            "Haha": 1
        },
        "shares": 10,
        "timestamp": "10 May at 14:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013687612044363?__xts__%5B0%5D=68.ARCIVrvgYptm06J7F8jW2VndAsdcrjiPD-yZySQzfsMOwsOFTHMwgB3mmbnO0L6NSywqL4WF7zFVf5b3uoqy5FRUbN6nTna61RF8_GKxR9Pd5u8jwRlWaon_Z9z9otA2iS42WmVw54jjAVVTwlQk5jb54QQhWg129mEax5PH0uevRyY-yn9KLoIYdh9iTlUmhEGF76dgTYw7zruEXPY5bXDXLdXZl1MYWgJtux0EjxoG4xyCa6d-uCOUCciGyTHLjWrSDQcTf9OMDHEozRSk5yK7fkU9tQB-aEQ4aE_eEsxUAn3wUnPCJTy-5zbhlT8n5fJ80bpavWswTri7Dd88vIz9Nw&__tn__=-R"
    },
    {
        "totalReactions": 15,
        "reactions": {
            "Like": 14,
            "Love": 1
        },
        "shares": 4,
        "timestamp": "10 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012419358837855?__xts__%5B0%5D=68.ARBuuBHB3xLZ49uVCiCiXV6lQ0rdZk4ShQBOJcLDEdsXiNsDOaMy9eY4EWog63xUoxHiIAZdwHV8JrWuuLtFQiSybm4XM1ue8gyY9zjjR4mzuGPSt3zHkqZHPUbGZT6llUXg4td_ZuE33xYVPtgazIfkJiHaJwHuy7FTCAcsn3jSy59TnN3xdyUpQWG8S_JL_hSYFjkdoAbjJMaeg8tvwbCYVzpd90d9Y-qJkyxhlro2zUBI0c6D9mIZ_WKZxXAMUw6Qeqz5sEqVtOfRo3r65SUJS3Bs3ygoDQWI6xbMGBkClpq_IgvggpYd0mP0_DO1upAhi4Nap9BTBWHfiBYw4xsJxA&__tn__=-R"
    },
    {
        "totalReactions": 65,
        "reactions": {
            "Like": 37,
            "Haha": 20,
            "Love": 5,
            "Care": 1,
            "Sad": 1,
            "Angry": 1
        },
        "shares": 9,
        "timestamp": "10 May at 00:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012359808843810?__xts__%5B0%5D=68.ARAftGNkmENK3GAGQeOFDW7HJN6yBkN-EsofjIw4Xh2VUgH1yzz5_458YOm1-a15r-35xCOXzYxnzrJhMHQ0Gv-gB5FW5JU_CqiLCTwMJsoK1tWf9Lk_OkrmEwadAU3fewuc4Hgjbuz_ZUEd6BoZTyr-FQY6JHDP06k3EGf_TbrZKZnUaS3JCT5y7HgF98AbAK5Q0yMTeBW3nJbOrZjboMkrcw__pTX5uKpqWDck1vAa01L9zDp5skZLmSyi099G6JQXkfVc2mn2GFGXIgDhik8Y1iWH66hc9QDCkb6Ike8V_d54df94FZKxLt19n-_M82GyrwmXqzYMP0SfJU4I9m-3QA&__tn__=-R"
    },
    {
        "totalReactions": 21,
        "reactions": {
            "Like": 20,
            "Care": 1
        },
        "shares": 4,
        "timestamp": "10 May at 00:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012358412177283?__xts__%5B0%5D=68.ARBTaa5vWl0qEUEtqmBeHrq6VfuMXh005SlE4FSDnGrfZ_8laWMvQvtNvkk13Yp7oXSJnynHXuFqmUjg4hSn1iC36I9942Jj1-8ilNC_w2lQZTMRZQt_jJUK60yx8nRTpQ-j79niKalHO3mgB9pXr2l0bX_ybH5I-fUAu4lbUDErwPZTsy8wPzM58Qtx9NET4B7cBj0kuiFpHrnIJWbg-bV37DyTtAC0oeyfMfp5d-TUkq0T_7DyWPVr5w49B6cG0u5d1-YccLq3rDCoNszTND3V4noZVKc--EVT8eG86zCFh0wOl9w-WUHeWIikMM6ZFBiQgLfkiUa0wEEp6IOLZBU_xA&__tn__=-R"
    },
    {
        "totalReactions": 170,
        "reactions": {
            "Like": 108,
            "Haha": 51,
            "Care": 4,
            "Sad": 3,
            "Love": 2,
            "Wow": 2
        },
        "shares": 26,
        "timestamp": "9 May at 23:10",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3012190942194030/?type=3&__xts__%5B0%5D=68.ARDrb83yPE56UNl6sKXsYJZ2IzR5W6feqIhgPwdC78nBmnt0tFoBRIKKGOTE5E0p0KFnD6aQLxP93T97YUNhFfysdHfJSYBgUm7dwNExUHMt-1EfBxm56HkHsIWRYSNt1cXswTqdrBWVZURW6NQlUhr9OaQiFvTYj300kN40tc1I68lCnb21Y0_qMmugC_s5YrGIr_mwF6Upuu3GiUZR9_UMZ61GuOs8xvOrSGk3A4WKPdKZelpvhASIWKtvs_9VOJdDrslLODYwWo5ejQyIAQe5nWLMl3QgaIEhLFLOu7oB80h1TyIwch2iOSL3WgKIE_uNJQILwDsxLTrmA6SGUtC9Cw&__tn__=-R"
    },
    {
        "totalReactions": 170,
        "reactions": {
            "Like": 108,
            "Haha": 51,
            "Care": 4,
            "Sad": 3,
            "Love": 2,
            "Wow": 2
        },
        "shares": 2,
        "timestamp": "9 May at 18:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011655025580955?__xts__%5B0%5D=68.ARAKiNv_WZiOHaS2GMsl7qKIzU0PZD3jmJKrqGijAA42XHmxjhXrMaB0Fs2EC4fQ71ld8TpB-6TtakuH0rbVDB1utVgrLS5G-pb54zYuzixfii71I-1YLStzmh073QU1aLqMyTg1LHqxTs4RmTDy1-TlrIOmgmbJenX37zLPDq-4QFQPhHofcf2YtaUeTdwf2W553DZMJfEa_kM6KBZtg-3qWc65A8YefpsRGHi402RkTqVz6Jr9Y5SxZ9IE_Adv7PLu-t8dE37FDtnun-IM81CXV_HQ1XU5Xob6QqT8sE3TjWhCkeKtBc_VnSVNYZeWgjw0osoYu-WQA1eMLsOIIdd88w&__tn__=-R"
    },
    {
        "totalReactions": 345,
        "reactions": {
            "Like": 318,
            "Love": 22,
            "Wow": 3,
            "Care": 2
        },
        "shares": 16,
        "timestamp": "9 May at 16:13",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3011438615602596/?type=3&__xts__%5B0%5D=68.ARD1YYBgoaeSBiZgC-e_dzS0i2i8KpPqQeOebUFqzAW_wLL6LDF4CnmXvNFuWc9JUw_HzEPtZyu-0aFsZhDbWh0tqIh_LGQg6prjqujAIpRGJOdjsbJ-5SjRqQTtj73gAyP1by0NB9VZ86xEupHImRRz_RW02iDuSDhGGMVIwDzPQ36Z1Q6jPIsyN_d5BBPIHMFdgV-8usUPPCKzFKXLCJkDNx9f_kxxT3l1oPi0FMvNh9nAdnyptgSHT71q1XvRWGDZwPn-3kTOvOCMxJYGHplh3Fmr-PleYY0o0NytPmYbpQ0_zIrXJdl6kcnPNFvnCYcBrKXfLqQLkPjcUNP4f-zVZg&__tn__=-R"
    },
    {
        "totalReactions": 19,
        "reactions": {
            "Like": 19
        },
        "shares": 3,
        "timestamp": "9 May at 15:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011177795628678?__xts__%5B0%5D=68.ARBgZAOB7jowOBD57zktN8hSa9e9I81C85RQ3JU1ft_KNCF0c53Qkibzp28X7XeOujZv7zjJbuNXwZT0V9Eb9jtx2-Anwq2Zmj4gxynUjCehbmuyEbWN7luv-9AeQtjnD0bXpsLBV_G8elFYSZPyDsf70spPBrvN-3T1buXVr7zHeOYUzjEXBp44-Amz3OB2gt4bW2yFAOpJwjxVnkxSVdf0DHUqgNYwisCkMTPFRbne9hz3x2HTie_gbnQ4e5F7PCZSWwzX8db5b-H9J6Onz5HjhkCODQez66V3bQnERrA4kUelwS91Lg_PbULhW9c9drU4nN0whDI05_uBh2-tQU4FcA&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Like": 8,
            "Haha": 3,
            "Love": 2,
            "Sad": 1
        },
        "shares": 4,
        "timestamp": "9 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011192065627251?__xts__%5B0%5D=68.ARBpOO3Bp6EW20b3bfzboP6uWdUXQBNWKTC0dUD1erdCvJyleUrPKheWHPuXz_NCXcXdb7hlNpumLFO5dI2I46h2GlSrp4P0QX4VES3tsNnpWe_oVEyL4eKSdLI1lUnbTDOYZiD2WwOoYxFXUHKsKKSIj0nM4xNVLVQe2kHoR7kiPVVWbudWuHJHS99PwSufrhoZV1o59JoN7WpVOWAtC4T3WQW0v5JXRmqhKN2rzmmMt50lxsx35KCb3wr0KPyKLkaD0Se1Dm1fvzj7pQ-YAM7yZpctLv1ulkEc7iJks8sIjGoyFQDHP4_EavZec-ZnOMt9mAI6sQ9fmSJ2yylHq89dcQ&__tn__=-R"
    },
    {
        "totalReactions": 83,
        "reactions": {
            "Like": 58,
            "Wow": 18,
            "Love": 6,
            "Care": 1
        },
        "shares": 13,
        "timestamp": "9 May at 14:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011279435618514?__xts__%5B0%5D=68.ARD-8RZmzNCBc_vpP8kdclvmDvFmHo_ZV2sk0xkz_V4wtVbuYUVArabB1v2Akpl9xwBrsRCeKunU0WYr-GSt8pZNfSnxzTU9_yIWYr21wTX5KsMvtkc58jW7ICSWX2eyk63ULf1Y9O3m1nYsPG5SaSsM2aaJ81e-_oXNadd6f5SeCXQ1FDDxq0VXQWprkFPn1D39BkoruU_ifu5XJbE4BbaDe74rhC_s5VLsWAap2ghMap8ziI9XBejogkboE0c9XOuwvMsftTlKcNLYV2mxlaaqTO05Vydlpfg3xWkZQE0DA7RucYdL-olO2YoTTEYvXRjd5AGrKzxQaLD7VPK3OhpXdg&__tn__=-R"
    },
    {
        "totalReactions": 17,
        "reactions": {
            "Like": 17
        },
        "shares": 0,
        "timestamp": "9 May at 13:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011170662296058?__xts__%5B0%5D=68.ARCRORbaFh7KvkNedXShVSyKk9tfVTPo977U1KwpiygsooGiEEI_hAAAkY1TUyQl1E4kpIVAPzFmGlvMBJuWg2WFRyV_ltOIzs_ZL_7j8BbsUu3ALzal_IY8Jb3su2mo7UGBadr3iiyUnitfXew0mfuSUKsHwdUSk87JZ8H7taxwPsFj_EyAEZ89hEPq-l_fwe4Am36M5wzvehEdhv0uvSxgnJLLlsxhQphSi10R7m__DU2r8_CFlJIG27TdObEKaaDdotke4aZeyilJ-Cxa7DCiSP3mcFi08oNY9kwSYllIyux_zmzYUlyRKUW8E_L7nPBPx2pEpJDAvLsnMLsRQYDwFw&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 12,
            "Love": 1
        },
        "shares": 5,
        "timestamp": "9 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3010180015728456?__xts__%5B0%5D=68.ARALVEnVlPNwCwdA2QS1l6xMV0RNPuIp_yqEVG5o6yJQ0AWHjKJY_WA5QUtUxYe2cL9xkBB1Qi87ZZCmNdMDSlyWq3KaSmoiele0pT-cNfT-Ev1I1-fCvWFFfHHprKXkhDKtoqL4UKlQFyH9MPyqhioOAS47QqYnpXQgUSUA0mbfdG9i_buUMzw1G7TUDf6bsj9b6GtKnLh1B_jYzNXk1dYJxQCgwPVQ2izPAFqJcYk7tnjWl0PYCyNKSxtXDn-OW32ZQBLRG8Zee8E_FrsCVrRJ1AakgdK-iNelZp2v7_S9soQZNR3n3uJp_NNf0IjuF2x4HF4vp-gKrB6za779pr7z0Q&__tn__=-R"
    },
    {
        "totalReactions": 13,
        "reactions": {
            "Like": 12,
            "Love": 1
        },
        "shares": 72,
        "timestamp": "9 May at 09:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3010855062327618?__xts__%5B0%5D=68.ARBI5RkPxjEzX7s3NlaeEFlaeD5UygdTYhEHWKG5Vxxtvcy7-cCE1T-3kJ0Xezz1VeWINPAa97RBlUaxC_1pIyqOurxWKsAkt2JMCUpWnH5pol_6Ffnl_l2djk3hN7BEcRmAQkTE1i5feb-Q802nWxwrITYePh2R4a2t5tqJ0viEc9tg6bzLBD1vt-A7pghvIgMy-XMVsKESIMBXTRDoVRrtaOYn12OsHji581PXup1w7HEtEHP39wGKjsewG_mHuFhnP7jo8SfG3De1y7XxfPemEzn-JwxIfVwM6U3DE4SYZ4NC2vHSewjJSl3Fj24JQtiNMW1tMaumpxFkG6fAXHs9aA&__tn__=-R"
    },
    {
        "totalReactions": 53,
        "reactions": {
            "Like": 32,
            "Haha": 13,
            "Love": 4,
            "Sad": 2,
            "Wow": 1,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "9 May at 00:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009972239082567?__xts__%5B0%5D=68.ARAnmUW4prNHIhw5hwW5Qv1fQ31GujC2s_fbicxUHChtxEO9mRRz53IsiLLBsLbnHEr-89iXPux1yiQpvYUb4CvTp9Y1prMumuFKZZr9OPQpo4VhoK_HYnQ9LxKBB1CEhsoG6K0xsWtwysBq6hN6stkr5Kg8NnC2A5xBOeki38_zyMCkpVC6w6t0TF1NJ0xjR77IfjGuqEBG4TG-_iIrkYFNt5v9pI9hrnKiJPJd5PwsluSsklgXNhIYwk1liK54AB7ZfqtqoExdLs5j2l8TVZV95jECL0e8jZngrQ_vdF3oCHOHXecF8_-X7X8Dr-Ny41SbRybm7S2kHsUjo7DnuLyiBQ&__tn__=-R"
    },
    {
        "totalReactions": 53,
        "reactions": {
            "Like": 32,
            "Haha": 13,
            "Love": 4,
            "Sad": 2,
            "Wow": 1,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "9 May at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009058682507256?__xts__%5B0%5D=68.ARBG61UGD484nmAt2EWeC2aD_gQS-HnwLPB2GGYH8N5NUf6soj-HNae6i7kau0A2YCV8JeUcck9Lw88sc4KxHFTBVwjHLw_zu2Rsw1iBP33haquBIaXmVAQ1u8OXkXX3_3kUzpLWBzRUoeEONUVWUJQ1Wm5ObedLkVjFrGB-0zbkmxO0OXQp3twXxCe207MHJ6MEvz4Dwat5IsmMJ9lUByrQlQjgLjH07sYu04k6-3kv6RQYrxcHN-ZJZ80Es3CpQVxwASmR7AoaVKvuH4_GZVhCdxhjJUEhyAARLqjSQ3ZqbBwcR6j7L_qvKJb3SLvbtLa_uVccI_q5j_RZiZFb6VF-yg&__tn__=-R"
    },
    {
        "totalReactions": 11,
        "reactions": {
            "Love": 8,
            "Like": 3
        },
        "shares": 0,
        "timestamp": "8 May at 20:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009542015792256?__xts__%5B0%5D=68.ARCLX4FOAP0J8cLmwk_qEw7imCKcLe-9vPzuml8lXffzy5K-ld3qAOuI-QTtNB9bV5o6pbq8uQkYghTG7rkkh5ua3sBG__7PXkgmKQTX2kGjnRz389qrNeSEpiCmpZr6UrUxkmYnnDI6k7uxzgnAoBBvU8T-aL1U8fv40bd2VYLy-2JCZCpj6BT-JRnJ6ROx8B88R9GJ5j3BePlvDEd1yWAxfTE87z8EBp5hUR7rxeSRFYjXkxUvCA4ieIWUzCwUA66Nvq37PBkW3zezmgeW6O-5iiQ-DCkTg4ED-0uLPG-hKpmdB4MIamgE-rBI-9JuTHTsyTenmiOD4mjTuEfSDwboCA&__tn__=-R"
    },
    {
        "totalReactions": 11,
        "reactions": {
            "Love": 8,
            "Like": 3
        },
        "shares": 7,
        "timestamp": "8 May at 19:25",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3009451182468006/?type=3&__xts__%5B0%5D=68.ARC1flvsss-ujB7JCLkSgboRPS--Y5OF7m6MOyQsauOhQkBawnMJLTDBOe8GejEZREQpvLSQf3uvvvobUQovpfS_7I5BZvNqSLT4Z5xUCsiWhzTyIdwj8W5F6JW9iLaa1r9QjtWtD411lkdHo7ZPTbF9JUGBg3gREjjWiPtUpkOCyRbsydNkPiQscgnbXHrI5FGVxXB3WCQtgm_H2KMhpFdDv8Tvz7O-lozCT4VAy1Dl0PJrmOwSyiRbK25sC4KFLvmcLaY_f0M73qkplbACrmsdkv2YSfb1wBDJ5V2GMG1pEtlx1Sncbb0sulfNqFpJwJT3OtW8uiqLtytOZNw7eTS4xQ&__tn__=-R"
    },
    {
        "totalReactions": 103,
        "reactions": {
            "Like": 89,
            "Love": 10,
            "Care": 3,
            "Haha": 1
        },
        "shares": 6,
        "timestamp": "8 May at 19:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009386585807799?__xts__%5B0%5D=68.ARDaWrcbZzP7GJFPz67xPW9W2V_G7GADkotoxmt_8jvBI29taZ4zRJmkRR0T_9PSBWtRmsaGK51Hegqr0QeMZOrhPjo7zYExMSgjqt8pU8XO2L2pRuGLJ0bDX9iFLOJ9B46iuq8x5rPHpML7n3q1X5XlU7hUZPnrJoItRI_g4IfLcfRUsO9rr6d20rOTfRHpdFjEbf-WgrKqaiV81hm4xoF00bJxnxkx4-KQWDWJYBlCaYl859bqlLIC3cYesnBd9mSNPVfplYV3KrnI_isUx9gBPEwqqRfOseukPncCcf3DI4Yhm60H9aTJmhORhFEHw_PhBU3PeYgPHz5mgeN9epoqxQ&__tn__=-R"
    },
    {
        "totalReactions": 103,
        "reactions": {
            "Like": 89,
            "Love": 10,
            "Care": 3,
            "Haha": 1
        },
        "shares": 10,
        "timestamp": "8 May at 18:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009371522475972?__xts__%5B0%5D=68.ARCLe8tAuAmATYg84IZ_S7WyeiJ0RTWF-HwP7OreoECTdIB56CW8hM86cyvD8261h8w9c_DXqef5qzGnhZdA3Z9xojSpb4OVMuPpTStK_vsrIdec1iBC2P8FKS3IEL60cmMXy_4au531akoJnMyh1lPXCVQvmk44Yxt1_b5Se3BghtZ9A5Ov_bq6NQNwhTu04ouTVWsv0fZPHShehU2IyZa4ims_D5PbLx_U0FO0wGRRDQKoLqnGF_nOklDTwcaDsHwrgj27cCAJbZPKacO6JPJ1pxJoDwvYQ5spkM9fNOooDbn3n3I0V0fnL7gC8cpTMB7n1L7YQb7nRCm8f17lottc-A&__tn__=-R"
    },
    {
        "totalReactions": 105,
        "reactions": {
            "Like": 82,
            "Love": 9,
            "Haha": 9,
            "Wow": 3,
            "Care": 2
        },
        "shares": 7,
        "timestamp": "8 May at 18:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009327469147044?__xts__%5B0%5D=68.ARB79Jo8VGorm5D_5L7rc6qgBTohlgloTgrpTnJRdkyBIpBjUqURxwjuGkJfUTUH97gVeu7-Qkdit1vPk-GHdLFulItqnLZcayEjZk2r_vrDPaGfedxkT38RhXVduuboeQNIzYmJ8BdhMl0pWgIy2B-PwJ8mtgpQ-kfarIyCGKVz07sjnVxcHSxC6sXM5StWoHCMsxo9juUx0-QybN6yx3ksamVP-dr5mK9_0_7fh3jhw6mSvJ8UgWNJBcZk78I6TECttzaJY6gcjZfUVcelPf4jgBkSYJNqBCB__031Lu1Mu-KGpCZ1tyGw7TrjSLuSJV-qgHq-sKycaFhV0WFOFA5aBw&__tn__=-R"
    },
    {
        "totalReactions": 105,
        "reactions": {
            "Like": 82,
            "Love": 9,
            "Haha": 9,
            "Wow": 3,
            "Care": 2
        },
        "shares": 0,
        "timestamp": "8 May at 17:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009273402485784?__xts__%5B0%5D=68.ARAZ6uiVKpKukzkK056ayRb_OrlIHG6wUW-uAJrEd4inU1OBLOrsnYoLG2Q7qGHDLkj6xem3foirUy_p-A7d1uKRAakbAGh9Q2mXDDWTYh3gs-Vf2ksMe0ZjW7zjNcpX7OLF4uVkFcKWrrOPmcXvpIMF1BdMO1TotocnldQOigyGaD29bsRIjTWcdXTtS_qJyey_Gs8McJTGookk4I0LJLgR0Ww0vFMfj4GuFYYIhIl23gz_OmO-I591Q4ZipLACEiw46a02dhghrsHGWC7YSbfEexg6aIFJLMz-oS5jW4pvU4keGQDtLKB3Z-8RGGz7l9dWe6dPlHy0klHNtjTOMN425Q&__tn__=-R"
    },
    {
        "totalReactions": 28,
        "reactions": {
            "Like": 23,
            "Love": 5
        },
        "shares": 8,
        "timestamp": "8 May at 17:13",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009210109158780?__xts__%5B0%5D=68.ARAhYuo96uRh6cKKexqbEa_BCNDx0PPYKwZOutpMM_uaM0IjC7IdsLjDgVZiORh4kkijaCm3cHeDZV72HZUQxdN2Y1zorHindyCcFy4MiXShTDFjYW5Yc32yfUaT-P28dz0Gr-MBH6HfEJmWHH96XaRXh_el-3cv7vgkqutdaZt5Dv7z6m5mamlOOJs5-Y5wjFb15tFmbxWBWs4vGTezdS0FSiJtTh0oI1R1CwLhEjdaFJ2F5SVh4h5IebC57fuquufwTKUdsEDMMiKz52KmQENxKffV20h2dRQGb-5hpYHHBIZsVEbpz3yqrC91rZe4toNWnBs_WFeQeU6mAhXv5A-jzg&__tn__=-R"
    },
    {
        "totalReactions": 215,
        "reactions": {
            "Like": 93,
            "Haha": 87,
            "Love": 23,
            "Wow": 5,
            "Sad": 5,
            "Care": 2
        },
        "shares": 10,
        "timestamp": "8 May at 16:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009155179164273?__xts__%5B0%5D=68.ARC1w8OUcvqVGsq8nRjdgFqv8tTM3X-wualLicnbVMcRztQZJtVuGUCSR6LA4nSScLSAF0r_cstWMccjVSr44yg6iFuTkVY1cvGfoNr7CbNNCEhRDiFn9FqVUCMHTv7hWTDQ9tseGDJONHVxi1BIDLx-KGu190xfSSz6dAqnroJ55YnRl-2DcBgZlHhUVFmzCBfDD_QiNseqnJGC-zWrtl0Adwk9suCRBLiwweDfTtjgKONfktaA3wHIxbajrNI1K-5n6YBOTSFOkGEwuf64yCtOMpSnh5sd8CZhUgRuIlvxtroAYaPk41FAIZTOvPI-aK1GN2eKBTc7T6mycSqaQkkJIQ&__tn__=-R"
    },
    {
        "totalReactions": 215,
        "reactions": {
            "Like": 93,
            "Haha": 87,
            "Love": 23,
            "Wow": 5,
            "Sad": 5,
            "Care": 2
        },
        "shares": 2,
        "timestamp": "8 May at 16:27",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009127739167017?__xts__%5B0%5D=68.ARDxb6wWmh1Z2lgDCPOwRM3OIoJ4QBOUGhQa3JVjBZK7ZiXwxJGLw0LT5ycR7TKYWFWngV37b1ueMLCWOEHFWpPZ7xgJtSlz3EMqzVAIOkV-OZZX42bU0pEC0g1ItNZo9wN-alGb-TXRD1YJjl9jUeoL9Tx_jHrkUtKycpNK2LlHXJ3-3ODONif4TCAjjtB9NOzTAMX6_dsr2vqC5-nIV-JP-fqhs-Mth8bE3ziS79FvMznBAX2pg92pKd26hmV9eQtPrVmuDYkSwUNx_QHlacFq1hFY4YEgUfBHj9jZjXujSi69FjfxuVI2UABQr0stMbA8fHPRM2BV0nn6rq_nkygc8A&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "8 May at 15:56",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009075019172289?__xts__%5B0%5D=68.ARD-tlo-8h9c9hQWyvZox15Oz7U8N3nTeRJdBWBA-sGgxe48rqYdj2DQ7Vs4NiWfjianhybi_bWlfNeViBWfHryZSjy7Te7d8iBcFNIIwQmvynM-NYR-063lpdKui2DnovyYU8jsvF2Z6QAPzuUHxX9WNMLiZ-qGj3AjC5tWfYhn9pgs4PHpKotVuc52c_KdJT7q4jIKUGKShjEg08unEwMy3HsUfGKmQTbPWsgIsZqM7pHVAfm5wfisT_On0Fp8xPaYxpbFRdhiriQwG0yFA0Mn4lkNT7U_eCYoSe8dLCjUfeb-vGGEEhYWh-DZGwT4Z7b1Lhu08lp4780GtGTQjGbbNA&__tn__=-R"
    },
    {
        "totalReactions": 86,
        "reactions": {
            "Like": 43,
            "Love": 36,
            "Care": 7
        },
        "shares": 4,
        "timestamp": "8 May at 15:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009017925844665?__xts__%5B0%5D=68.ARBDfYQuYHDDhw_R8qyPZ6C9xK9WtvHnHJmycd7k8EEG8PFFOVWUQYPG5G7R2SUxMlBqTC-XgkhnTd1fpPTyMcRLUCpcnsmxTbFi9MMsEzW5Uyl3tZyNRLImESR-DQHMq8vef3LvVWwmINecuP37seTtLtqBDf-SQIcGu0URim-rkeX9MFe_6SiCkclBMShg12KJFPhrJG5r28wiLOU3lvUmP0dF8cZ2eZaea2IERG9eUxUN8wvyvVUgGp7yIa6WXpPxq80RGpoh0yCn6icWOC0c5XTl2rAkg1AXo7NUcg7R4r8A45ytN5cCqsisQeEvbFq7HntBhXpRFCsIFOWCUIqxPA&__tn__=-R"
    },
    {
        "totalReactions": 86,
        "reactions": {
            "Like": 43,
            "Love": 36,
            "Care": 7
        },
        "shares": 0,
        "timestamp": "8 May at 14:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008979879181803?__xts__%5B0%5D=68.ARDVIFqEBs1iNZOMU3Q99l9UFK6lnIVVi2oDqZPI7v6q8coifPg64sjilc_PJWg3A4Wxy7TNcW_vqoIJESfP4sHrYoaddDz0QtoSEIPHCbexuSpywXVcmwYHhdmkGtVqA50WfqUhqLAaFrsAcWjkCHy_MTPKku-t7daiQeHslLeQr3VmKxcVkuYAqc1UDevz-ZhykYEWRp5KzKWn-hMqxghTp_sKXRiC5vJXUQcSF_4ek64b2wNOGUSfWr_S1y192ehUCervNBYMWiH1IPvz3vKNm82jg7rP2oCUIzELzPZjIWuWBSP44uP-DKTgj1J4E-wBEP0u7CMRXdhQuLJ_TARVuw&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 12,
            "Love": 6
        },
        "shares": 3,
        "timestamp": "8 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008946302518494?__xts__%5B0%5D=68.ARDYHDM6PHqyHYkUQc7kSHOt_YzYuThYjf4BeaS16-3iaKv0AEPpmwUlQywjB5_hX8zWWCLNu6lqJgpKtWUufzhlQgeBR1R0rWZSwYU6qtB4k3Ql4eBA8iuv-b_6kRdVQOxx6Ho4E_Ng6RgjOkbk1n0jVvrAPFPqnVF9LzMxnl8TWfuUFIUIZAmp8MCx62Ee2ILRnQf7HXEd2oX7liruViwttrSbN1Iu2cmFvyrAEoCYzfqhVQ8LVrQCAm4cnKzDV7o_qEzmLem4cQjJKXDSzKjtrBbWxoGYAg-YAKTiMprHJncduKFoWri2Suj_pVdTjOp_-E-icU9Xr0hPswvU50mfRg&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 12,
            "Love": 6
        },
        "shares": 0,
        "timestamp": "8 May at 14:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008898709189920?__xts__%5B0%5D=68.ARAFVQdGoMmVChm8R-7ZnCIsfBND1pimGECPpWrnVNOJF1wWEmdsvUNX4cyuJ0oBgHnfpEsG4xyg7QgeQOoVirWEy5jAiliJ28w1M-Hk4DQaex8eujIHnZRNEKr9fTGngmTRQbAZHMaafQTaKUKWZ96RAwIXaFk2UVtCUMhX2HPuOHGqEb84UtUsjhQUzSnsxYClTmOwqA1Pax7atEfgcXGXjLThGx_OhxQZ76Fm0ZQNAIZVMrG0-mvs0IYpzrzBwTmAQlBc6hOHTTZkevlAEcYcP-bA_CJRhSXWtuL55e2tPbO7N4ZVqci4_Hb4sZLHRzwIqrCNjC7EGwYYIMM_V6xp9w&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 6
        },
        "shares": 3,
        "timestamp": "8 May at 13:26",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008844055862052?__xts__%5B0%5D=68.ARDEm_KJm8MHInqnHPUvKndH8LgxT_pbGTkRzKCwEKifCDzkx2EBxoupTEWPwLaFZaThGHubjft4PwQjH_nmLo0FgYdbpby4s07nAqbjsAxJ6I9av4xpdQ2bn5tuSVtpF60neFYR2wIeE2_lXLHW2-bl2Y3PzJo5y5xoSJ6uEGi4arbPoQybBpMsdqXZ0mvDGGfEFWBS8WVawWDlWyfjUiPPh0tQHyBGTuYV-603gC-uBB6suDohBpYfC6v6VGwt-tsVk-yD-tZTenwkVkzF5O9C2kqrW1y0e3m9M920nks9wkEgZ7Scfey-3KD6gLZ-Nc295FQ_Z07L0oPPOmXSduZFEg&__tn__=-R"
    },
    {
        "totalReactions": null,
        "reactions": {
            "Like": null,
            "Love": 244,
            "Wow": 222,
            "Care": 22,
            "Haha": 1
        },
        "shares": 308,
        "timestamp": "8 May at 13:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008802409199550?__xts__%5B0%5D=68.ARCQL2mS_CtLbdf_TE__VYgAwZ0oumoH8aNedwvhXzMWVLSj8sXn1KKKI0rthlWlXopk3faSVucIEfWCIKwHqkIpYyhlcrmm61rUgILcu_URHBaAgzofcIMrwX0sJ2U4C4yg_xKDKdCVm7aQL1gmtvYfrlInGv5I-zGXiq5YBpKM7xNFmEDqb43QeWftL9c-dTflflpFE9UkdkISQdizlIm5ZPiFgDd63vAk9qqpxfIaVpMMlcH_JvoJO6EVhIzSkI2K9xwPMmdAjiqyJovCpI2J0ApKPj95SYkXsjhG7sNHsb-kLOdLo6R_X6MaJm9lbU2e3nK_z9DTuIX8qu7Q1I9Q8g&__tn__=-R"
    },
    {
        "totalReactions": null,
        "reactions": {
            "Like": null,
            "Love": 244,
            "Wow": 222,
            "Care": 22,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "8 May at 12:34",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008763465870111?__xts__%5B0%5D=68.ARBE42dXx-gSVvXmUmhcqvldoQHVC6OZHFDUw65wNOAc4Fl-6K_3SMPLBJY_EZztpTkbkR9evpQdi7hivon7PCUq2BaaoPXUw2OLDsm2Pgiv48g7X9BLj1Bb6OIh7CljzL25LP20XDt3wRAA62yLZZjlk5mLM0Se8ToICw7Pw17MG444sn2bWCI1RQETftWt9bbjfukZluPP5yNgf5RXJ5lwJ463EopzgvaeuDghE3pWko0CTFK2ba5S-Or7grIDqf-VYIZf1kfxWyY08GsVKc5XfiMKuXygyGyIshfz2UnxwbjfES9PJnqkXG8Q1ZlPilCS2L82oNpdzxCThUyelNpNEw&__tn__=-R"
    },
    {
        "totalReactions": 182,
        "reactions": {
            "Like": 161,
            "Love": 14,
            "Care": 4,
            "Haha": 3
        },
        "shares": 11,
        "timestamp": "8 May at 12:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008727595873698?__xts__%5B0%5D=68.ARDeMq8r92JCheOCCoPHhfVrURM_0ZHXQcxzCUDntVcMNQUDYIE8q7c5g6VqbwVX6q9hVZ9VM-RhNacXe9jKhPnrUOgFm5i-rR78G9Vf18NtQP5ZHi5AJYbwsOpRYY450bGZTWd16iq3KkZqXgEfseOOrFGJGsb_6vMcjVOFBu4DKgeL9J-MdDuAbc7mH99fbmAmiI7E5UdAZAtDec36inIzcYFdIbT7vKWbXC3sozhGC5gMvluqzquX6JQ9Pki08sHFFcqg4xiaU7mBD9G781A_oVPyc6zakMznfyecLi5W_SKtyF4uzrSH1mZvFgP0G9mhm7oizXSUnvMftAgzzBapzQ&__tn__=-R"
    },
    {
        "totalReactions": 182,
        "reactions": {
            "Like": 161,
            "Love": 14,
            "Care": 4,
            "Haha": 3
        },
        "shares": 0,
        "timestamp": "8 May at 11:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008687875877670?__xts__%5B0%5D=68.ARDQ1nHWN8RQGD2g0pZ_3fDpCIMDDtzkhQ9QbREPchQFiaeiKoxiXVpK_3nvNnXWYIF00b1FusL27BNn3EEbaY4VDPX6skWMM8dba2YKE13C8UWPWTgWZa6B2CJrsC1xTZYRajgkli59Jkez8drZek1d47rZFVJ1CaqqxtCf0dP_XN0YoY6-9bnch4A324mA2ggQLFZkq3apTUKkmhEb_KKxPEUhFsnp6R9L435Pm9SqmPdstUBg0B_u9rAdhha8mfOb0-91UvIP3YA0L1KOzej6K4KAZWHzrlatzSNSShPnYvY14YKAel_2FOdkVEwrGtJRQswwUPoLdumsMspueuNVLA&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 3,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "8 May at 11:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008645012548623?__xts__%5B0%5D=68.ARA3i-UiPTjz3ovqe0s4ueAhn1W2RSUIXWxm09To9xkC8UfZssr2i-7zvtC6YNSEfRNXy2gTqshUTLi1G4EPQ-fevYXKcpZHpRB5fakx-Hg2MISGwnX_-hAC3nnO38V7VjqYu1xgSzcwxKUTEb1h5RsZFSqNUzCwr7hgBoS2nVbZEK6uPoY0M-pRRh39blWMFXrN6klf8Ik0tVc4OXwoFL5bSsTv__dRZFtLu95HOvVzwMPalDN3sgk-YPjMqkb1qNVr-tJ2SbDInYciWDOey6TjRaqGsDQgy-vIuId9m69PCMSqixJAV6oI9iVgXVoWe6sAI6B4684aqKknfdyfJuBy4A&__tn__=-R"
    },
    {
        "totalReactions": 193,
        "reactions": {
            "Like": 141,
            "Love": 36,
            "Haha": 13,
            "Care": 2,
            "Wow": 1
        },
        "shares": 15,
        "timestamp": "8 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3007688865977571?__xts__%5B0%5D=68.ARCLU6FbFGDsmYIxCjJU9xFv-h6PkxtNYBaQYgD4u3Y550D3wRwbGfnSM7_Ps7qiiQlGWaqKX2DMOPKPNb-d-QJPgnhzTPubiicvHG7z6l4DibyB8J4TQMSA7pbEoZ_sbGZo0IcYxxap2APC_RaR6VM0o3JUegXKHu28YdVhV_N_OYHS4OCzmu1NGDZSio00IwPQL-FUQ8Uruhj6EqwB4Z_uE1FA8kfgyqozel73RIwCm_0tmVjavn_jWNiACGskos0HlX0g8wNRdXnIuggbdWN3G1KmoFz4b57Zex8jBFcvzZGQOMNhQpZgplsu-63OroTq6NXcg27iGNIchdl9BMcaig&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 9,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "8 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3007677725978685?__xts__%5B0%5D=68.ARBPBYtkA8IpHadgIHYO5lhB46YdLy5Yl6oHmUNTvy7v0vdnKGMZMqsjpz8k3Wf37u8ND2_5QBg2gqmYA_WiEmuhnDSByWS9jmQxoF2mVeSXlINGtKM1KFuwBgYIX9G-nVIp7YdHpYfFnHAj5XcRNzCPy0DdaRD_Vm4OOBh-Fdrf03FJDcsiQjBJ9MuCSQ1jUDCEuxnnMgkxb-OC4jv-Peqfm0v6PwZVrpJhWPK9SLJRXrO4U0iIL8BYDwrHQdHV_st_ssc2ulmPxbhNVOTajDbUDrLLDyrLQ5Yd3FIey9TQDW92piTB-txnP6kAGnzvDmSvIzuOymIjpbXCTNixgxh82w&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 16,
            "Love": 3,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "7 May at 23:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006974469382344?__xts__%5B0%5D=68.ARCrUdaqe2fb8pqvkkuJZCzrslSYR048nyYw9wlkx02KXov80DNT-9l0sy7cVJApaJViRX-gGusWpQKaiv9d6jnHMJEJ-pIa1acg5I1mmOpBz1sSYe8HTn9NyMMIbKlsR69aFXMvb1L7dpnMHgK6R_xfN8HYLG8jvsL1z5iDuMc7eWazsDLwEu3qVSn9T6QGU1m2wtE6WG7LDzP7yIpA57YbgHfJTxl3bDYggRK2p2Qk8NnuZ8vCZzdUQvm7F0S_pkcmwN9RcyiGkN55LLZ1vHG2tW9q7UCLmcB63DSBauecDmWL-kIuKhCOfO_jrgaFP_KPybC_IxBZsHofztYUaJYguw&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 16,
            "Love": 3,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "7 May at 20:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006994436047014?__xts__%5B0%5D=68.ARCoOqclo1M9gvnmVY07B12nq04a2QjsjZ4k9f3oSqX1YX49j9bdOdkjoGfEXEVBLl8xFY0lKEdnXgWXYf7aArI3ZxtDlXEglp5M2lSRTjrrgD9OOkdKyKnicOmWUEgCiS2Z1-YWM943FAGxQwDYrX15UCd0MNDOVfkIfn5CXBJ5UtU9xHOIK4WvDk2hKNUK18jxcZTZWBfnXboQryxP2rPh20_p4gsZb-U5_2-i8yG3OenapD3_FNyx7l9kMpq4DFUivXUVtTZ9cNry0P9KEysBVVU4hfybDk_hpAxr0R0AOkqOSdhR0PZ66yeAHInTVg-oZtD_L0PoD_TbJbsdJgoCAw&__tn__=-R"
    },
    {
        "totalReactions": 20,
        "reactions": {
            "Like": 17,
            "Care": 2,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "7 May at 19:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006996609380130?__xts__%5B0%5D=68.ARDNxD0Etdmx8Y8Op8ElsxuJNuVcIqdqybjX0Ypt8sOUoN_ZjK1ie8Jsplwlc_ybPBYToJzKFyN1CN90zWKV8pBxztFz9egUGEhniFxovjIZCCyqaoo_0tJopghHbgpNhca1XGzXyETa9L0B0b8Ufd11tV-3RQe3mgkvpLMIb0mEVDwxekYQNwvsr_bNoItrHAB6ycthWjhKpDV_X9BHE7dPArq_OR8dcxg0exz1xTWDkfYWuwGLJYDbAVKxd1J1XJ1HY0pxyTrTOM0utlzulsVTsejKfRB93DIVBvSOzicysL-mg9U3o0xu1Q9VFSaB3sCgoTwrw6KFdF0hxDGm01h-pQ&__tn__=-R"
    },
    {
        "totalReactions": 36,
        "reactions": {
            "Like": 33,
            "Care": 2,
            "Love": 1
        },
        "shares": 6,
        "timestamp": "7 May at 19:08",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3007037169376074/?type=3&__xts__%5B0%5D=68.ARCdlChWiSyFrvbLmWwpxyM8uUx8Y1uLcGLwnptlxn9dgiVH7fQKM8Xn29JV9-6P0vBnvOiGyBem_TvdzM1g6j-QDEVTLl1HncZ7IpzpZM4lujYnyUHmsEcgShtrG98EEkRXVmDKl0rjV1HcVy0B0c9-L-FPx5y_FSDHzpUxi64EDZr_Ic-3-_l8ib7iHqbMTqa10GKnGvX_GE6LnDXTxI-C33sy1SZqHh9pIjj5ZVTQbl_HjtLFDlGisnPik6wb3CmH7x6eVAkEuD1cR-sJzeKrwPmSa-CdmYGAO8FeIQYhYjBehQqwqo8oZ25tUOmtpbKRX_noAO1woMWcavHbr0IdPw&__tn__=-R"
    },
    {
        "totalReactions": 36,
        "reactions": {
            "Like": 33,
            "Care": 2,
            "Love": 1
        },
        "shares": 55,
        "timestamp": "7 May at 18:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006970192716105?__xts__%5B0%5D=68.ARCX0Jtc0YJVwfuaIISkXMuXfO6AC7CT8pkMuu2WOhDPWkhFVhdCd_ZaeNfRDw2RjFnLUjOzq37wCeC34dCJbA9jQSVuxl18vFK9XapReNtqOmmAWQTSS7i7XpxyRFMraLilW6jxgV5D6FmoVZvI4wpk_tj1HCe8aK1-WtvAkpHRoE5GT4nmxtU816J5SiGWu5WX6Ce11TqEirgqpCIVPOC-d8srIaP7udxvzynbgg0Tf3m8C8NTaNSpXmBYecMHDqTB2nxSZIcgQXmEmuKegu4i9NtLPP0bxUK9ySgCINP-oL2FE7qS4cXjIE8YFoZVAQzLoHvK7zzywDIruZ1I-HQstA&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 9,
            "Love": 3
        },
        "shares": 0,
        "timestamp": "7 May at 18:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006929232720201?__xts__%5B0%5D=68.ARCBlaxsbngytUR7qTnlzxQULuq7mLfJgnegRlqd3z2WTWnjz6VFCYVZe_cMSSBeLpqa_LiXDEgFlGj2ZcGRkaXsQBywAuqUVu8a6ymIhiKiFwqRMgBgZCTsUXqkvJRPdzcqw-fA6lAsDZnNzB36PrYOjSsZqSGs1Re9OxACM1r0-YB_Z-xrJd9fagAF1KWwYoeI6AIAeGZj7VVP7S32lkIflWIhku42KdC4BUx00IvxYMYpCEueVkVFUIcsEVW0LFFB1zlSyteM7J65bvvSODhNFMuCnRFgwAZklBR3gaL4mjgDHWSle1CkROfBYYiQJFWIMdJs9M3qcyN52UNGNfc7tw&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 9,
            "Love": 3
        },
        "shares": 0,
        "timestamp": "7 May at 17:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006870136059444?__xts__%5B0%5D=68.ARC3x6KX8Yg_2IAp5X64JZUyufX5IS0yBBWfGXR8y0MGaeHCVGUOz9s3iSxbojmtORkmWj3fv923qSUHUj0EHSCfpzu4P76Sj4Ox0Iu0KChEHKfh72zDGzZ6Rxep7rYNlV8fuDPYbw8rdlZZjKqJ47BmFTwVsxQMANy8HPUi8iwvQl6nF3CLxKWufmNsF2PeTz3dSCdSaniX721sTZtKufp9CLilZ44ix2SGOq5pJLMgHmRNmV_i7lxCXVy9t4M5xtspRNCqg-KNPpMyroa5sX2E_UWuwFXCkk_vD5HkTn3YxAkIC29FsCe8Y9stFOztk8YLhY68XqfahL-52z2Xnxc6Nw&__tn__=-R"
    },
    {
        "totalReactions": 43,
        "reactions": {
            "Like": 37,
            "Love": 6
        },
        "shares": 31,
        "timestamp": "7 May at 16:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006795176066940?__xts__%5B0%5D=68.ARD_trYRkCQbDMpNLH6qDZkBAVNfxQA37qkHALJS0SyiR-KR7C13cb4f1Yu0t1URBaSqhunUuJ3WEUd1K4LJ4phwPDU38AMBLn7CiK-abN7Q90fV4-EpjGusIBpkc3SvsMjIIgf-6X0n6vbJ8v5AG3N9mG_ZUXldN_RMM2vY4MnyYviyv3siSnj_ArLaDlTxdsMi7U2LmaGQLHJBECIWRxWAKjcDQ-7-EiADVQmvgjFo4_1xgyRKTgHXunHPg4z97n7bKxHWVQ-09qaNNsPr0PKh36NQtJ0kjvJfHhz7lluhhD6DCtJFcdz7gF5oOI_fa8eo775IGNJvWG8ViphdeQ6GwA&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "7 May at 16:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006746392738485?__xts__%5B0%5D=68.ARBlyVjqCUD_v4UujLm4UJPvmV5jkRKR8lbITZQU9ueG4U2_nop8GWwvH8VXFz-Z1-LWn-FL6llB1H2tN6iJHx01h0DrVWHmbAasdnciQjhmg_J7r_tDFn6MZc33Z1BBdXQDw9pw98kRp4Cjia6gnj4REeG9A5Th7dnvFYg8BB2WMDJYYWR3fT-Hs2wYl1tptjgIl3XZT_D7JWMDTw6CuzlTD1RttX2vvEq39QZj9anOR5A_5cECg6iopCZJ0ED3M4acptpc-rs1RDIGmqjFhsKj_QUu890ngYak02IyWanmhKCGadIR0L9TyKp2vprrncD8ZYoTpBqmchFaru4WNyVWZA&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 3,
        "timestamp": "7 May at 16:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006706019409189?__xts__%5B0%5D=68.ARC3vB_vnHzyI55JlYyUTmCO15KaFWupp6TYfpYMkap7SXoAS8L_-yv0FCnqx8vDk1rYEDbVP2mDhL5MDD8dh5y1nNqJaM6zBfhuxS5KUyw2xxwyyHkyuebUKM4C01iMYrFbXvr3oup8lC2m-_1yO2T8TZofI4wCZobZPQT8MaMqyyMvcwyMV-J9ZcEP_tL2OE-0kEVpzF9kJcGvwDC9pQf-iOlmibM8foe5e-WP5umpn8SuQcn6mLQjeHxMoEG-_MIPf-VguCKr31ks1Uhq5n3_TUJi6_5wUNkOXW0xmujQgCsLadh_Tq6bhMHD-is-irMxSqJzAOQg0NnGV1xENdEeYg&__tn__=-R"
    },
    {
        "totalReactions": 81,
        "reactions": {
            "Like": 68,
            "Love": 13
        },
        "shares": 0,
        "timestamp": "7 May at 15:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006660076080450?__xts__%5B0%5D=68.ARAw_D2tdJFyKg-qSjeDovnsncxORSgVmgRSOBPk8oPsSb2JQNsh7E1K6gmloHQHb_7-G7ycMRDaXogSayccHKYypqezo0Gv1yPgXvfBD6ciR33XMePBbfhATdDlriofwe6n4uE3l1PZU89aDy50dD29M6RWBdiPaJmrkMZDSJb03fCeIYqHexr8hRak7xBQ6-tceOI4MWY_Ac_S6TXCdAZkAQ8jQC0EGU3_Tg_sUmxhxDbvIG_XTehCVdKvq-oaYxtHxS8IFAqr4UcVsmuwjMxdjMJ85wgCGttBx7wQPcEs6jkcM4ODQFal1QxTmGEdSB8wg6RYl5IJPaG38MLv-6W8kA&__tn__=-R"
    },
    {
        "totalReactions": 76,
        "reactions": {
            "Like": 59,
            "Love": 13,
            "Care": 4
        },
        "shares": 11,
        "timestamp": "7 May at 15:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006612219418569?__xts__%5B0%5D=68.ARAdavBthlLg7Sbp6PxZypdNfN97NMCOxkBhsy5t1C7EznXZPr6C9d_OwkvuyDNKynfQD6iWM1KPgp8mi3Nwx2ndZACocgXIgSLBE6qdKHhPNLUwrLHQ5Ezf518PaJadsPpPdDT8HoBzvBgYEQHEyomHK27Im-gqhYQNveJbjvJCQG1PhTNfMeCIr_RyaA8nKEeLH8lTZptuCq5MO8-EBmXpTGhkdM2uuWxBU9cDvK7Ksn4zVFSwF366oE8uYfJHKW6VXslM47ETNvCtu_ZIeTWkxe609Z567H8_ppF1i5IUJ1SYWiKBG0dAUW6khEFhv-Uk3QDz2DUNq7SkEFMWW5SFkg&__tn__=-R"
    },
    {
        "totalReactions": 593,
        "reactions": {
            "Like": 386,
            "Haha": 139,
            "Love": 52,
            "Care": 9,
            "Wow": 3,
            "Angry": 3,
            "Sad": 1
        },
        "shares": 47,
        "timestamp": "7 May at 14:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006560116090446?__xts__%5B0%5D=68.ARBT_OQg9FG6hZ1qsp-zdwGNkrtUpfRubmAOgG0uBmqF_9lQf_25_0b78pFDjao5lcBH-9R22Sfl8xMayBCRf71XYYSOWjrRcPGIdULTyyU2oKe8ToUz9uRogI3DWWojAHK0IgwDFXxQUL_eciWHoeTXvO6ZK8XUb0mvjMbs0gQZ5hdiWBFP1shWc79wENGsH8jpuxVxdEyJkEbeEy2WmxjikV_KiY6gsT1V09OT97LdXQW7KhR7qUMLjMjfvtol9yHQwdolvBVFcEM_4_RSjCR8_p0W3maa57QhGLEJV6QUuddlvgSZZaUoW3VbWpU0frsB4w2lE3AsYgpfXX7hYQ&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 6
        },
        "shares": 0,
        "timestamp": "7 May at 14:38",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006558562757268?__xts__%5B0%5D=68.ARCYv38MUP8-39Qiy9TZGL9hJgt8bZ0OG7VqV57mnaI9vp8OWlHcEjiOvAjxGL6AEcIJ8GMqLD2FwprV3li0uAznIzl8DP6LicOZr5eYs5kWsaDy4XI5mhurq85SiMBMCc0gzwueEBwPrSY412JQvAi8os107VW9_lAU0QUIigX-VPtcN4c5Cti_hgttHQdiVNyLfnNatjYonWcEa-X5_Pw0JO4G_jmXM0bAyhUzf9dVrMmmLOSZaxFz5naA4yUf6t4Hgp9z8gC4uLu1qTgCEln9MgIgRr5kqaqONXI7OrQiAn6fqgTtHDIkSVVIjm1lafkXRxbFHki2LwTeBdWsDJbavA&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Like": 8,
            "Love": 6
        },
        "shares": 4,
        "timestamp": "7 May at 14:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006510212762103?__xts__%5B0%5D=68.ARBYB96VcK2GYyv-kF-37oBZpM6Z2Mns8PI6ZR_l09qg1GldP61oNHmQr4Yr6-IT5oTAhQlMxtvbIwhM4GIpyC3KZrY5-wiijTPzaiwKDT_cKTK-wpRJj7bCO5E7Muxk8QoMlidaTmXtuav4fwnAL-w39N0rzVzNESopr1UXwyctnh1bm-js-AfFZlVoqpohzMuR0bvl2s5O-nCvJ0KeJltfqZasrwa68TIR4Q5cRdKe72oMrJyuG8bvU23r5eMldbyb6jIyz9iOT90aE2IxoT-7yOwE1eE2hpJBBsibeiB3g242aD3jKErwArNxjPe-TuGvTnO-Bu_5beEB-XO2KqHLfQ&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 5,
            "Love": 5,
            "Wow": 1,
            "Care": 1
        },
        "shares": 3,
        "timestamp": "7 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006443469435444?__xts__%5B0%5D=68.ARBgWCI83ygWXoCb3-mXbgbIIIz2J30yJd4prGaUnKJudmRckesIIV3UTD2UJsZZeeaJBB4fGeVttY2KxkLN1BEju3drWo-dvOBTnAppXY71iCAT2C8RZ1EilAU7LFHomhA2V8ZWD8EW20vCGQb-ce7Qkteb8X8ScIGwsMWLUor4CI9by6pMHfdvLAvfTCW5bwjWzbI78bfraR-LufuOTXQ9FnCZkprPP1qpRMlLbaB9HxvH1-C9SszLWro2QAHeR4CqdU60tOe967RJ7F6LOcUE_23WVFkP1k15cnsWQQ5ls9pbFrEmxTAYz_zoW0DQuGWds5_KCPsJ-2op2seccJ_01A&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 5,
            "Love": 5,
            "Wow": 1,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "7 May at 12:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006355729444218?__xts__%5B0%5D=68.ARA0phl-vixMrYZ8EQly9XwztWuf1kQRABh0Z3CIxo8Cnz7aX2ZHvFduncbZqRO2_ykHmZgTJ74SgDZCJRrPDuHjHBbY09S8EVuVW5n4NwD-DSihkGVrcxQObF9fhdrxnLFFNinHdu9WdHVJylgV84Waa9OLVlo2-DiL3hfCgzyk5wv0c_r_GLc8f2UHC1d4HcQr-TzMmFJGMiFI_hjNZlJ1F908wbs_ipFWSLJ_yF5PkEvres7Cv5N9x9I5tK7HjSvT0ahikVb2pu0QCtaqwsMRH-lysZRqjA5ibVkiK6qwQEoFTzPjlPhdV25XrXUenjivaJg9iE9H4GYTpWY3d-fePQ&__tn__=-R"
    },
    {
        "totalReactions": 8,
        "reactions": {
            "Like": 8
        },
        "shares": 0,
        "timestamp": "7 May at 12:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006321762780948?__xts__%5B0%5D=68.ARDupwCuePstreONNQXP9OtQEuhVweURMTWOJRmbBwM3dawFsBk7OXywWUMegtfIvVdCk_UgQvBeQPDaE8DdD6D9BurToUeT14iZh1i4qm66KN_IWg_hXNoOfbkg_Qh4NAG-Ixob8rsA6G8So4ofAAUqIe-p1eRjJjNZUDiE-64x1k-2p4rKpa6IUa0Y_0f09-ob7FMNjbuvnrrL--yqbqGIyi5DIVtYnblB08A7ZObDR49CoAlFZgPBI7knDiwnVFBeCwmtg9gOyYdqkAGkX1BR9CKpioixDilAL11R9p_O4IWf1syfucR-1BfFLoabn2cT7p0o3rlQCFdu_rCAQD4SdA&__tn__=-R"
    },
    {
        "totalReactions": 38,
        "reactions": {
            "Like": 33,
            "Love": 4,
            "Care": 1
        },
        "shares": 3,
        "timestamp": "7 May at 11:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006309426115515?__xts__%5B0%5D=68.ARDZhTPGpSpT4w-pz_DqMv48dJ7psjrm625Bg1f9m7VEyUjyzA6WIyQ1q-1WUt0-Dzen0jWTiqZH3t6rre73wH2XFnk4qtHY6OBisXlAmlHI3DBX3HCjJ2cfOL2D-0EYf0FZO8O9tTgCy_ENW8lR5w7vnhBztNVJIPWodnEk2nxt0En9LnbMCpIbv8a2ZqOluWx5Zpp2r6UmHgGz8fcU6cuasIKx22P4D4sXfFduxQs4u6g6XvAo31y7thy4llnEQtRpMS20LDYYuJo5hA2k7hAmjYFBP5Y1FbZpXpnnuiNTvCuhzXJDCLUkGeqVglEzlupJSK_eALwTYOI1nBSy0di4Sw&__tn__=-R"
    },
    {
        "totalReactions": 19,
        "reactions": {
            "Like": 8,
            "Care": 6,
            "Love": 4,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "7 May at 11:34",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006276716118786?__xts__%5B0%5D=68.ARBPEp3L4bPfRf6qsClekfpGaIvVeSfGRm5l4CQ0rd_1eVspuoM3LMgB0CH7O99Xu5dTXa8X_y2wThlUE8wvnmI-PRg_imgq3UbbCk9Ob1YnrfwQnPqvVyrl9w3dmp66Z550yzxNw62B3-cHC_MT-StNHA3dxcl-ZQebCXv0AE8gT7BaQeHO428k8D0-TXBVk31UKydbBFXcJM4dav4fSHLHHPHhzHSIgHgvHGKhYYifFWkq2C_9G0kSI66m5DIVHR_OAWU9wZa8hq2vlZeAPdN4_7GsYVaNWNmzg9y0CpiHZV69ChHCkL7hU329q-8pZTZJ8u8Jz7eQLEkhB1Fnzch96w&__tn__=-R"
    },
    {
        "totalReactions": 38,
        "reactions": {
            "Like": 29,
            "Haha": 6,
            "Love": 2,
            "Sad": 1
        },
        "shares": 6,
        "timestamp": "7 May at 10:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005767709503020?__xts__%5B0%5D=68.ARAbGGIf9_L_4KD3OjVBcKyGgsNfuXk_DTNWFmWwG2WwnBMvQcqhDFqlWFlMW7dEmZhhw8VFARHMpB6cHIJU6GxjL1OR1zXdIxUdjA0ZkwwB8omUCkmGQIehsGZcJb5wQXAr_O8HA9jIyUE235pLoJ2qAUikxHU_qByhuR11k9acdz7MdfmWAYNAt5yrx4MmRRe64VqOZ-GC2M7tHQMIqd0aiI9ZD5s-HqOeG4w0oMpfduAxY4c70dUFU4UkyJpZ6BzVY9vJS7wblt_yKvWrKvgJbpIviXJUruYD3O3ER2i6kByereYcosHRcW6UT2O281WQKjH67iPJX2YeJpauOmqkpw&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 9
        },
        "shares": 4,
        "timestamp": "7 May at 10:27",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005763609503430?__xts__%5B0%5D=68.ARAWFDuzZej7frq7nZyEHST-gVkfipBY30xfESNuBFJWl6HCo1An8uVRdjOM7R9hmDRXI_hlUUGTJkWo_el379CrWSvG00GC6AqVDABFnfUg1xcWscJalWCOss3qjIr2jyAj0aef0cCjkTF37BobZ6NviQXBvbgz3or9PNY9mjSLboT9meNeKITk9F-o0imG11a8ZYiUneVuPUE74sDCaqwrxZ6QkMfqFA5M9tsKDsYBFmSZ1-YYLbTkSmzpOHMzgasVKyvm0mRIIziscM5Xd6GWK3ZakjCRB1E7LZtRTqaGMYr59G1SrpqSGSy9kIL9o5uiW474wCuFjDTMCo3m1BZh8g&__tn__=-R"
    },
    {
        "totalReactions": 11,
        "reactions": {
            "Like": 10,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "7 May at 01:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005355462877578?__xts__%5B0%5D=68.ARBdD-KUSNGUsr31x6AX2qraDwlZdITkJpf7Ek-h6Btve_W1kiHNJCloB_tN54n6nXQOXOSEG5WyoiNrVGpAtawZg68c3FE3y3k3Rk8bIaiTaA1nXEpAQD4Hmdjbpnzx6Aq9Bp5IiNahRVZHSJHeTaQbe-hWarF3YASSLZztuYNbFoRYB9mKQqRBYbT-etf8WW-VP3us94yCCTpV7r-u8lf9TIToSe9nephvuwqvLLMI2DnLkpzOc4UvE6T5Jy1DhpR2k1MsZPQz0Dlbp2hIzUp9FfsQ6s8nseTDbwERDYzbG7Kvtjmn7OVEwidClVg9aXG2Z50ApfWUqh_OuI76v2E8pQ&__tn__=-R"
    },
    {
        "totalReactions": 41,
        "reactions": {
            "Like": 33,
            "Love": 6,
            "Wow": 1,
            "Care": 1
        },
        "shares": 7,
        "timestamp": "6 May at 22:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005113776235080?__xts__%5B0%5D=68.ARBh2XnDouJ0KfpXfTOdJf73yPCJEExZYvNgYui0q6kKIA_YIWcSGx4_P2Xy3mi1H3LtJboTzXwhyPi8CnNuC-Ajcem2PshqDBeZqBfljoY6ipsRfKbD3Yozi7UZraJbrScE7KcJHjVyzR7XAUSbYAfF3Zg4Hqa0-olrqvHf-gX7-flaLmKZrzSdxzmz6npFpRRrk0XL2uo_4jGs7UcPpDI75cPZpQe7Cu6IXlHolkWrLcOGtYB-CcxspAAVFQ9k-BYCQEEqwqBkXz3mAJH-nh_ENBmUF3OGdWy7Qn5kNlluEaDmpnQhWB4CrmhUKPw77sezOkbzxBMQTpsNxLA2tG5Euw&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 3
        },
        "shares": 0,
        "timestamp": "6 May at 22:32",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005062626240195?__xts__%5B0%5D=68.ARCGVMkhZwIo7aZyDeglFPC21VOY4iCNzsMNcei3BoXsbqOW_s5jvY58_t5fNw7WN1s3fx3oO9I1zd4tjiJ10v8DpSs6RCbO8S1YyXoTX1AjvRWiO3C3v81d8EowCkszZBNMBmx7LIzcuB9Kixx0th2HHrT4MfkbvzNkIBlPh3ZaP5v8dtPOxjoCfwdnNGa8Npr_L8u_s1w42JxHldOshS8vqLteRW3Dr49SX7c3kaHXoWGGUcJU5GOTYQWXMpTl1XvTyelHmdmpC2BtShxHss5tpJ9zVaiCDrzlTBvlX0vi9rf_plGGtxEtJisxBuleqW6vZQ3Uzv6u0Fp1xln7DGyLHg&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 12
        },
        "shares": 0,
        "timestamp": "6 May at 21:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004974199582371?__xts__%5B0%5D=68.ARApXlQdaohpGBoHAWieSA5QFcbtupF9yIw21CxTAIlY20z4kjmN2v_Rb2jHaXAsbLQmpBvoLQhQl0EiMMM_2QaDhdqR6Aqp6NDN05kW0tfdSKLVB4_Cu2T4hkDE7KEk47HHcPj299a3vNgBs0g6xRK3jLODbf1BqdpyHR43t2p0r_nD6v18SU2dR8m6RmME1ZEy8igurL8WA3hC2AkPYfk4DvW4JcxCzBwSZ0mZYN9_3MO2Z9-J016xbrAAQtcaQoNxnJVHICNC35DFX_cDq0DtUpeQasgctbtx99oRgOXh7_XzAdDXkruq5G1d4ycZ3mgdXppUaeq9B3ByAfQ1GslH8w&__tn__=-R"
    },
    {
        "totalReactions": 416,
        "reactions": {
            "Care": 375,
            "Haha": 21,
            "Sad": 10,
            "Like": 8,
            "Love": 2
        },
        "shares": 4,
        "timestamp": "6 May at 21:06",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004902522922872?__xts__%5B0%5D=68.ARDYnrpmY76WQFQcTrGWqZtnhgh18efvIHur2tNVIuoEk8S0P71G6NpnUAZlAXvt8rpUYIJeSKSNC9NBcQBlwDPFCrL4O4SPViqeNRu8y3e92LAkEmre10KFgaUlw481iMsGGKzGy7FHO0cYsU7JGwFJ5V8VAFX3ZpwfvMLyeZ6I8iCvoaf_FTTFF7OUK8mnZcV2D2zDlBHsbuwpPao6p6DDiV4-aiVm-ytgySrfpa1vypSpod-1tMZKcAbQFzK6LD8eeDiTgpQ1Zx_vOU2SgV7Vb0caxiroBSVyWxJpvMp8muR1id1qImo7uEDwtlNmibFPuEUVYK058lVFhDpIUMyeVxLQKTb8QQ&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 3
        },
        "shares": 5,
        "timestamp": "6 May at 20:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004881876258270?__xts__%5B0%5D=68.ARDXOX-A62Y-W8znm4pKL-fIZaWAwmZeX5RpNvyP5zmXQ030tImUzkL8UiEhsXrzg31zsBHxZJKWl5fXXe_BvWs3ffccy5p6JL_Hi_L4mC_Np_a3vmaExl83GcnkwroAWB_RwjlTiBR0ucPQZaAjlPU04jVY8Q9iEwIWPsBcE3cokGGPhWJNqTXBNxdY47aPYhjsupPLwndMlhSsjrjTGsd_UF6YpSgCn5tftwfua43Qr0c6fNEVXUjUmGsdpP7pe_BnK88cFkgM0YeEpBZaK2W3VPMFcJCFUKctQS4HGbD6th9vTTO1Xn824f3_u8aYfbCL6_8oQLES7tJ_VEa9DEODng&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 2,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "6 May at 20:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004878509591940?__xts__%5B0%5D=68.ARBE6bOiWQ5oHRaCVKP08hRr_tPCUUXOQLKDo5EQjgZh2OsUbjYGvitClBTvXTUW5Aw4GOj_f7EXMXBh1fADYayiKpcj65R29IBvU4CAXPrPM8ou-6a2yE9-PT82jIacTCPFuTZPi3S5OJ3SoSN0tMsJnibU-XONjwfnP0N__q_BnePaBhFmIV1tznm0PFXrb1p3MU0u0Ab4B3EWTrj7V69Bf7pDKPeP0g5K8GBHWqB8abQXg4cD-N2gOIVVZXOmq6WgFe6E8yKSUVXzhC-4OlBNdrSJeH7__WH64Rpbhf5SGfxZxG2fsMjyLLYgr8Kucx6E7ixI3RV8ynyPxIKg8LQOQA&__tn__=-R"
    },
    {
        "totalReactions": 19,
        "reactions": {
            "Like": 16,
            "Love": 2,
            "Wow": 1
        },
        "shares": 10,
        "timestamp": "6 May at 19:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004704736275984?__xts__%5B0%5D=68.ARDLu_N8erJR91Gr5q-lgGd5Yv8dNpunJ2PK06GNaB8_EuAMEGpJo0IO-qeAiVd0jrwrlST8DvlDsM8gjfGr2a2IMZ6k7-G-2KxE9ZEmRqwbbKBd2n05ppzLvs8byKBXsztrK6tn7t2yYT5YAT7XCHw8zVDsv6Pq79-6TW0kpml92ac7req00ooN94hbcydIpwWiVnR2WK6Jr5Qm1KXfgU-yWgFh7BUYklA9Jr5mlHsgR7vzQVKvkviHCBI4iyoUf8e-hvJNbiMAK-ivOpf4cs4S4pOFEie6WxpSFwQigC3yOu3zJeqDSog_iSJZzg2pxVJnQCH6lQxhhKk9unkqrNZ0fg&__tn__=-R"
    },
    {
        "totalReactions": 253,
        "reactions": {
            "Like": 172,
            "Love": 73,
            "Wow": 5,
            "Care": 3
        },
        "shares": 21,
        "timestamp": "6 May at 18:26",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3004570699622721/?type=3&__xts__%5B0%5D=68.ARBZ8yOCCx_Q98LJOYh5nXNhrwzQXexCYwGuhDmpxtzTakpnzplBJabonyw4IxcO3pOy7vNGX5Z5FdMCh7Bkk4NEf3tBHs43bm2lOS9nXqeENhVyEPmUC8wizewL2LwgKPmv_XkYpw8VQk4v7rQ3xf8uTQuvUI3zsudu7tTsefgERzIaCRHy5q8TvqI54xt7zgm6N8H1o5RdvECA5jjOL0QT0pTZSFeqodqdLcmA-mVVqp030gS7L_KJnqevmgeSb3FTgi_uRLqe4runcTLPgQgK6NeTDgkoiPkoKz26PQTofnPfjcyJOJxqgzDrPpSONeZIzgWaZ4Pjoo5tUBe2W3tkWQ&__tn__=-R"
    },
    {
        "totalReactions": 12,
        "reactions": {
            "Like": 12
        },
        "shares": 7,
        "timestamp": "6 May at 17:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004508376295620?__xts__%5B0%5D=68.ARAEaWECnX5YCthFCxBFEoFDzO8eQkNtQUlruVdc90le5lRwcdQLmM8BU7u7dhRrVDybU7pFxf6mbiWK46kyzj8U-CfsFGbzTPkfBgr7kuZrRZcS_ddkVlwIoPI1YcZ1ECmy3TDZcpg-FuOelgiRX-H-JCUGoNqjV2eJNhbWAE7tM7XUPCJkbQrXVCbpfoLVsqF3eqCdCf2oqO36S_95IepXSqfojNdPQfj5MLpRteC5w_UBl8WkYrzEwAoXiLuFfn-1Ra1IZ84BG03kn85Ln1h1Q2yS6jq6S979mz6mLkmP1mraiaUyd1vfv8ZU9BUBnnOYD7MpD9f7_hUtY1ilWYze_A&__tn__=-R"
    },
    {
        "totalReactions": 15,
        "reactions": {
            "Like": 15
        },
        "shares": 0,
        "timestamp": "6 May at 17:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004462986300159?__xts__%5B0%5D=68.ARD6wWVyWSgRSLpOgDGYLNhM3HQ8yZHXzIxug0NQ4bVhFkjeLK0JBVrEa2I7JaDDaRekIy5JUC0VI0nnvJ-eX44HaiQzIl9jfibxey3O6AyTwZgrhKfttZYVFrGd-C6ctIBBdx73rBhdwU6bzbcn3TaeXPrnkMv9VcHUoeS9xTh0UnQqAuMohK8kQt8JcrIEct3VV9_G_rRwwaUatQl4gzudvj0HFgD0QZHdueG7M4HSSaeqUpU-WUX_RmmefckFTBoJUamoJk-mwolGq2mKQjeZu8Hz6iUaTgaUe6_cOSqjPJ5welvzqpzE77NnXQsjb3wkq921eE-B3JO5tzWiUp8EKw&__tn__=-R"
    },
    {
        "totalReactions": 1,
        "reactions": {
            "Like": 1
        },
        "shares": 0,
        "timestamp": "6 May at 16:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004408582972266?__xts__%5B0%5D=68.ARD8CaX0Ywm-60FCl2lPtYJ_jYJIRZnlXiZBejMxP-V-7qpuTrrd5ynSe0-5oIXk4jlGAYZVcawtD58snw4mgzx3yRRdF0J8AcD9e-3ck0HwVjMBGWbnzaiQh5gblTgDlq55MSLyXr6qBM6zA5WHomOArUQ63eq0sSuK7v7FME-bkSlQGFMFDuCT__Ma1wXx7WXSCnb4yeGKRUbyIaZ_oLsTk75l81LOfPHnFS6eGiJTF8bSAe4TLBL5yJwH888UYIjkrTcx2c0V6ENRgIgUZ5TQYgLUwIqINaAS5wqdD85RIjJB6QVLwt-l0s83KjLvgaT5N8xTfy8HfBNOv1gwPP-c2w&__tn__=-R"
    },
    {
        "totalReactions": 246,
        "reactions": {
            "Haha": 189,
            "Like": 49,
            "Love": 8
        },
        "shares": 64,
        "timestamp": "6 May at 16:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004356032977521?__xts__%5B0%5D=68.ARBevOmf6XMi2DuKGI2oGZCVaR5rK3y8ktEpmtDsjytBr--ENz6AWbTsgHImbWkZQ6fqqL2WR3GruQMlQuhpJ1iiPx4hiMHNl_Q6B73HQn-5ECHRBEVBdxdb6FcQmoW3KATOpG8Zex27Zlzmz4Fn5eT3L3auKvJRuypixQb7M4sNsPafUUawLhoOPccQY3KkiGcxPeChjuDG6qCwrkQAs2wGZE7nY9B1iRU_lNP7h2H1Ij7GqUosDHumfSbKnGVeJVZAfTRlLQARzEz5AAmbe8ivpc_95y-zzBUwbPC13VeE6cX7RsAgo2UdIXTzUzpJzgEUOW2sVh8OGRz-bhrMe12bXg&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Like": 9,
            "Haha": 5
        },
        "shares": 0,
        "timestamp": "6 May at 15:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004297282983396?__xts__%5B0%5D=68.ARDyX3jUJYVM_pCdgGxCdvzcbd2QCyoddYS9hhfSVG7anOJAllFdAlvCw26Qqb6jXYaf5QKKwSuExVq7jPft7bGRrHf0X6XKgA-ViPtDEKhBjRwueEUzdmDfbowW68-o9f8QKKvOgSR5y8W3faXRrWWsow_hO7-Cp90YEBXqDOA6OvsmoIIz5k-hKdFWIGafJC_Dyha1N7zl8a2hctjXEhxLFF9bSMxjg15Ztq4E9AG1xbCHznPTWa3aD6ZtGc0gQkdf3kycsztufiAz_hvnqnRNzAsswuVR1EE1LqLQx4GGyBAxfwiNkJ4GcastlIuy9iuzuKqVI9lqB6oDYghlZhV2rA&__tn__=-R"
    },
    {
        "totalReactions": 25,
        "reactions": {
            "Like": 14,
            "Love": 9,
            "Wow": 2
        },
        "shares": 5,
        "timestamp": "6 May at 15:00",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004228256323632?__xts__%5B0%5D=68.ARD6gOAzNiFwB0Gug89BPYYoafAKwZ7mIuZnJ6ZSs9VELBx3V0lquqjz9Ljt1DWgycPstehQvZaDx9iBIXQSjOLEJvCXxkE_nEtHU5xTBZp8xezfhH2XQLx7jTH9p9gLsRxVhhImvrQAZ3sOt0X7U5vuczR-734NulFP8HaWdTmpXB2i61MbkUx3S99f22BsPgPgcdVQ6IyWt70yLvkc9k3EqWNRWfZkLI4xPfCtA9NRY_8tpaatN3SKMUbTs1toAr1l9q49dh752d6Hc0ZWFyB4qAsT2wWfE32fjCanV9kjvGSLQIaFpNWa78mZwfpE2BAI-KedLuTHLf4HZ7Bpv191PQ&__tn__=-R"
    },
    {
        "totalReactions": 0,
        "reactions": [],
        "shares": 0,
        "timestamp": "6 May at 14:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004182102994914?__xts__%5B0%5D=68.ARAQ5zcaUAOC7J30AwTc8IMlvafGppfQ8aLmy3UFNhB7vPrc1E8wOwpkRLRMbpSvAIithaXunc7fX4u4qIz9aV7ScexUOmDgkxLKI3JanP8e14euNPwfQvgdPG5_ujiyQhID_BkPAU_Qwa5uMVSuoifCWPSO1dkknvrhDC4pcvjW7kW5jmWw5g5_tDfPm1Oizwiywy6jbNHyQ1nWiQ2CUPPpCddtMZKTT6U8gSroXOIX6boJE7fpkLcbGLPN4lKSuEo0SfvBmsebjdfXbGqCvrmUOoQ2OgJ9PHtysjsopUHqp-6j8T-eeaz8ZO9mFD4wK9YJ67cSVG454Pwqmbyl7rbsfA&__tn__=-R"
    },
    {
        "totalReactions": 7,
        "reactions": {
            "Like": 6,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "6 May at 14:03",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004140912999033?__xts__%5B0%5D=68.ARBHIvKnjdRa4gPJTWuA27BmRu7UM24Ny1zopFooZq0RJ1TGqQJNxBlzB8Rb9zCxEiTnYx61WSQy4w8OdVmCxjBZhYJqqM21SMCIkiSqjMPCQ12bLXt6o_xeyZTWCNNaLdmr4rDlcM0X0QQRfe1YnsQ_fujZI7u48Dxy0davmK7C4myj13t7bY9Lx2870CY8vfU4j4D4eYYoA5bNFHCeGoUjRXjrdkkx-IR74SCXsXfLGMUH8n2tAA7RrzuNk8hf_6VKfzlmd7FWwxex1zB02qFph6HdDoNjfrWZ5M26YQ8klEXGMCJsRhgv3PPrd7yyGe7xGrWbS7BySlb_bGSZJeLdKg&__tn__=-R"
    },
    {
        "totalReactions": 140,
        "reactions": {
            "Like": 112,
            "Love": 25,
            "Wow": 2,
            "Care": 1
        },
        "shares": 25,
        "timestamp": "6 May at 13:40",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004107963002328?__xts__%5B0%5D=68.ARDIpj-7EVxyZfsZMQGOP2QV8ywbXwboEyoBhqm65cJgefqrygaTtBR8Z9KrDLzsql5nWqg_sMcLfYSTuz_KG6RqlGwIO2NwY2EveZN8yQ3W7pJtOFZYWzmD40Fz371aTBhKL5suimylu-WRKLZ7Il2_j-5TI-UYYTZShkwp4gBbOoNScRmMHqYR1kGf-5uPRASRTNtnb1ZSxsOb4yb4GDuk3_j4Yjv0tzU7o9WfKwA8iWSS2ALJCQ_kEGHrNPMIbVqI5T_zCJOV55Ra4zY6bxCHshKVcaA0FZRYcOnUs4j5yr_c5hCRGu6g3kvSXD1FpfMsk_T-bNJX1YN-LqLsXCfLjA&__tn__=-R"
    },
    {
        "totalReactions": 34,
        "reactions": {
            "Like": 18,
            "Love": 14,
            "Wow": 2
        },
        "shares": 0,
        "timestamp": "6 May at 13:10",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004067979672993?__xts__%5B0%5D=68.ARCvijWk791ax750eOLq7b9CPy3Bh4rS070gJZipr5RVdoEgoLtqmrGhQUoPvw-dc41Z0wXT_8s0voILVlLpWQyIDfvYrWcK_Z7YFG7xpzyhsfw142SVz55yBw6EgDgcFJs3bxInN9Uqis5BKgsVqpzsDLw2Qo0ICb6atKxJiKjR6TFf_DO-tOgs4fdH3pM_kzCdl9xHLsVcNoG5j0SAOaPAdl_HdqA51Ry5OZTmL5tpqh-sa-PcDeb69LuR2hRpAxCHNk2IIQVj_JkJyeyGvCcjfACtBwU7IgPOmHBG73nQQPEtrfkXxeCkE1jiHcQuZiQina6SeAV_I1IQOkymvfnt1Q&__tn__=-R"
    },
    {
        "totalReactions": 4,
        "reactions": {
            "Like": 4
        },
        "shares": 0,
        "timestamp": "6 May at 12:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004028569676934?__xts__%5B0%5D=68.ARBIZyqofQFm4WSd2J7zC6yXEca2smnt28AA5HvRoz7OM7i88Gj1OULf9TZSyUVEE43ZVQL0KnC1JWY7eHczY1F3p-Q14RqpmOWmckRFa5ywixHH4S_YsAUPS5KDRSrz3WD6bkLg7rMvNcsDdHIp_ROCeTvgQdnTw8MafeKQ0-uH-7TXa11fSocA5EdOdrzFL_pw0rxm1t0quvXLVDYn2SQ_54NwkxcLjxIB1KA8EGxbBUujrztexHhdOlCRCyKmYr6uo2VbagfQgWjxBYjf2QhJmzd1vMV9VoBQYqpEVS8uyapKYlRigaHCpGNOPBDgjdUia4rxFRwlFhhLQenhnmPryg&__tn__=-R"
    },
    {
        "totalReactions": 15,
        "reactions": {
            "Like": 15
        },
        "shares": 3,
        "timestamp": "6 May at 12:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003999783013146?__xts__%5B0%5D=68.ARCGT0I4xfZazG2t99-3fWyhX1x0ADOv5to1hx_V8eoNuNzDwf1b_tCm5zCZGkE-BANe9LIthxMf8lrcZB48_2i4qvcTrilE1xtBimD3Xo6SOVFssNzCfU0PIRplH6mz5uqe1-WZF2MjnyrmyrYJ7QwGGOB5r8szvb0e7kKlejewWga29xguIf7Q4DCDyU7ahr5gjOaeA5XBtNIsF8kbMQfA-dw6J72rlwZdx10lep4D03MpG9WDpgSq26d0KWlVgd6RRnLRR-WUu2Ju7Nw_SaA-Dk12TCem4YLXxgyvj7Ye-6Adjh-AakIQqKKVwHajuCyQ3FNvfIeh2iy9Um_OvxwRYg&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 8,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "6 May at 11:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003101489769642?__xts__%5B0%5D=68.ARBcrcuolJQM8Wkcq9MxrvrwzNoDn0soBa03vypTcVyhp4CPvxK7DRM2YOSYLGUTDelBHPY5vwRDa3hSS8ZLM0wwFmLdFJoJCFjmp0To1c8fya5rQHSuP-EI0sobslbpZ4moje7XurWhiHMm3N7vOS2yL840XHtEkrbbiUtHesUu2zqwpbsvOsoQFS5xa99KUKfrGAZv0cEoMzvFbkxUcJu8-gxSF5sCT9bGn-T7K8_vDvkByqCqlbZ9OPPyEtLEdMkP1Gb9XAG2fBrtyNei5KGoVihN-W5dsvqNRRLiSXulu-xKpyQk6pzDJgnVbKAtLDPI2oiy_N_ncN7lU9xpBo__9w&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 9,
            "Care": 1
        },
        "shares": 0,
        "timestamp": "6 May at 11:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003097333103391?__xts__%5B0%5D=68.ARBLScVpAJkRto09YLVDpgEO28Y8iPpw3m4zOkVVX9O2aMbXKEMaCdpW6epUYZMi9grWxRpaqm6hCAq-zf_Fqpa-FNMBASczUm9yVpvxZY8-D556n2M5cUMBGMrezg4idtqLXdeNWEDKNLISvAUem5x7zQ2825WP3fRmFykWD21fPA-Xb-S8QRy2cervtBF_5WDNTrSYTR-9vQo3qUwRbiqS8_TBX5BOAMUUIBjNbRWkEbu1MoujIDe_RfFH0zfp-umCnPLsQWT-GaRRnI3zAYRR36gdeiH6IZQojy6RCYCE7jYwUgTEo9xEaK4G7BJIbii4Ja7C0Eea5YlOKlWQWsX2yQ&__tn__=-R"
    },
    {
        "totalReactions": 21,
        "reactions": {
            "Like": 18,
            "Love": 2,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "6 May at 11:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003094136437044?__xts__%5B0%5D=68.ARCX9-ixVkfz_gHRAWIXpWd7gr4fbm3Yz15jUw_jvJvPWPPgVYZNys39vNupZ4G0JgQrACM62yICVRIau8dO87zYBj3DbSmXftloUNMdAeCWdZIRh-FRencodx1RvZ-5AYzladQ1fBL_0ssnVc3MPfNRyPnyIQqWZzUQud-pIRfiwcJBxqlZwVBK0-ixx0DnHzI0nFPQYHymoYkwre-WMHf5WS6E4iTptYYsm-7ywr4tE7d03AED8eYGQlINtAJ1H7djAEZf3iCoGJLVY3YJHDzXUxUoPRWvfgpdnKMr3OVb3KBvLb10rygQg5tWibQ-R4-7ENzPtmwOWeYN_IGSz39oSQ&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 7,
            "Haha": 3
        },
        "shares": 0,
        "timestamp": "6 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003089073104217?__xts__%5B0%5D=68.ARAadhvlOnicFYb0GcsahXJN0QYlRp_7SuVWu_E3TlAS_aC2jB9wlM5s4dPalnZacFswiODHOl7A99HSUDAJIcR7xWgVb19BywdhfqVZb2dptohoYxbVGq-JjqJ7HCLY6dVqv8L9l0s9XDxA4ucg6OrVBZode99DrYO-_M8tlkZZ3Jl4MCkKP0IwNhxeiRAaMje9QMPPbsRRHyGCFBmxA9a9lsox_7eFIrPjnOZit0P3Q07Fs-NQv9T0WF8r1edgEu6M-HQRKLspi7FWcVMhngDqBQ_zbcQB7u92na0sFQAenAika--T7VmzG6NO0MMjuEuZEyavWEYXV75A4lLNKs8PBA&__tn__=-R"
    },
    {
        "totalReactions": 107,
        "reactions": {
            "Like": 80,
            "Wow": 14,
            "Love": 9,
            "Haha": 4
        },
        "shares": 6,
        "timestamp": "6 May at 10:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003087626437695?__xts__%5B0%5D=68.ARA8zCRIrbpniXoVQ46Q3WplH5E3j1kinucvoEWHS90UKHwThiiYqJyiyr24Rt7OtsZJIQrHgccvtmHWVg40tTzzW2oekCAGywgazlhScW-r0PR2nY1ZTiyJubgZCVqYd1fCYb4C79e53ID6Kntsid5B034YNHEi0IwHuABzmE_Upj8j9mrikzulH4hP2OhVt1zu9PtumrrRLZoz5LCOciPkPA53To7ttX2rvhuWdG5WuCZ9ND9ZeEcOnOXhhmNqjYbkA0l6rBPfHpCtvVQhcNwWhzC24_hBBN_2WAEI7QHN4Qc_vLm1PzXVbuwf5efbc_h9POPDb-xON-tljCKNTUsaNw&__tn__=-R"
    },
    {
        "totalReactions": 502,
        "reactions": {
            "Like": 446,
            "Care": 19,
            "Haha": 16,
            "Love": 11,
            "Wow": 10
        },
        "shares": 32,
        "timestamp": "6 May at 01:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003015849778206?__xts__%5B0%5D=68.ARBhErg1lmsml7LyuJZwzGbFM6-wCRBX_qTpy7-yV0mR4LtxSN5uFQSrm9pCJGtI_Uo5FGEQL-c02RuR85hsMVYndctUJQ80gQJBbsmY13cdUJh6JZZtd8niQkuXt0m5tDtEkLrH3E0JCvKUPWQkXk1B_LtpCkVFHwtTPnasNLhl3Od0FSRbT9LrTG1mjvCcrC845VE2c8bQf42ncvfqdl3CxHAxuHBCeB9PKt0vuTyhGbJ7qYIO7O8diCwu-46VIk-x2aP3mTNWtYG-RUsSSW781Ik1FX3sWtIztopHloetIX0JTUjHTxQIzssMFaoE1qk3PoY2o-PiV4zpDwdwcTPtSw&__tn__=-R"
    },
    {
        "totalReactions": 340,
        "reactions": {
            "Like": 291,
            "Haha": 22,
            "Love": 18,
            "Wow": 6,
            "Care": 3
        },
        "shares": 109,
        "timestamp": "5 May at 23:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002350399844751?__xts__%5B0%5D=68.ARDYokJq_HnCk7fBKOErYe-51nB31dn_PsfcKNCf9oY3-pWB1wJdsAGSkqJY8djHY43k_2zDdcXkFSCckVXmGgUpPYD0yK4DL8vMBdBGYgALoBtrwgam28Qpy8uNr7h3Y4fGEvHjZngG1V3UdsM9TF8CGX0BSpPK9P59fOHVVusfhLw9xUGOl6HjJsbJbCAWgAY0L1DHqb685zHXg3pz04EaSoj4bEwrwRPTbaIeKSuJEpIVilWlUI6ryBagakuStYOdnzugIaYRvewYgS80KI2n4sYzwIMSB-BQCDUqku7OQOwC274j08AZgTShMe8OZjeAqy5YFZEDcoxTda3MJte0ZA&__tn__=-R"
    },
    {
        "totalReactions": 16,
        "reactions": {
            "Like": 15,
            "Love": 1
        },
        "shares": 21,
        "timestamp": "5 May at 20:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002381473174977?__xts__%5B0%5D=68.ARDRVSsePJpPR6mUVZZPb7hnygu5rnJQQ5OnXPBMGSMEdPxX94bO7zSo-z9CFqFtFJDNgkQhSYDLb5FVR8Xh_015R6iiILMbYqKTFI-pyXWV009JAH1Rsp7ECmsO5TZCygfeJz_TY7zPjTN8ePlpwmfjl4Z0iE22V1dif9RdasAj-sJREoye0ZP1__Xc1aR1NBB4l_lwH2CsgTXMX5BEBDPlfAPTAgzxnePReNItOmqwClnHvvd5wyh7XTjyifzLKf-K4FgYoq3Z7eUZpkf-FKWTMyPsFoIs44WwC0DfFzK_Tk5V-BTuRs-XC35uBoBfwOlM8-UhMnbk8XSh0mNjIw9cxg&__tn__=-R"
    },
    {
        "totalReactions": 60,
        "reactions": {
            "Like": 45,
            "Love": 13,
            "Care": 2
        },
        "shares": 27,
        "timestamp": "5 May at 19:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002347726511685?__xts__%5B0%5D=68.ARC9XZ-EOwd1jxVWLYbte1prruQzWIOVdKHyYkw6jWj5zAJsdUcE01TJ9eg8Bc2orD2jQ1txOvy6rUHB5cVk8QP-l0C6LI33_L9yICIfQsRmBeXCg1fUCNaWiO1SdDZAkFr8LFPjJNySBNjNS1q8GYepGP1lIgCZwGGm8yuoEt6jwiRijq85aN1B3RhSRFD_3qtu6V3MsHbnv6iktD0gUwkZ_b_5jVN5RuMpM2ki0Xuv3LluK6wtcSdUur2oGuXKU3JxZyVV67waWT0aEc0R4H4GcKmSZwfqC9_w6Zmw41GRIgAEyYmiJ3UxeLnG12d_BZ8A8Vlm8V-TPcIssZTbTov8Xw&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 5,
            "Haha": 1
        },
        "shares": 0,
        "timestamp": "5 May at 19:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002336159846175?__xts__%5B0%5D=68.ARA6s3zamIm48PrGRgOsBkYn2el82F8OTbhJ6IsWF3Mfv0XILMz2qSh9EDLhVdDv2RqM9ZsRPoRCKYsb5VAO5WSQdvaU1v7CGYaCyZsHSEMM2oUeqBwVR0EaXca2OrLXNP8VCYUgpCiDg7bG9wVrkdeAnhcooJIR5MjwudumvpvXC9U3nkwUooKpo3GZ_kQddzRbCDKDO_SARRENg6AElzwUYHXztEQuQd5gGoAysyCYMIEm7xfmu4WpO4lZlKuWr3po-MTycXhRYkOiBASz3La_d3nFEXvDu5mF-rKiHnpT1Ec8cXldB7L6eY_bZJ1alBHM_-n8U2_804iBfR3RhJNiTQ&__tn__=-R"
    },
    {
        "totalReactions": 23,
        "reactions": {
            "Like": 23
        },
        "shares": 0,
        "timestamp": "5 May at 19:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002339103179214?__xts__%5B0%5D=68.ARDV7qnnjGIl3GHo9_ENzwZ4_V0KE_IH4Qh5ceVgC40X9ERkTF6MccqwE7tXLwF1KjkPL2wHMV6UQnO2ksMnDsRd0MnS4HmdtDx1M2Q8oBaW6OfVW1vduGjLP1x6KJQ-OfJ2sS2KYPrNWZ_KjYzf7qTyKmScoK7Sw1vX8MGxWkjf0kL7FSPjs_t1_ipsjQZb71mcE-ov4AXiWujtDt4K8K7esnNEUZotjkHfTckdkPyRaftLxmKuDoeBsNtZur5aB2Hohbp0KtoaBtzV6kHAEqWVYKdV8s0SeTX4TrLdxR_SF0JeaEYRdEsSS09bGY6uVxFxwY3lD0CqEu7KaUNtLDiG_g&__tn__=-R"
    },
    {
        "totalReactions": 14,
        "reactions": {
            "Haha": 7,
            "Like": 4,
            "Wow": 1,
            "Care": 1,
            "Angry": 1
        },
        "shares": 0,
        "timestamp": "5 May at 18:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002333893179735?__xts__%5B0%5D=68.ARAzNQ3CTCvKJiDJzyEiDiuW2CqEIxc4jWzODapcHRaa9QVa94_3_bfGpJU_LVr3wA7X7qndE1W3X9aHFPl2ZxlY-YiJ1F6GlCW4Mgzuo_KTSC5C5KGtCPJMog3mSNx_qTXgSKvVEeuAHLeNGWESqpoVUYkmZycjiYsxPS42Sy0kU6458veCX1XQ-psTLd-nT2LePc-Tox8YkUAQ3vU6CGwjpHSU3aUtHwX-MEWV5Njz0CYSr4OioBvSNBDf07QpYCcuMJ0z9Um3Haz4-YRQMhqrskw73QRL5k6QEzbUkWMmazI3uEHzr650G99CTVxVj00OIey7hu9fhKmtc1_v6N8DAQ&__tn__=-R"
    },
    {
        "totalReactions": 23,
        "reactions": {
            "Like": 17,
            "Love": 3,
            "Wow": 3
        },
        "shares": 0,
        "timestamp": "5 May at 18:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002303869849404?__xts__%5B0%5D=68.ARA4Tgu5lVJzkUj3Si3ntvDZb4z06C_DZcIFaYALD1j_oTZtMcyEAU5RoKb7oo7gmP5mydO-UZkJUWemyUoyLzWdW-6yCqLq8_AkVM7PA-W6z4xYc-3XJcqj7hZFIGq_YxFBoDlXs1PtVj7BD5fsxwlkvjuFMivhEcMIm3edmPuKV2Md_AzgWGdvwhSrJKBEfl1-ZNh2v-eq82NLXHBbQTQsSACMN9GxDCtc-BfExa9EQGrdVX6A4bSwZmIDdLAOQMcXQK7DWqfvwr4Ok_QJRFMbhyd4XGnlTczGMn3Jr2MWX7x0mIOWfYf182-QFV0KRn7r8TvzVZTrjbER5dpULTyseQ&__tn__=-R"
    },
    {
        "totalReactions": 9,
        "reactions": {
            "Like": 7,
            "Love": 1,
            "Care": 1
        },
        "shares": 2,
        "timestamp": "5 May at 18:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002262446520213?__xts__%5B0%5D=68.ARClDpiz9gtFoYRDSelnAwcQ_3qz2vZHoIEhNEIctE_MqUKPvxkt5aRczyq9kvrjcQDyepkBFXnL800kxrmT3mAgoSKklTt1TpuH1hYG3sIwi6Jk2toG6NzqjCx9fPfOZbGul8r7x1VK57Tyg-k9So6qWGQ6CbKwAjHeoEbYds3boH1k5_u-KDzH7ZSCo9SzRMvbgRMcr-mJ64V8K7an-a04V-CcqAY3lojSlJq6K8bpYZOGlH33PuX-8MfcOqknGjdI5oSVXX-O_e12njQJwkUQHZH_psU-ZmUKTyh23fVdjALQo9VRIMyanFO2DYppxFL3h0tY9FCZ1zkhwDO2tMTbJw&__tn__=-R"
    },
    {
        "totalReactions": 600,
        "reactions": {
            "Like": 455,
            "Love": 78,
            "Care": 58,
            "Wow": 9
        },
        "shares": 18,
        "timestamp": "5 May at 17:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002224323190692?__xts__%5B0%5D=68.ARAJPaIEHnTJjv3nDePupsp0noR_3hE8HLfbDfK5a53D5wdKdW6_W8dGgHRnLX0gA2_wsdrakMvtUJa1MwHuBWi98WbOhHTDxvs7omVoKMUS3FVSH0VbXvSZ4hisxIYc48xhxwdSbxGBbgPwjaJFcnAMwvOsXhLoT-egidsDub2RJBlsQYy7632GY6igPwwHrAzC-kQK1-sTehU8th2SEqumzknbgu_rwqD6Po_RHfYUAy95js-wy6DRTzdCjpCnmFzVvxfRXyEInvgTy4VckDoWTOw1uW1a2Sf9-UDebspVgqrkapxsy6lpWVyEWATaG-7yewdyxB4NG-3LVeV5CI4yyA&__tn__=-R"
    },
    {
        "totalReactions": 600,
        "reactions": {
            "Like": 455,
            "Love": 78,
            "Care": 58,
            "Wow": 9
        },
        "shares": 26,
        "timestamp": "5 May at 17:29",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3002177073195417/?type=3&__xts__%5B0%5D=68.ARCAij4YE3a45yPBAQN85zkseuTFhiJKgUsyDpTsWJ3LDjnUFXyKhZOQ6we9jvgn5wPfBGhU77yjmOZH6QZ9hJmheicnQsyGHck_mA1uigChDptCEJRiZaB9glZB4ITxlLpUa1iafn_YpJDOWjwBmrlbGpxJnthvMADrXtm0jG-2c0RMl3TJD2e8w7QA3bMzz6Ozay7rV187t20zL68g18yEdQdARjIyfQ-G-8ual4szvXRt0GWEcHGPoKgKscwoEifNh1Kh_PbKGpI9LFRCKl7n_ZaMHCtt2rV-7cK2yGiAnJLRufRFKP4228voMo3k7PmV74Hk-lXUBPaS96v3roe3ig&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 5,
            "Sad": 1
        },
        "shares": 86,
        "timestamp": "5 May at 17:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002168549862936?__xts__%5B0%5D=68.ARBBXGavVcdzCIHspBYT80IzekTmEUiX0vimpTRZm6tOZYmYUJ7-eAUYGeWWUBoHHYV5IhkvoYB6uVxkOm4PRs2nW-ZZlbe4kqEhw6fqTIWtcJ4rP_IrDFEpxq4XRQae1ggJ305ghFtWI_mOmc6vUJrFIyxnEhDmGwUxPUg9WVox-W5_ADIBoELDv9sxgzVXmswQU2OLXSL2LYjL10aZxFmFwNCSYrAUziRs3isASb2Fwnab2Rj8pu8g7gjfytJkAG5lpk0bpWBCDKMWumr9XReg1JJICiAp2vCB8Nl0FWP46ZY6wPmjUqpaD7qQdIWQaGfGdeRHLEbddDwgO7x9rR0DgQ&__tn__=-R"
    },
    {
        "totalReactions": 6,
        "reactions": {
            "Like": 5,
            "Sad": 1
        },
        "shares": 0,
        "timestamp": "5 May at 16:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002110796535378?__xts__%5B0%5D=68.ARAu3k6vrLmodOxxuLVElnkvtpQorn2ikwoATuVuqIAU0V6OM3uoRU0PEzetkE47p1G7QWCWjrrRRD7aZimzHLUbCsLUHoou_A1xUhs9WfluIDiv_VJ2d3Z9Ko6HgZK4gVMx8Q8FfY8vdrbgB7pAqBrFKTOwfJusS9tfGtmxGycLbaHm5zo34Kk01i0GWsrF1QOom-7ZzNQ2uAag61GK4BzF3mFAL4TwfRh6z0BZ-UQ_jANbZuy91A9eqD9j57YBfoQ0oYpaoQztxdEe_0VwMzfH2yIzImefMEL8oefIGT1yzLkFxnQTjuDXG7Cl_eKTn771mB5yB9kqmX9qyIGK_PXOrg&__tn__=-R"
    },
    {
        "totalReactions": 70,
        "reactions": {
            "Like": 44,
            "Love": 20,
            "Haha": 3,
            "Care": 3
        },
        "shares": 12,
        "timestamp": "5 May at 16:26",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002069786539479?__xts__%5B0%5D=68.ARCtBltH_M-SvaZf8oh3AwITwWXI6ee2uN3BOcVvWmEZw5uDlqVaGuSTMu3Wz3Ols2u8U7JqH2lnCj9ws8mKlYGk_Gj21YHoI6ZY6ok2jA-NNs8WI8w_qlB8s3-AuT3oxw5dA9kHxACuk5H-yPBkCg8xO1hPIaoEmCdSN6su6WLMib9iBCOLIs3jK3d-NL74XV_syw9-h1Tnk6aH_9zvfE3r5NzTpRmJYwfeDGTkfVifsSbi4yr-CSlW5ZmDxOHcnACt9BP9xAnrADzEEk_wxuYNszl6EqX8en2naN_fKWMQKjl_gltZjJSKX1QVbibYGI0V1uACYUPKAprt2eljQW2g8g&__tn__=-R"
    },
    {
        "totalReactions": 70,
        "reactions": {
            "Like": 44,
            "Love": 20,
            "Haha": 3,
            "Care": 3
        },
        "shares": 0,
        "timestamp": "5 May at 16:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002038569875934?__xts__%5B0%5D=68.ARDLFFZme9I803HZBLPJ8p5BSVu-69PsGyVEzjFom5x03juSri0S50k5S77UnevH_NaXKdINWA2IZ5VuISJLLkzUc-Y4BeqdrF5zVqYMmscHBi4PWcwqrd_8h0bhYxTaroa6ULApBDJ77kB7ReIM0BWWyCGc_QT_MSVymAs7JXKDeqbnyM7CmHvqX6FTxUy29ct7VeJL6hd3qOxGBYPdXwCBagHpGFxBjwj9AnLHwGFEoGS16U_glWR2orckLdplcdElA_P2rGufRNhdtbG3Mkna8apxUgbCUX4YsBW4MA_5K_rbqvQ6MUhHtwE5uXhOzTUWa-shBWeoBncfrSAokyLMiw&__tn__=-R"
    },
    {
        "totalReactions": 34,
        "reactions": {
            "Like": 28,
            "Love": 4,
            "Wow": 1,
            "Care": 1
        },
        "shares": 6,
        "timestamp": "5 May at 15:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001977303215394?__xts__%5B0%5D=68.ARBs88ooUNu3Q9l8Bmun1Q1a5_5A6JsAMTtXMBC2aetMa9H8t8T3KhA-AhrOcNIwbct6V6nR2M4Ka1djEuU50GOe0nEq_Hap5bgtKMNIrQW5n2C4TDeC-9J5gUmbJetEyuP8pQK9b20p3kT4Sxo_3spkdWHP1IFGCO3-uH_vRfXYlOH0TveP46ckUE8G66N21abrqZd-9zRzueNCPCA8_P2lO6OPSEHO9GE8Uh4cWylbb-bjd1-Zb-z18OZPOVF0XTZpk0Z1e9rNQ_GK71gsfk7m0QibBPYw1DxBmkiAdJpvDifBon0MWDJv7EI_4AhokdyL-SOEVSGoNBWIf7gp5uWb0A&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 13,
            "Love": 5
        },
        "shares": 3,
        "timestamp": "5 May at 15:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001922909887500?__xts__%5B0%5D=68.ARCsDcFRE3EMu48QWCiN0vrZJBCZFQHxDJZFQAC7My_aPdQfXj83kq6WYpzyLmTVY_rsZBB27qkn-BIGWttG_nrMwY6iAvfh6sfV_IvJrIYBeRmTfcyjHRRkdB0uHC21ucmR-H7KUtHjpfYRV0yVyZzHyJXehcs-7oP47yFA9dIicQsSxwsucK3i5210mSWEv7uNJz_V7Jr3_cQVr38sqo8H_1Qx_xBHNQ4Zj_tiBEr4mOkCvUnZ6jthf9zlgw_oSHnOZ1diVJ8wkxDczi9e-rle5HD9QPqfqKDrjx8gCrCAfvTiAKH8hFpbCLF3y4_xNE8W6c7X5D_i7JOV-VH3JNnbNA&__tn__=-R"
    },
    {
        "totalReactions": 18,
        "reactions": {
            "Like": 13,
            "Love": 5
        },
        "shares": 3,
        "timestamp": "5 May at 14:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001893019890489?__xts__%5B0%5D=68.ARDCrd6su3fpTj7y9NF2w3klhdf_sdoNFE7nsHsMwBstag3HHEioJj4ESmVssubIJrAIQteLEfR3115-eWiSHJP8dQdn_wpqU-jgSuQx5eHV28zeKJSy1268hv44--6Qh7raRhF72NwYPwitGsFLXaAj21oqV3GMgiBgL8YDHPTIRE8xz3LSowJ4MnIGnP2dxt-bRGoYdzvUpoGK_zzfAcfleoQiseDcRHEgBtN-w1wTiYjDJ6CgrCGmdkmwaCpC42y1cpbUZfYNyzrXCFkIRk4LZfSy5tSGHDZKS0ohIiiqlg9iiGUnHO9oEDT9D-_Z0nHRR4HA8ZNYuos8lbaqLcMPDA&__tn__=-R"
    },
    {
        "totalReactions": 143,
        "reactions": {
            "Like": 110,
            "Love": 18,
            "Wow": 14,
            "Care": 1
        },
        "shares": 8,
        "timestamp": "5 May at 14:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001849096561548?__xts__%5B0%5D=68.ARCZ4fpX_cXeZH0tFucrDWR9fsKbjm6ooKDpgbizvcaMd1MawjWeMFSiPxXdHuPWb4gaG6uuA3hwdYKNZxhqXKPF5yimO6JC-LgtddiZLKFjvr2zIEi4XNigw6i4ldLkYTb1G-7OZuxHr6KONeRgUe8NWs8a__Tlfmlfcl_Q1xnPWX9Rga3rJyk-6V9zrZlfviZIFhXhocIj9uQLvUIo_9GlPzmvkFpKNyvOws0oWdLqaRN0HYjkPEVU8xTFx_nbJON4dA05kFm6XnrjfVBK_edYD9WCxE1VlCZOIOLevZc9ri9geB6vKq5OssSX-UW2TlCZFlbkFDQRkFR-GFyqhrQo7A&__tn__=-R"
    },
    {
        "totalReactions": 143,
        "reactions": {
            "Like": 110,
            "Love": 18,
            "Wow": 14,
            "Care": 1
        },
        "shares": 15,
        "timestamp": "5 May at 13:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001815956564862?__xts__%5B0%5D=68.ARBpqOzehLW94S_7TXRdSyZa9qAnd05ZnQ8pDTTMzKa6N2kQW7TAvym22NDQ8ixBXAb8tMGjQnOmL_HvksSdpGyDgxiNpov0_uk-tPd8SwfccPD36C20ZzDSFJ5aIeoKPzLbb-kCStAPZg3np4eYD7YRV7VpHY7uUmu7NHWPwHF132TMUZRBGySj1qHbN5u0IJ72dH5TcE3_MzbqOpDFHEd7bvpVi-rO9mH4irN7Crv4meLa4gea78UG8WFXtG5sSzEL3WWd9gqJVMlPFd3mlk4YOZxUTCLF7HzzTIXRAreo6elqEap3toVxQhYJzT1Y74WUj6sGT6brE535VjHtcXrTXQ&__tn__=-R"
    },
    {
        "totalReactions": 3,
        "reactions": {
            "Like": 3
        },
        "shares": 0,
        "timestamp": "5 May at 13:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001742796572178?__xts__%5B0%5D=68.ARCs1hemrgm68Zr0ikiAAkL4UZcN1msFZALdaWYpnVPgMd6XMBZCbPbhP1yHywongcBE6No_iBj_GTlbvk-BrXKqt2_CU2E4c9Nb7IgXExE9xLT47I_hHaqypmfk76DHgx9jim_zEazW1BQPX61i_WlTlvspnB0Ra7_hU-oEgRneu-xpOThbbIb4khyvyUyH8Tqn4tIDw1jSB18jwBmOUu1cxg6s_axe8QEtpYnnOmlp6NocH9pHWZjD07ikYHvyg5O_wjLbs7mYUf5mMafnf54Fd_ErBw6__5qc7qEG8w3dIF0l2CVTCtbYrPDrgXbSVrpfr59R5ZCD1O4SSNgU0rYfsg&__tn__=-R"
    },
    {
        "totalReactions": 51,
        "reactions": {
            "Like": 42,
            "Love": 9
        },
        "shares": 0,
        "timestamp": "5 May at 12:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001729016573556?__xts__%5B0%5D=68.ARAJYaldIoR5XuWfoWur0sREmTnP-MPAuTsCc99As-IzAFIye1x5mnzR50XgyNwvzi0He4k26EiEXNYgtkKaohQM2ddOjLd9DrGI9V2guRg2VaAw1-bcH9rHFvcA6g2s6WWofyGUaF4JMVNrPZifM7P0H73Ula7ii3yX9COgvzdQSDEUBnaMXBitoKgYDB1gN1oJElf6Gtt6Ozb2sG61TAELJvaH2kVxZoN4gT6QGph7V_UimmBfj6Zxbm2nih0ubVjp0BMM3LBaG607pnwCkMgpH7CArb--i15FKKHOiONbi_xc6XB8PyFvBnMm0-yMXkxFYkzdZgpi309lespAakmqlQ&__tn__=-R"
    },
    {
        "totalReactions": 51,
        "reactions": {
            "Like": 42,
            "Love": 9
        },
        "shares": 0,
        "timestamp": "5 May at 12:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001681163245008?__xts__%5B0%5D=68.ARBXwMS-xle9GFemD9dOcdS0r5reDP2DGE8EtUwvpfewBy6FAkOio5J6RMBT5aEz3TgV_epnOD4t2OdP7OnnCMCmQXxeIYru4B78zN7-tkYnl0QA8MPu7Ddit0UqXT5Us4rgl4HZuZMrHh-iZ42DI9yZLDSLQF9i9aYDBaU2ZeRbd_nJ5NfhHfBhbvvPwR6mVgY5vCFT6Be3Um0cn29j0OANY3VqqFX5qdflu4lXD263f0ovKfztjDy_u9ykh3sK1bhyclSRFcqAWovwf_2UifuUAeNOejFFotgQ7JTh-Npro7KAgy-A8-AnUfpZKsGUvU9ITIKIIP4o3IHxLGQSrgM62A&__tn__=-R"
    },
    {
        "totalReactions": 5,
        "reactions": {
            "Like": 5
        },
        "shares": 0,
        "timestamp": "5 May at 11:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001625266583931?__xts__%5B0%5D=68.ARA7Imqu4T9BNGLHUjb19s8S0qNRNyonca1kT_4O3Z_cvYbF0cnEL-oQ8aAblZrIWkyhy82k9uT4GIjUh6R6wqR3afNeA2RPqachKfcrzoUpe8fJmo9_Sbgpqr6wXZusZmK_3UV7TxVjIF2VnST5cbhUkeNjkcE0fRqJAIO1jw9T1d7HLijwTF_FkS0Gcxld3-ps6Q-0qA6aU26WP3gHKAK42SpkR_UKmmDzLM-RfS2pQromdtxXrwb8TzrnX_hn3PMvLqblu1alMq1kScAiXzFw5pYPiuOZvQgdqNHDzm3banob7y2Y8thglybW3KFvYv9lAkIhn_gPWF2XAZVW3eHw9Q&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 10
        },
        "shares": 0,
        "timestamp": "5 May at 10:49",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000801816666276?__xts__%5B0%5D=68.ARCZVuci3SqNPTO-F9EzIleL92rtJLlem8p0LkXU1u0rpV4IqCVH79y91t8XMJOVx-4fg1f5-3FdEUHSjgtlHNQrMybBkg2cc76kpQzwBG1BgE47RPudj5EIR564sJyGzrMiVFuvGzA79_NykbXIZbQK0DsPffqVm-owP0m9DuF8gcL10SIqUTDbPmsLZpcquaHig_Ao8ik344PRI9iSALFe81lL9Yp_U_Nhn7lKlkynIrPqfdAsWPlerZBLbudfR3HNGmAswldxj5WPtyT_tXR_DWicmtwGdo8YQtsdMkjJFEpfIqWKKRwttHSbW-5qX3Xq1ZiHpm_NVdYfTiwXJmRcyw&__tn__=-R"
    },
    {
        "totalReactions": 10,
        "reactions": {
            "Like": 9,
            "Love": 1
        },
        "shares": 0,
        "timestamp": "5 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000791306667327?__xts__%5B0%5D=68.ARBK5TfUVoRsf9ZvE6r4j2YVKFWlaj-L5DckhjgktPyji9lLOPHR_RpOIxZiXd1gSSY1uAKXXnfGdDD1buUmCSAlVdKLfgC-Peq_aEmzIdSGOplMKxL87nQPjtZQFpQQ0zWMvlqzI1sadITmo1VQ5AmcdNKQ38jQFU55slmNNbE_Waxzfw4FuRSFOIxen3ZV5XE6j0y4Zk8f5jXBzT03ZH7nABbjLyziE-tzSOrsFHGFuQSIZn9uiBLfRsfCdF3nFWq8x5EQBq0C1xT6c33AHCE0e_FDRefj2ve6B8-owhNj3tIXgS00fCuTNIh4y25KPq5APo3eCLXs4LJtvV9p1Nd8Ig&__tn__=-R"
    },
    {
        "totalReactions": 349,
        "reactions": {
            "Like": 303,
            "Love": 32,
            "Care": 12,
            "Haha": 1,
            "Wow": 1
        },
        "shares": 22,
        "timestamp": "4 May at 23:42",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3000442296702228/?type=3&__xts__%5B0%5D=68.ARBX9bhWLka7QdjVyRqcCYuEp6x5d3DI5z6Go0U4d1eVy2da4W-bRqWHm7h9i_LCSYQ8wzAjbYt8A1RYgT0Cq2kLNDaE2Pem_gUvhsh_v9-KsylFxXIhuMQEbynoDZcYKUNd5UkAcNqr-go-j0HtAXamMYfB4_7vg_0w4UMhiLHmtxEli2J-U4RsTrcUSmY7jR3WWOzgzHoKaYpQCXPYfvQPLqnSXMaeIIcwT_EV-DXbBRBAUWef4FYrnfPCsYwCDpbRIdc5Xdom3Ad4zozVmJexaJpo8ck077PnmxE32tTT2MWgBYeL3mlSc70O9YQQhyXpHMR9AAtuH0t3pMJ22P8NJQ&__tn__=-R"
    },
    {
        "totalReactions": 142,
        "reactions": {
            "Like": 85,
            "Love": 54,
            "Care": 3
        },
        "shares": 7,
        "timestamp": "4 May at 23:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000423196704138?__xts__%5B0%5D=68.ARCrhjnr6W5oNqEf4KzCrWixDa0TWz2pUgHcNR0kXCCC4V3IoW98ud4SA72koCIt9AXfx49EJs5SopPLO-QPwS0FdpZtP2dZubUzaxPB8AeqsEHHga8-LHzrU3tY7zM-wNHDBzruWLPwTzTHeCMzR2EkAf98LxJ5pcCULzVoPtdPD4wMHFv7kdGEhW9B0TMc32TcR5WKeBYCdeV0vb4M9d-r9tLOwqgP8J3j4B6rVK-FVpWw-c8mUGS4_raDnvQzxHLGseRgk--l_m6LaQJkxd6nsHJjOcgZmg3PS71-WVHOfV87edLlLX6CoCz5eF0RxNxzfP0C6mUm9T8DxAs7gHZbXg&__tn__=-R"
    }
];


const comments = [
    {
        "totalReactions": 0,
        "shares": 16,
        "timestamp": "2 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3039157899497334?__xts__%5B0%5D=68.ARBoKGGcZiQ6-rJ4YbGR7hPfv9YVwxkdWKzRW7z3RC3UBgBvIJ0MfIsVxgAZJJJH1F794fxM2NsNKU1rKdhl57SI2EX7L60mj4tlmxvZBlGuycG1b1hvnySYJnPU6sqmugpHwu6LdhyPQXbKczD_sfxdbj7gEZCafgI3pTsFIHbVnbotpKcHJ9XDBpkm6DlyYsX02SoEX30eQ6eYYeMA4q9C8CHbraE5oZjcUAYg-ji1EdQnqPESgTub8FlB0usH4DjTGN7wOk2mJBOF3DFBFxChDY2YOSMidZfLZowmODbhWcKwT3Cux6Ln4DcQExFj-MjxHWB0q0UG_oLYZDHFJ9W1Hg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 35,
        "timestamp": "3 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3039024076177383/?type=3&__xts__%5B0%5D=68.ARADFqYOiRATkRudcAInfUPhTdBztoRplbZ49u4tfYaTYy26S72-bONhQvxy-Sos8_CL0qfUeDJb63mAcKzJqzt9rNOOlD9rlkvKKgZSW938SYvwFiSF0iFE44qc24TRGhdeamMNIev9D2lVe_YuZUcY51uZpUR9Ln_Josoy3cbRGytmG8ATcABiAOFmgBVvEUMyLGy9EtwI5b5nFGQWaHyvV1vrzlc3-HKWRt_aX2LOCeiVVU5FhAEvhZaKM1-vKLRBskMyr8OD3oHXmtFnSxmT1VZiYwmkE10rGy9IU197Xf17JV4vZqrIscuVJllr6hlGoNb08YQqAjEGgR-9_EmlpQ&__tn__=-R",
        "comments": "32"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "3 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3039005482845909/?type=3&__xts__%5B0%5D=68.ARAPIeImcyi1PimMvgydZTuuh8MTRGeaqO_qB-8ZX0LN2moYvqXj9YZy7vqeEMnVPY9K8jL2n8ZdUEhkXrxxrbWRtERj92aPEus3P4Y97vo0K4ejpZO0Db43i2iMTAcJOQ1aiUS_dS_zQttGYQ7jJkP8jkrowf8KBkefiExsPE9LgEgUYRS5sDD7Ls-AsNjoWRYBiyYccBrnByo8QCbPJWqah0CGPhlOGwRt5NK7KOPnowZKru6foMASVylpQ6gb5s5eh3N6U2yFQeu10uSRXZSJbXbM94zpG-4V_C_q6k11mg0eLpU00uGQK_f6b8eKqqx0Lui_c3i1q3B2wowqsY_Cnw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "4 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3038895702856887/?type=3&__xts__%5B0%5D=68.ARAw_cLqm_Mv4AOLmY1Pxjpt9PaV9JytkFdNCklEQD_N5vJ5VcKvVc7_r5u_w3T9eMJju6Ooh3Y2rq8qXYGz15U9FEuG2Qt0etAEqxwDzuAwrgkjPi4MmGc_5lWl_ayZHsp91JyyUmCvx5taqsP7nFBWQ1WWDTXubJM_lsgFWjnk_QLYo0e47D54TqaW4Kb9v8na9EJbwBH6_k_pit222N1z9Cix7pixpJjZ7U9kOmOq1u4tgcbFewJENs2YkKTBVYlBxTbI8Y8tpShWRHRxlrnjnGdXikKyrESjlzfQiRcpVHuvTZ0JLGEoH8T8htFOldhdW_W_y-KstLL21R7M5Th3OA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038595759553548?__xts__%5B0%5D=68.ARCN3Rtpf2aM71ZKjlo47aqe00gds4AjIOAqE6zKMHU4cFCBZWArxIVqvly1hD3Ln1m8YLnJ2fuovw4mpm3YA9wAeeCGTDWjI2zt1UP1aRxmdzxT-JuGZYYnBuNh1juTx6tJkc4KhkWsLdJ-owCAjYJQc_JIL5c1HZe2UMN05nPl4YFaZsCflgbghUirRiunKfJsV3fbutlxUfNRmp-CMESZMvd2-SCBD9HeTpA7cax-VASj4kI15jcWaq1_v-fzxXcVr-FTgmhlBy0rf6gw_KTOyS7x5hq4JQ8JD14jxRiR9CdcZDu8FFD84-28kJwFVw2vox2zj7msYVCDIrrkNXO7og&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "7 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038542036225587?__xts__%5B0%5D=68.ARDsJIJsgY0RnFTS6omTMDidL6VlSOUn2ja7RJ5vEVibU_ZjDM-egqva50Y210LjpA0Nge5VBDVVnrWbh59aDZat3ceMqmv9gcUeZMelsuDriFVZ_Hbk8oYH1VlhlfWiuyHW_-o3K1wP9RXAQbh5Bobu7auMDPgOZAJaqyedbejU8si1xNcf00nDeLpHcndtUszgnrCRcILegEUTdH55NoUQzrNC8fDt7HKKovPfSDbXJhy4fWRyhr-bSdOIYppmBbAWgm7rsDjspjwgKcGf89I_264e5GTKbVZE65tuv1CRAH-hSRALPSuQMiJUi9fPHMhTYSo6R3f59OSeXSuwQqgeDg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "8 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038500092896448?__xts__%5B0%5D=68.ARCklqhCzN_m79MgWnls64hifp6ua7HhzoMcmEid7hgrWqzT1X-iIbc7OPpl8m_hZLfj_JmlLVnxfASUTpSG4X5nJLLI-a6bD_mkswtQv4Y2OP1uBSHAO-cYnIDrlqlxKn4K-zuhNZz0pyOVbrqI4RL1JchRjTqOKLDQ3tIQkMFcPgCCG_9iKeQlBVvPtyFpKm6S8eiqhxXNDlLT0jMRjMqipVhMk4SU1uGLb4h3tRO6kQr_21LJvXmHRNb-OTkBId4wN0Q87hjtFWEsN0y0pnU2h17T0xDLgqSW-6tD0CzydvkdX9XPfo9ShkI_CZnEXVXBe3T1_tW4-hrFlUKUOdu_LA&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038448412901616?__xts__%5B0%5D=68.ARD34f3xxgTivVaJK7lbSbUpPE9GC-5Bi7g1vkRLIXHTeyS0RxXL2jBn5MhY2k91VLD3_67MPFx_3jCaOgRF-lPCvldltbluJF7Z-cfjOTXxr7GotDywu-4NdTbBdfmqrTA-KiXR4itj_u8ox0KubX-aUJaCP9-Ecf8Z4jGucxZiZtW8eZ71tzE9WXneZyjI9zhpZY4ZZI0QHZoYQ9UnEoBeg75e387unSbn2uxqGWCPLXHZPx3_rrmaIInLrpSMb9QDLCp5YIUegNSOZr0vGtAMzQtnBHS6zpdkJlzyVKvSEhVQ4BAAXk5vx5QjUiOPObNrwZemGHlcPdUOsoN50AwfAg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "9 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038380836241707?__xts__%5B0%5D=68.ARCtR_-ZtKvw-No8UFH_HI8TlEPrN43VG1L3S_BPDcU4C2c49XXPZyX85q6cziW1xj6INA1D6dcOlU6ibWwRkET3IYoYTv2lqoQ5msIExvHuXpTGoB9cgdvXZ7qOQIdrp4vLpqL9sdhnuWsGtFa3pVNoCgoggjig6TyFax4P1qR-3gny9ftmptpNLYxJlL8XkngRMklhaz5J0HsXSMaOzW6R-JIjAyeUro5tExVV8eZAgI5fudVVY0kDvJ0b2XZYb9v2-6_JDmo_8k6Lc54WtVF4JyajQrF7wz05DrpT44vCuPnub6ecn-6ecxG-tHAI2J7TQJLzdZpmodA-dFgGHQzgcg&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "9 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038320966247694?__xts__%5B0%5D=68.ARCQhzDKQ73SV0adIr_ImljLr5PwZRGV4SNzzj9ZZHy2j2Kh8fEtcaNKQhx51QY3gr7tO_iX2QkyWKtjQbvFQ8k1Q_ZZlm_2dhB4ghTCYi64O_HbI25SHw-ncy64tH2vu5p34_KFnHtt-TC9KfP3rPJ7XAc-yuAU4IlgJWRZgMPWoYTf_1XEnau4XVClXSIHaQDDenDa_YxMb4zi38mOXXov4hKFUtGknreMx9Lp3LsbqDloSo7B6dVkqcbV-MFOLAJ1WXbHS7X1kAj0UQGqI_2KZMwuVBwT7v1ZSCEHxYR4FnYvvtAdRLt66Qm-fTUGdow70FVbJz0j9KMHiAEfFy3o2A&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "10 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038261502920307?__xts__%5B0%5D=68.ARDVyt3qUhbCw18PAelyiBfeNZXqyErVIhyMAX-NOZjNIfA364Y_jiu4ZleHbmQeYT7c1OxvqY-swWC0qP44EyeKv0PgDPaSKhU9YZlXJC-z7aQSDWNJ6aBaqVtNE1EzHjbruOQc2Opp9Ju20h2F5dl1Lj-OCZqVpRrqVL6xcsV2TfDVmi7GTwHnLHFGJkzy-2HSvpTHl4Aty75xlmezqSTXQsF6-sR2-qu7zWnrykMICh8DfAIQmGtdqzBn1ydq6i0SRLe2szVfijJHBnr1U8M6RVHdp7qM2YWpaolwXIliuRV2TKeXdDRcCif8ux9muxZs2_TwK-2ZkQIkhLv5tRsPqw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "10 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038223256257465?__xts__%5B0%5D=68.ARA4CQ6dCwNCsj0c8MxfM8XxcSR97q51cLx2UbSkyn-lRJx_Y4zWrSYvXjdCjKU2Mud7P4P6Q3XfVLTfviRV46j58kQmkDnWOI4ETH26QiZDNgWAccbgoX2APkWfUhrZN_M-zgiFqjOXKwFUv0nEZg47fzd53cx859e2bYfQInJH85lVrNKY59S1Tb1TvfZ7TfSZV48YN4THfccgMLRsjnpYDWpjmX_BL_KJB1YDvMYKAQZqNEVNjpNOqZ3ihAJI8mr-RRRtZ4nzHLEwNoBSpf4xwHX31hNvLEIXLT31XIDiqfhiEemZuw5NgN0gj_q1FYYygcEoOewkhWUoYPjuJDpHbQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038170836262707?__xts__%5B0%5D=68.ARBYWzCbDt61mN83CZkWMntevZKd7CSDmPUOqD4marS-SVTKox40euW1ZiWTSwzBVRqgV5u8XogPM_1Yc4nq8SRDh1agrlKV0T1i8OX98zdppwa89Fg6y6nS2y4yNzRuGZK6zPv_yA8BTmKmY2pOhkrecAl1_IzEWWKCIeTbt_7qbNpAEelrBI8Ts81nAJDzta4yqWPami9enQfTAmyleZn9OV8vH8a2EwIpW20DY_lwG268CuIZ0J9M3noKXR9sct5oNpNLOoBPREwav8Wso52DJv7ZMdUUYD3G0S31cTbQpPv32xhAJlWAS3nwaeSbAKUREUWI1bfNKeygokKDs3oO0w&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "12 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038092356270555?__xts__%5B0%5D=68.ARAuc-Anm9rvw_XbyrfFh0Dk6ntJz31UHPnpMe5tZ9AeM3yfjjeY_HLm_sYYpLOb1onneqgIOrVLHrC9F47807OBujsCBJ1QXF0VXEAYI0hjNgAO7TbFEAL5g0uWuBbtNhawqyBr9F3oEvMgD_zj0fo60VXZGgu67aGzXdKYOtVrJARJawjnUKKgLBbxPDYcWS1oGQLv6MxTNX9FpAvJ0aP9o5Yx4Bl5w0jTV1jbVlsclbp-6xD-erRnpLI6cXac1VExRxa21aMoD6gcnMJytIhqgsRpIcpUGhXukWuFAXle368ng66sB0J3Rj3BJYovXY9v6Y4htIhhk39GelUiF4HuSw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 14,
        "timestamp": "12 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3038051996274591?__xts__%5B0%5D=68.ARDA1swEtx_Ihw1FpuNb0B80qgO3obubZvFnxsG6Rpd3zwdhI9ptUqpKroYy09inMc9BbG6zbzm2ubxs_ARx9BPvRdm0rSJPsNAoj7ae6rola9ogPQ3xzQBBAfoP_hAlT4n5e_uvhGSDr752P1UnnzrcnNEc4evfVHukkibRVTTfBSkm_4JkmO3jXT-wAmHgu3hHLmsNmdjkkJtyShYRvYlrwnVkW7TetW5Lckd6qxbCtc34BHeOdUm8yR-HG5rrkhrcWIj3yHoQWFzDuW96i3zpDHZYnuUm_zEDNXTEegrj9qh_GNRGVOoOb5JD6C07N1Fr_kh8D7loS3HRn1bS4aH0dw&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037995839613540?__xts__%5B0%5D=68.ARCr70aNlTaNqvLzabv46EydB4x8bKBUA3F6AhZxYCsZjzAQs1f8RJfV7FFMt8_YGvWs8c7jfO7dv1MkR85xHBm6z8cQlV4jlk38KhjgHatPIt2d3wkZduMYwp3NlpypELmjdEA7EQ0Uy8_VgPRjJ2wgSnM3-ws5etvH3UxLWCOL4b4pkQ2KfQGt4FyjNEyFp0OdnaIJ3Mm_ywk-41kNF2z5LPfC5xmr3Kno42OZK-R9UeCmacxeed29KVYFcCTIskg_j1cK09r59or6t0Gb459_Uy01TuFaUNYS5YnCpmiIf3yVgQkwvkT2XwhRMvRWvPv6Vx_VuUF3Iaf_Lmq3dEmGbA&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037915556288235?__xts__%5B0%5D=68.ARAOH3lvBTZxEb-h5NdeAX1gB4PthCakScv5FUCvUZ3ZSjUpB1Zka_55i1D1vyjLZtZVPG92AqpWOdSgoK6hvopVpME3ewrSv07cUC44jWoOh3iqgdJ6Ke6zWAr1ci1QyCpi7XD5KhNZGwyO7W4sRwUdBGwbFToOUE9R1zqx0CU7oT885u4RrnjIdvxPS0gVMWUfNkavZ7ExbuWowlEss8PNAn3Q_2iaNOm3HaLIWgP9Ct6tzX5fxl5uKIbxvFFCQJP--m3sgtBnBL74XbjN6B9HtN6NIF7Hzzh6kjAFluP7TEvA9x2blqRcaojXg65S-Fhti--9fj743r5urWocdaAQew&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3037868082959649?__xts__%5B0%5D=68.ARCpxidPXv72u5mEuSprokQUdw_Mf6L-rr46Mhy5kxnHHQ850o7e_xI6GVlYSCTS6e8ba5usxrgSUqS3eYKWbmRz7VPN5y0GfF2nYl-3lx9neVwmsaH4L03aSTq844w4lfDpsbIGCYKP_WWovaSFMdcHlWi7JZWLIYFk1GPcPt9uGvdqEbuQXJd-JuP9WzmAnME2ajaBQiw-HrJkkBKHSyY_gMDjGFVXHA8yUxfU5lWNB8RNj0Vkytph-S9DAhVmK-ZHB3QlTjkX7IOaPvTG9hRe__8HdX2qQwNlEsACLSAjLhcUnRv-rpH95I2IWzWycV1FqNWCag6_i41_Ltg6eB7qxQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "15 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036836863062771?__xts__%5B0%5D=68.ARBEg6DhJbmv2q96obG3yiBLYvE49sH9y2H0To56P6nmgFa7jHN-06-q8D1o_fcbV8fIv8euHYm_xKOLscBeP9LSEV5Cq-ONlQBOmFG81K2le1q17Nfw99EsAOYY0DvjT53mWAvgZQMX9rPvud2-jt6oa6L3p4RYqpBYXIJBE94AT853HIiatc7n9xihKw98YadyWVsh1q9ZiQIjJ_xQufTbf9qhFH2mXsEl1uIC0cUJo2kVOIf_-JpF4x0BngjYahDC8vTU_fYqlsxZwbLrX8YS8K5UELeynJuYyZxzWL0AVd6mjN-KIUqKDDNowfaBxl2Y40jYQvItMF0zWYoXZkmi4g&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 20,
        "timestamp": "15 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036829233063534?__xts__%5B0%5D=68.ARBiYsUZq7A84ssj0woJC6qIu9nBRVIUPTNTOh7baT3x-pYyQz4haRwtHL-WuY-4GHoks2s6vchiUWrFdHAZ_DyFaJp70cASyOxrRUmpoLjiXpjfyFQQc2fKLU4Xcd7fwMtyZOTOiulZnCJwSWpNTgPKZxQ-UxCK9FR5aAEA8x7Wm8EjZsXEuQEdrI9m6zWQFvyOAHkGGapkla5lqFAcMcLaRKUw8kEu9t4gfLi-QBGYnXQLNbasteezzWv51eobNmIvdYMTmJLLb0MzNq1zbNZm0XAvsO5X5bfQody4fTTwvhRamJvcdV0BOtouvMT4O73LtP4i6NcItlxkN8s1QYdSHg&__tn__=-R",
        "comments": "4"
    },
    {
        "totalReactions": 0,
        "shares": 259,
        "timestamp": "15 hrs",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3037766019636522/?type=3&__xts__%5B0%5D=68.ARCtr1q8H5IHOYq_gzf-Anm3LBb6yYLhpZf33JYjIkBnyxj9bqo9E_NzxN6Raw1WHXwZKeiGhpI_xyLDJ7Yz78-M1uZaz557IcE3ZMMCni5dSCaI4yzUEnK0ZCjwZU_rN7xqtyZRJDwyRRWz5KapYahqlacLaNFidk1leqpv-Or6-p13DnxsZpl_YlbJ4O-twWNETHcAf6If4TNgZniAGG2JMDNwGmLrR-bYq8mW8xbxJJYaKSx7CpZNfMh3WVhOtd2VlT2IkPAurL_beEu-MmSVrgzeL6fAcUPPU4LqamCQcIrjTWUq1sd_49a85-kMFGt4W99dWRuPkdpBksEPDa8Brw&__tn__=-R",
        "comments": "15"
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "Yesterday at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036268276452963?__xts__%5B0%5D=68.ARCV6KEhjsMF9xGjysR4evaEZVPzuNg5GBL3cvRwatXLiyKT5F3NUmHoc2uxwVW96GkVyYmmQc8_-WgMW0BcdEFqSWws_xjAKmtXnI-7Uzc0Lz_g_VboTEZCCieISxFnLuBdCpPp45QMPt-_x6LkBZVz1PWvpXG_sRbgU8JjRPLyCQU6zBykabmcOSKZpJqJO3RCAYsfjkhMy-v7RB64Ll47oeOgf6waGovfs1-G2jVlhBiGa4zSxkFunUBQlZxPUElF3dpqfiZB9mFOA1V_gU_vc7czbxg_h-C_OoLSerWPzHN-VxmAKPBckKVnHIrURAN5vCsCf9d1NjMyLKBX40y80Q&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 12,
        "timestamp": "18 May at 21:47",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3036554496424341/?type=3&__xts__%5B0%5D=68.ARClIfwd9Tcbp42UzWIupYb4InFQblQs1bKYRCA6aTbtZwyLKDAuPtEVtlXMgZATbX6RnWK3m8m0e6OezNebfrYYh3cgt5BGnTggy89fodaK54q2aHCbVDW_kPaH_vcCBfbIdlFegp7x1lUKe5tc1iFr2CryFLhvS9X2ugavPF74Ypjxj3fU6Bu-9vjQCn3Jbdzq0yl76FB10x4t4MLuRSFtDNb2p6hYKrIVbzS0zpT5twzYloMK_ioKT9cflTKmonyAEWCJr6m8qMQrbzPrEDz4JWj_5_75fqWu9oFWLFVotu2m1MkEQM4afW89MDPSUmy51xmgUtTATDTAGjkm2WLp9Q&__tn__=-R",
        "comments": "27"
    },
    {
        "totalReactions": 0,
        "shares": 127,
        "timestamp": "18 May at 21:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036499896429801?__xts__%5B0%5D=68.ARBXQKFCCJbFpFfqULQK7B86EXETtl_GxF51d2cHmTy4CHb1KsmPUnKmCzxQuv0sNbsh31Iia7lsdYSVGUM5t5sHoHGFVtsGllNyPLyDSz7v9jT6NJpXp8gZkN2r0St4zP2VctAt9S-ybxYHnvYc540h5-qFGuwpftxa3tNBMrbNcT7-PWa241vSV8Qa_oFGjvV4IopHUpcyRWqOxnWFH5fvWXvMcrq3KBfdMLUsyqMzeaAQO1NJth2zZKPzgikfC_k0KrNYy0_xI6BNiE7zrjxvgfWMiXrcwk-6NXBYxojOWSWEGJltIOphGOAeXaYPs6WIv8ORZcJpeQiyhrS77Xaqog&__tn__=-R",
        "comments": "39"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 20:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3036370699776054?__xts__%5B0%5D=68.ARC5Py-gt8IXp6dU2NByDZTxHCtcsytOD-y9wKdgGHfEtK-rWn69gViFxa6QkkjDh1QOrwDSNBfMB04uOgsq7qdA1T5a5_AOAEGjmYxuOmcFpqcCC46DClXJ5adxUvkuN_wnsvMBhxW_Xybl2VJc5RDCoqEGiZUaqfNf7vTJxerWQLWkAxQ8Dkfi9ciEsZxDvsfyr6LmFOU9y0Nw2TPxFjJRllYVuFivLSJvQjRXcjPwioW6g96zxoETwU-nxa2hxBgrvi_X9wEtYMNhiSYeMwlcOInamJwR_KaMTl6LYdiPyc_h7N9C2Qb7SzuE23l16Ko0lWiC8iFzphuJVIfX0HT4Sg&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 17:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035957636484027?__xts__%5B0%5D=68.ARBGcFiJvFnkBMrPHQSoiqzo0kDa1BbMu2mkDluUfFbpUwj6sj2QdfE4Pk7eKjv51sHWYG-bnWaeznxWhTmVnjEKZYdySfj2jVrDnGKz1Sg0v6AhmSTos65bo1aEmcDUMU8VIhH8DhQRjU1S_2K9WS6rpfrHQl2l6C9FsDtmZ4OF8E7j6nisGtzAuU0CJckn2dKlrK5660Dtt04vIKWbGx2smI7tmeWjwQsWvyUFolybpJv-DPuaVOuhmaCzrJWl-an9EafNGtV14wNcDRKBttGSA0aJdyqV6ZRtOBmxy1sYyFaFGf7rASGaZWi8gG0axvRrkBHgaRSDpRA_ofThieDbvg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "18 May at 16:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035857436494047?__xts__%5B0%5D=68.ARBmoVTUIgVnzn2HNoZ01Kr9dHLNSWr7K85xHi4m2taJ44xZfCPqyuB0S_cFcqeMQMaDcTcghU4ynuaa5_hCIJQg4aIVo4Jqid7qqsslUac9abMSPOVzonnTML10AcTBPdPrkr5msyKtXaVE_uQqFheSS-hkFoo8IjdCIDxkRR7vzsCu8RwjYtsRbzxftyi9fEYPBqrCWBfF36idUQl9MpDuxLlFZ2ZI_D-MWcIDD_fCWoVvNAvp306KlJsGcvH-lfWD2QawiuE39mJ2mlFZTGQ8qzlIVWip5mmASRIny-oCucY5TfsonMMSfRy6iTnkL3S19gQViBjCvVCyywN3Ne6vAA&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 53,
        "timestamp": "18 May at 15:43",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035786159834508?__xts__%5B0%5D=68.ARC36hdR8-whhKsCjN4q21vC1RgR4iLwsUQjvoyZq0z1ROc3Ol_2bMgaDPHBqdGbGp00-8GyzsqJbAZzDCQc05q2luFhh_5MTJHCm9SVIvr0HZEd4fmjtatUbTEksHf_CcVJ-XU2mvhtY1qMp6D0Fh4JHJygYFy1IiY7B6JZ9uSQpsdi8sWXxL3L5-2N9jLFDyew_MuQ5XV9AwktItiIxo4MqdbUaPqwmvWWfXvg5SjaC6jOyWT0J-Vwwubg_F1EGK3b-XTo4-xS7KzAGzkbM0gRkjAvQlc5YFmCvQgGVO11yH0_sXkoJ4Yp2RM012GFxfw2ChIXLj-tIfd2pIWp-INJ5Q&__tn__=-R",
        "comments": "21"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "18 May at 15:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035740039839120?__xts__%5B0%5D=68.ARDYZ5EsIEjr31KPTq6Fg7z8V4ImAWJeexzAuLzOg-rxbQ7vu3UnlqQecxIATJI_bdu1oDPfrOrBqUlrONyCpHa2hjwdZUyHd6cVqY2ztiq_pGYlBlZpfDfJ_ASH9hfUYpd67PeM3eUG3CZhSE_wIj3P0o6GeJyngWcXVY1lytz3JrX2S2sdXDow6bSJam_ENJeBc6F3xRk34-ACZWt5pxNO8Dyyn6I85IFhyEAGtMfrR4vRcRC-0ejdjwGwsUKsXLKecnyXvBU6lnEzVYN7anUUk3xr8LSf2S2n9dXY0aFusIaF5erJfcZD42lQoRSbiB5XBO_tVR9I3CMv0_df-drkTw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "18 May at 13:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035551229858001?__xts__%5B0%5D=68.ARDbApLWwbVpVvlSOd9TSUD3o0ONtzTp_qIJcchqTVBAOZzzvCDgCIY7xlOO7YcU9Nia7eG3i7uW9-kvwngsVAMCDPJKTksQlRuW2dcHTjAtqeafNpDdB9WTPCh3I7gz1EN47xJGXbyARUvfPwShrnbHZvVMLOrzT0UFg1wjHEG6dU1R41c2i9jRwqjqV0UtCQl0EAzoNAY2gl_yksvOTD1v2cL5QI8nM8c-5Ki9xhO0E3RHcAMWuLZfSjyvcOBsfJ2iFFk1EZmtW2MprGQw0-LPwEdl6XZ14seB6w1fML5hIJl83p9ViBPXaIunOxozpd4sql0XNxCGskP9iqaLuQyTtg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "18 May at 13:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035471963199261?__xts__%5B0%5D=68.ARAeAWQRCEe_3tiKeWS6_j8pD1-R7N_XBSrke2BoRF-hcuE-4T4ON7jPKTh9NQ5PeVFPtVqkryxOTGAoMaqvbBQrCX9dDlg7SoThCfyPuT5KKj4sw9f_3T76jOh_ycaX7W2ai6IZeUx-XkQOBE5v2pC68J-H1wxlqVU2VKX4YoAS6D4OwmMigcul_Dkgv0HjDDQJcp5izcHb0mPpXqFqezpN4KgYWnEoTtkam7SKKvW4jDC1djBMKnSyMzAPcj4qEa1EtJkNIwaWWBIt9ug_O8Dq3PBkVgY7NVkvJfYhfas1n4QpgQX029xl7wFJvO42oYtO3oLZyylx3g1Nymy8GA5qoA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 12:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035372499875874?__xts__%5B0%5D=68.ARALyhUnuQzSEzduvgJW4wdOvFHdbwus-v5uSaHjXMCV9wClNTPi9fQbYj1-ID1Fvp0JUqb7H84_r-fV-1-2ImrAC0ArQZOSZYOIK7vNsfL4LcRNRash09x2zL0796ZOrOq7x1aBVy1d4Z9pe6N2F0ETXpqteUAS6xSkGz2Q3lwm13GGrVExMCp8YW_fT79btt3H3wiI-cFjPkvxgw96yU4T0tyiYcruv_rNcPFNwO8hdzGe8IwO3zPOjzwdxqhyz04y04iKhhpQw2ydOvJDLDIiMvTbkp0VrqqZsqGhSGV1WUEXPh8GFkiNQHmYSrdbUEELH3LT3Wj8yYcOWqAnqWcQBw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 11:49",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035298349883289?__xts__%5B0%5D=68.ARAxUhhcybvLq8EJjHFDHY4SpzorTuwoIcrvPhpFHbOMl7Yc1p-2u-pKLSjWSuOVVooprtoHOs7JJEPI_i2a0aIH3osvZ1guDsWW-hYtRugvQq1XFt2CVKzijvNL9A7J2DBFTl_sn-vAdpdSi-T-D-FSTgaPhqpSYm5q3tqBgEoIEiFxNXY36ABy2M3VDd7dkqzgVI99gM4aVJVKD-jTmnesw6LXuZ2lNxIU78gcLQzU8yMbtCDxOsMJbEvHHPsy9M2k8Q1AaOfStbSdBglcO4TSdBm6447AWze3rs7m0lfm8k-cpo3cNSxxqdWRmz1qC5pS1bg7_JM40D29TPgxXKdIAw&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "18 May at 11:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3035229966556794?__xts__%5B0%5D=68.ARDGvM0cKv0aJJqSW30Z0-DhzhWjQWBOnFi3coGe41tmihwBwPs252zzw2OX8LX0JrJG549suDkINRVuMkNmgsaO-WIiiwy71FjvtSp76lZ4YaWGzP2O5flwYPsFKMrRoSUeZeM026ZGICskwAshmB7JaeSZ2Sd262-F1s1t9jjy3xGb0RX2d2nlPTIkWa4DYM1vnC6EhmFT2pyWDSJnVaw8UA9dE7nMsdXbUayXDj3yzTy051SSsCz4qnMeHZ5irKcZyzf-7Wceno0GJ4WMRNNqkmlyHgV3WvcK71ozrv4g1wFHX99NIrvDhluRE84KriP9VnWLZxOQx9WCIHFt9KdmUQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3034264836653307?__xts__%5B0%5D=68.ARCU_9IA6xitdvi_UVIia77Uf7daiVK6GXckUM_9lvVEjednskgQAehguhLJicZN__SrCpkbVhZUeCszvjsUmt7dGu7m_Ga8BpfnH4uLWvvTxGffjC6ZvKZPT2iGv---NSweSvugN58Sf-8sAo5Lg6HVZIU2RpIvU9dJGTQLeFOWXIvUdmI0GP96uWxkiC4diD-ljo9qRdbAX6z62cxdc1cpSLcwnF_pgTCwij2936dEKFhFQVZ5HoHo6IkkpY3vtH3jmSSA7FLa4NTRZ4e2SeS904osvrNKJru5w-tAD9HFqukNkGZl2Dx1TBea4dSJY5aQ7Z8-akzA5inDtoqZ1ciT1g&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 24,
        "timestamp": "18 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3034258229987301?__xts__%5B0%5D=68.ARB8DHW3t3Lu300zrCCTGndrM5eWd-ghZWcRKTme9m234vSnqZosGIiHZywqdMidyRER80n3Qgdh5bIj6si0ticRMwcAXC3RVcc9V8BaOe2AuBG1rVWtsfhTw7DE6C_gYUGpj4N5o7JLN0IkPOpX6kxBNO8RnkuwkwvjIMsKJWWzcytt0FBaGGZudqsyvDusuC_Th4AypxZllDsTQifcrJTCw0hwKoU1SqzVbgxzsLrLPmHMkDuTEOcTHZeTF9W3rPpOd-1jYHc0HGWfZpelw7yhV3x5a4YqqtNjZJfVEb7aSib-O0Mgvhsqu1ajmiFDGUj1wWJU5MwbWnvpCzPdym0nrA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 04:07",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3034368269976297/?type=3&__xts__%5B0%5D=68.ARDN6hbDf0mdPwTIRkyS7TsjqzP97VYJUJXaF1Ae1sxNNCaIZtqdPEzYpWCINaMVnEFANsPZngoBoOn9RJrRCfaxCY7dGTV-_8POyWY6QhEWXkUiLn9NzcOrNt6-IjiUxH8v7fcH1BALBmgQL4DYpW3_swY7A3qLOfSsE4En31RebMOxeJGD7o9LUxZVGbQrSh1gqBDFXc22pSaDxcczQSVWA6-noCulyuxvrQgjFt81OQX8yAFOTQLYUD6CD8Dc8SHk1vFSMsTbT146BrFhGKbtySE4m9DyHJ2G_Z5_ETImDVC8YZ8gUY7EOJj7Yz9xcLkiu76H3rzlI20Mv0Fc4n0HMQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "18 May at 02:13",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.260391727373979/3034007706679020/?type=3&__xts__%5B0%5D=68.ARD_hXW0AR9Tnea4mHdfBobZojGKCkQkMIC_MGoxu-wCS4zlNaORZzKRKV0VqtyJ9NqdRYbStUxTOJqY7c7669CrQvuWEDq-QfW58Lvup6hjng_aNx2zqJX42tvYmxhJoySCKGBZ0P7EF4q8SirAuQea2i3-QLQgXhhfKaWAsB92FgDAeKlhQmIYCow29KCCchQf2TXscd8vD1ZTU1r78db_OC_op4MVmQVtOsdH4ye3nu63YCnpjPi6NQkDW-np0sxU16CImNy3SdmOM_bIuLZorpj2RRML4GaFu9muzB5MUFrEZlFiwG2iQPxdXA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 42,
        "timestamp": "18 May at 00:00",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3033770146702776?__xts__%5B0%5D=68.ARCayndroxzKjXVwV2TNMeUfUJk5983S3levNU4uMLfHZyxql_P1zgbdlT1anGU7oJSWr3dvxvXAoTGHKOSqQO6yo0IgZpCj-ZzCAiELa63V6CasMJaUpLhc_OuF5jNDVAmryn2ZlyeL1KpomVhoEj4XCwkYmpmX-nd1TuqIbUktclYFbB_DiFRPialD0oQazmZmVBZeWPJlYa8CinqliXQ6N8-ef9C4wp9YUKneaKl6LIKocZLlceiVDYgJlxs9-yb10az_d6LvaTBwZOoQSP9z3X1zfZ07rNZo0S4P3vdKeLOn1lfVkqG3EZR6inU4F3etvMQhMYUGaJPk7-cP6Q&__tn__=-R",
        "comments": "452"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "17 May at 21:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3033394623406995?__xts__%5B0%5D=68.ARBvgx4yg5RLfRbLFrRM7Y1_ydvjZ7FhwwCg-7kqzEluTzpkM5k_m6Il815V0S01eJdgiY1iy0SJDwAYj0WfQ_liCO62VKm5jQ3wkquEAgKLVH4GLmTEvESdJfqUhpW0PxT0Fn6cLq3KZsmTLW-MbKNNg0RIU788ZDK8mUw0AZXCUhzyJhskKZ6SWXDDcpPpTFH3wFT8ApP_AYOgqd-KITUsMgMVNR5pnf5o1PKfwR2o0M8D4LipViOJdSAqGEWyrBlwqDgXHKawreAsMcKD4L-PJER5gzpwVIwVUFtF5OpRL05p76x6uVYtm1oOdIbelEHQKeoDEfmUOLW94WWsiPjk3Q&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 54,
        "timestamp": "17 May at 19:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3032410433505414/?type=3&__xts__%5B0%5D=68.ARD5JUvy9tNhlIWjmznVBJ3mKTYqIsNM1rNftSWuC90p3YFNtKUN4UVXeujg2wViE1zBaMzwZxNRFHlul60FuwI_Ghr4vaIZY2YvYpjn4MejFjXTH5WH48BMf0VYlMJq6qsxNva0Qdw-LaeE2Xzk8d48NhN1KoYum0PSGjfWkMWwVMPsxzCETYHzCYzxwFfNBEIWw8aHyfFlM_8-xRsvviMQ5ocU8Rv8kPc57uU9M3ba5LOwGjnv5O-8yMNUJekvKsEN_cuRRdjDB-sxedAgsOaXH5_g1Zc-zI7hZ3L7RMhDZB4s6n3RGvpviqu4xqE_FqfQ6YFMsDwMJMEa_6xNo0VkaA&__tn__=-R",
        "comments": "76"
    },
    {
        "totalReactions": 0,
        "shares": 9,
        "timestamp": "17 May at 15:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3032596466820144?__xts__%5B0%5D=68.ARDRsVLjlOSi9CXRNJS3wbQiyMBxWAp4AOHhj_imh6WUM_FXtsZQ8mibkrGY3ygg6HM3Is3tnTNB07f3DjH6INRoNqglGbCjZPvffGeBYOmxk3rHn7otB2Ai9QWqRuXhqBFjBMzk2LKhD7CU0UUGmJUbK-j9knySQZitxD1GtKWplWogLVASXGVGrf7ZG9NS_Kw6XyQArqqg4XxPFVVibASQrCyisWIC843IIS2ixGQ4hluPo4RHGDccACVnfqs4VXvzd53giD3-Nqn6anoTbbbRBNkE_2tb1TvU5U7A55D_u2z7_FKM7mLHMqMMA6O4Lbq6O-Y6IVeMw582bk7mUIQOyw&__tn__=-R",
        "comments": "5"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "17 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030973556982435?__xts__%5B0%5D=68.ARBYFkWYGn73ngBirNXIVfUfY8U9xopfeRcnggznHowzZTtO11tm1_5RuoU0cKBTIeGA4kTRskmS9B8AXPCWP7YWcIOs5pPlL-Jn_SO7CmOnpVJNR7Wo9AxhxoXZ965jGjiiPO27GIQc0TK-RnrlKcCV7PQVKg1yUggdhPQykxymG6V6nqUjvDyfLxXLLR6tAlx45BfnqnQ8lVjZzmQN8Iky3xX14wZwGqNH4HYf42C8RtklKoq_K2XHn6ayWqpNIy6NFXF7OG-3TXteUCsXemehIRX-anV69Y7tp0mS_g5I90Az_lQNPj-LrFESy4cgqw9lwGGR1qUy-V-jytd07oZuJA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "17 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030963623650095?__xts__%5B0%5D=68.ARDnRB34etkAKkRm12JbPjdoRHm6MTU3_xeJuJ8SI9YjxgETdj3U3U4BNPduWkQ_befmN5Iq3gRAtePyqFIto0TPRj-M3esGQTfPgUhxtyf5qU-DS6NMwGrJtmWn66wNe2d1YPKMSvcb1nDHQkqmGnPFhhAGobvn0nOGHNsIvIMlSzzrrTV9hiNsutgM7qNY_LksuNk_z4XlOEFRslBvxukJM1tt5zEYA_-ocg34m4hUMdGidxPklP7vHieHO08P-Fu58pxaO0P21naqx63fVxpmCwm7LNzgks2q635f_yRqKvsWoSICzFOBTs5s4yB5qkxR8hoAMd70VmzplmorSfT1Og&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 22,
        "timestamp": "17 May at 12:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3032107126869078?__xts__%5B0%5D=68.ARAxxynoXBuD3D11b9J-CMTo3DKMzmbRiYtZ3G-7mOl2C6gSY7alL8xTaxQ3zSGp0Uthrm-qJwTlZ_oVMtBJWZUd9ffAfqpq13SnJkT58ca0qgbfw1bF_RgTotZ5MI120_aoRxB3VsXyyQuqLsichccz0NcxS32z9o-ANe5cbN-cDRDuFU0So1zR1I8lmyOiQcFSeo39IgqnhcPyjAnZbZz9KWlyEONBnaBrLHpJHwW_C9Qlsi-BYYLbHRTyeooKPowxUql3XJXOXTt-2aOfOUTqXzyqlSV2319Bo5Mfn65UnUbs-7jZohwyYjwy64KENK3pyAp3VpUsWG_CVI5pPjiMTQ&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "16 May at 21:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3030212360391888?__xts__%5B0%5D=68.ARCQiPITWKp_4MKKAofcXiEE2AkssvZlCkt3pgg15o3mt_DO1eI9z79oViLDElJomL-hiPA5s0omf0u_b69z7vgrORrDmd1uSZC20wVql2PeXGC1-SXB_iJpgq5EfIXlhZMDFoPOiZfJq86iuw3KnElLxbkbwbjDajK_fgZ7MwedDBrQs_FjtSufTnueqKuubZNNivNFFVF7RU2JhHE1wzRAXTXHmuXNqERii9j-8UoJn7u-n-F_Wd29vP3sA3_G32-O6Olg2D1BZGB07WNNBnlNeY9-SW7qU4frjnVBaCYw9dI266x1fJUY6hnCOu-PVrS8Z0dPtP7NbqWMk7gUsWn_zQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "16 May at 18:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3029295437150247?__xts__%5B0%5D=68.ARA59UPimMv8EHepz3rSmWc1OCLXPJlpTOTCfHtQcvfOxzxGkFXdcWGzu7Y8tNxJfEOUzYE_XY2wZEge0_1vW2grLSYwBNpaYjBZF6AciaHO_t91wtItyFtoAurBfdvfGujPUFkUmJuW3Oo77qHnv_LpKf6YhlibwOR-Yj5q394lgWp0DIPBm3HUsTARKLH22MDqIczaDmzmTpS5pYl7kg6ywWh1Rc4JUNFe93qjgXIPC-yY8wLpaHfVINr6TRSDGanlSwShhiZhIeUEo_npcnrdUDC5pjfagi2OSQCtW8nij8jnyJfDugNSAwru3ycARJ7LTACbCBSqWJo-bE1uQQlIeg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 34,
        "timestamp": "16 May at 18:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3029314453815012/?type=3&__xts__%5B0%5D=68.ARB3-5vjEUrrDtocVdFAH2-40VgIpbtxwvim819WXPJ7e4k_SHkhzOmy6iOhysKB9DHjoYJX6gqwOA5lgO49WJJMAko2o1Y10SOun14S7CEYt3CO1CXofHlWl4HqlgYfNLHm4tLctd0bMvETZWyLf6KoMi09ZAJcpn4V_m3JG60W5DRHL8PPb4UdyP22R9daE4m2mwePdVk_kf6RAk5fM2JKOl57QO1bNwuuBEcpAbBUtnsdnZWBkgmfoEPs4Tm1yAHbfJOK26jRB27i6oq6PZUL9vIXp_2D0c2P_LwBKTogluDKoE4hfV1yLkTiLE6WHtri3JSF7D9XmZnHquuSYITk4g&__tn__=-R",
        "comments": "56"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "16 May at 16:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027588930654231?__xts__%5B0%5D=68.ARCU9F4ePI7YGOcy-SrMTK19sSSEzqdM1jiuNR24lto4PoK5mTL-XIGqdvbvgcKO1Y4duVCAAJfjbN5vE01LuouuOEudr536ho6ysCIvejJHTxpg4uN-256n_a1KFVe9Xp_NAMio16IujmLXQeWSZy88VlgXvwP8AhS_SwIxKliICN-URlkT6nrU0_0zeSkJRsDqpDbtJuyAiiwKbM_eTpvszsSgNSOhO3WqzN7ordWDGYff1_BHUG8taKDOtfIx-_bFHNOrV9s1-lTGDI4URguAoFHEsHrVTfBn_W6l_t7pjnpBrnWGV5Vb9ISuaM3VBi22lb6661yda5oSL3c23Hujkg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "16 May at 15:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3029299173816540?__xts__%5B0%5D=68.ARBwp1n-sAeIoU6bJQNp_eikgGMgtS69qxi-Awl95V9xLRs-AKg1taNCYu6CYZ-as9MWPDtACR36D0nE_4jiAMrivCzwLNucK4P_rql2niiQatwPUg0joD_Np8BxbzlylerJDLnwKTrAEd0FP_X9-imO41875btTymdms98LXKqxPnnpS89U0ckOAUCzz6Z4RoxpLIUOhQSk0cBmk23hiFh3Bne0-tWagHMzkpwsZnHPZFAv_NmVI1djHEPgCnpACv34m3MvE3bAdBPuCihtM-8Gc9k_fe-6aRJ6QyjgTZ3epnZmZ0_e4JLlIp5UAuXbK0-nilwW_RFjOwJegc5iFrg9mA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 70,
        "timestamp": "16 May at 14:46",
        "postURL": "https://www.facebook.com//marketer.ge/videos/550848869198659/?__xts__%5B0%5D=68.ARCpnVJphpcv99urWJznLV_P1yyjljmQhNQ_LB_uWJO_7N_jpqQpLxJibdq2oyFJIi-32KCdkaBNVjMoPwqhZST0x-XdSKFqaY8RNoUTy6zerOSqEcNZh-oBHjksk_YfPH7RLcDhdq9c9zvl3n22HYHy6P69Zm4UCfJLNFQxB3oLCv4pza_VeWL6LcEABvd5RFnn6_MlRU6qo0g6XuQisQl29GDZhjlNGD5EPh3d64xMxBxLpfH1oC_T1M-daE1dnnq9CSMmii1_suRrUxlhRSaOu2kSnzXqR_2QcpL5ZY6QA_ZoHL6jcFuL0A_B9vrwW4p4LSAZ5trBmItOSNGU3hQjAhHWvhmUF3YLV_bIQOiuvjY&__tn__=-R",
        "comments": "124"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "16 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027567917322999?__xts__%5B0%5D=68.ARBv27ISTEjBGeJwREw8TxEf6gOnrMO1Wc2p05Ad2kTk6fytAh2ZbIScEevKyD6by01O9MXumHkKnn_hs_OTU-Vqc408fd9nTLZCQyAX-rvJuRgRWgSvXzbeVO1E3fXD3d192x5-VNq6Y6Ef-hdSOkbAOWwSd6Hh5LheWP9YKDZiLgIpE5zkM6LC3EHCrkLcMSwTNMypBMv2hoI5YZENm7wcFXAn_5juvsFaBWaKIdbIbkmq-A7mbhUys2N1S_456bPV8Sz3qdSN_4QdzrBu_g0NX4HFbYV-IxW5qExIAcAgNfjqqDwfF4r9_Go_2qzSSgQkTMLbvJjOuPNMeut03aYACg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "16 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027565293989928?__xts__%5B0%5D=68.ARAaLTErokQLAPjNSdhmMId8L5kDm9QcoJ62b_Omn5SnBNshzH4MdvBPRnr7pzTKVllTKiKNUlclAXEZGQF3xNym0VCvoMqpTEYFJUzl2hetQNMsXTwO24f4raRohlp71aQpMR7U_XjucXcaA2ifNHHRhbdryApJDcjD-hJZw7VTfbsKJmPDew5wuyLjypkpFxm_iTeQL9UhgTMtXDI4G1sr23IkjllDyPz96jR6bkmIWkHWODWuHSzzuqzG0B9H1K39hAJaMUc90OGre8Q347NrWFfEmi5BsU9cu8ZXJEQGFUfKdtXrW5nROy3RCIl-zTjrqmZWk6R_IkNcdOM1PYBikw&__tn__=-R",
        "comments": "9"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "16 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027560863990371?__xts__%5B0%5D=68.ARCDahL5mfj4DfXzpMPtWdR7IdCr1_zSL8mwv5WlkLpuHf2x5G72iqMp6eoqNDb86r2EnrerL7EmsFyJaJn-uvtNCl9Z0ugr8bQkhZdJ3OiKkQ2E6-CmUKrc-1HxzubSztQXt-yKTiAT7dIcRKvpunoRhn_63LHS9xB5AtxtlpqmwEH1tZ3ZXDXbeO9MuvxvSd8QiS08MdQ7CjoMsgFCKJ3L28Hc5azlQOXX5lvpMctML3hMMSesEGIO_0pd_am_hwZF7kkwQf2VWxiCtUWoaCG_c1-anFma7dRyzAQ7q0NSBQIllM9TWT-kgQI0lf-qciNsndZ2rmivAUW-Hvh8CN4Sag&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "15 May at 22:32",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027155870697537?__xts__%5B0%5D=68.ARCrL4hmkb_92qNHtn-AN89XCV9fGhOn4gtHAzNnm-uuJg8ctSU1lU2s6eJ3EcINVD2e2RfAHsqNgP1tYh4Tid_ixkeB855Czw-hBrGIzBVjnTQJjjlynSnc3t01Wu0ca-iLoGaLijaEcjWEoSjqfdTzc1hOj7dcYxnXp_G4FCINJsFH0vGVkJetvRMWnfIvnRqWmXgt6bAMzCJZI6IbnxtBYPArYByfJFINc30HHD3Dw0VIDhPvxvVfl36GWngbM0V4RJ7KQeZaOFY7BRpg7xOJ9R9eiYRyctCvbX07so2rsAicS5mEyaC1bgQI1MPZqdULW9IK7Yz_pCPp4RxOcxY-IQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 44,
        "timestamp": "15 May at 21:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3027034370709687?__xts__%5B0%5D=68.ARBWLqSYRsCXKsAZz6SlkdCE_ZSRs6Kv96GKdRubCDQEYXRikd4zkBs7g-7BVWpn0WbcWhaAlT_DD0idBXOdxY_oPtUXA3WRHGrIZD0vhp7a5DuNK0TaR_-Dy4KbEGHOtpRxouvdNNE_EXaMYd8gjVhxKcx5_tjNxR2HitKPlExP-6MMJIO3dMB19hqX2HUKBkFE3GU6Fbi90TZEsa8nWhBQ-lK65iHwhf95zIQ28a9nxicK9Z6JrLuyaVci2xtmRFoV6zwhQ48PJb03bGh50yPoo7NRyMJyVarogt9STkJ16g9V1yhBwJMmCiHETgzRNo5Ccu1OUFQoe_dU4th2y_HIsw&__tn__=-R",
        "comments": "25"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 21:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026763567403434?__xts__%5B0%5D=68.ARDVD8npsDdOu8ffvkGNKDLqD1tCFdGYcq-V7gdzoM1xncDRl2aW9EeN6IBDpPptii93muN8LLlFZPL5ffv7PIyPZ4SlIVaOnyjCY7bJGosEDFUd_oP0falmHqutBJC7g6E4Tq11gBQ9I_3wbXkuRu6Ffx_9M5VwMkVHdP67f27pYFkadmYYIBDpwuBwwMbVSdpLXOtT-SCVEF28XShVnEFAptEeZvWf5r4ELFxmCoax0RLBZudQ2h-CJxmFw8obJuonL_D6DvB4LtZkESwe_PKJcCjAvPrjGZdqB4lHdc1lToyj8kPjLNujk-KgbKhsw87pEqgClEXpX3Ejs7eRfnFxOw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "15 May at 19:55",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3026797137400077/?type=3&__xts__%5B0%5D=68.ARCGipw1Sqpl6I5b2jAp5Ke6jHXdoEKKC3xg2Wa-RDysW0BVieVwZ0hY5SJuF8cga_pIKmquetqo4iqRHCci4is8_La262RP_O8sr734npIzbndkeIRXqNUpQPJFoPofhAkIj3Rv-vfmY4iEs73NgBK41J7823zG1G96vKw2qb0em0ZZFX2NvtrqTQT_nOWocCWs5bLxuWMnsrdylgBg4cxg8r8D5WpRIU1vWZ368_9PCDeySma2wwcLT4invetODrDcMZpxIMyFL8va3sO5sVQ_Xw0Yl1GBAfi2YpBSidYI6WFL-Cdj9wdDNojav7i7p8HD6jtn8KOzwFK-CQ17Ku43fQ&__tn__=-R",
        "comments": "5"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 19:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026716167408174?__xts__%5B0%5D=68.ARD1q6oZUdug0Ua9z7H4F3XCyGzq_avwlwmbmi-P563_JWr5WUF1Ro3lWV9kXfG7vHBOCAv8APTInuvHtpv8Z-OQRUfoV4RUmJJbcl-QcuI6zeinaYJ52YaL4LSolA9UuGUsCPMDiHdv53XblBSFky7agvZXWITn1fvEZTqzcRJ4-oXghk8Lcv1Xira51QBRB1Q5B3c1Ge--VbWw5jv42kD3nV9g9Y8x6IV1llCOP3VbHsKMQoEqXA9_gfEYCYQ-xD1r-MM6LJSW5hD_84Ni43nlunIKvjD3sNmKu-9stVhbJ6j_Rn7AFHeI6A1m3_yKLQ0SHZOB0GJcael4Ai1hnUBiCw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "15 May at 19:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026704727409318?__xts__%5B0%5D=68.ARAoV8ItcuPpcOcN8nKSYMHRmurBbpo8SfUQZLd5T1V_I-hSLqeObPz8rRvnaCeuUGcEuTHUybiVUjw5AqlS2tFqfSbSFy-ZHc5A6nMAsmnEgt3NRKe5vKTB_arO6EEAHEAvXacKy6-TbxJzJcL0bzO64wF9Xgi9XUaoC8uQBxhnDjLjBGAOJuHV-F9Q95iNdMW9X5n3wewSclTKLVZZUcu17ySZcJ8xOdz6-zSgGptEjoUQjAap-9-WGr_LTuAXyS6k98ofATdBv-DYO4G5DcbTstt0nQhmVAkMcVLl0wsENeYUedeRGcrjrC8qu__VuFesK4ZmWsNLfRVszsMwdxjFDg&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 18:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026693284077129?__xts__%5B0%5D=68.ARD-i9Bmid2P5e2LrKCw0wp9GeTPfeWz9UbpAGR0FedLtC-r3p0Ml_Fv0DDKsuP7HlC03arQ6rzaKDUNEj9UwmHHjJQDZVL2V3V_GimzS2EKjpGPY8BOSBIUQGlo7RuELWDh_tf3fBibjbxHju8mFt2rT5sarPFv-xqRjzRXHql612jYDWD4BmRtyT1A-mS59PWBr0MSu375huzBwPXclq8C3JmkBcBJNvODl22VMp_UlcIhwJ5sETtLjC6TFuPJRM3pXIGVDt6qi04-0BJorgTC7T6t0O7IzyliHOvyYl3fSwUV3gXFkkY2vqEugV12UhAeFPp4I2hVDAnATFOemooUjg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 17:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026587970754327?__xts__%5B0%5D=68.ARDP-Z08YQP9zSIUT0QvHP_TvbYdZk1OmwUeN08qxPMGg3byWlIIy0OMatbA1G7HgjT7sQEae_T4U_gIw1OVReBncsfPjs3MzvMK1IMewY5rnrPwmAPDDjSwU2YD6PIAaaneC9zS96dIn6xHmGJT1ShCcbeq2xLMquCVt4GPKa9AQD7bmJktVJchgzCMa0CqUiLKOo4Op6ut7_wBgPt66mkaXJ6CjEdgCYWE9Jm9fvKKR1s_lkpLPGRGkJ04mWpz8_FJpDxwYI6MxTHiB3SntgriYcKuyFn8evy_NO39Q4tlR9ALGRbJhU3Ky_Wfesa4GtEnNUAm2UvbTisgEsSl95Smww&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 16:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026482014098256?__xts__%5B0%5D=68.ARBom-CfbTrD1pLQCOEF6On1drAXGQ6yTnKfW6ncmKGyoMlqaEVzPWf62cln8Agvqv3ElQEG1mgs4-dr6xiwe7KkdNKtTjm5Z-EfxVny1v7OSvzn6PBKenXFqYbKe_v2lJMROzXPDXQoO8e5b6XK1PxFb7FJYk96rLTEhFkR20evGf-S8qTCEfBGR04n5qFxgwfLnPfQt_eHNR2RedaVoY7pgJRiE_-CbUOdsVAvX4tKrJ_dE8DMfB3RjvpB_7wzc748ZbnnNFK1oz671ab8bdfAFde7kH1vCRkcrZ9Pegvov-qRTpxZTki56QaFKikRwI56iID1dp3VmrAyrnVrN7-9cA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "15 May at 16:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026426007437190?__xts__%5B0%5D=68.ARASQoN2i8zV4-_glnq8x22h9sZgGeQB5hyohsvcb1V3t03xC64OJYti2AzGj9NyLrYTe_urQ6HcGjmslQmLluahJKG4pCK13oJb5dqyjdOBYGl3q2NDnuxjjK6gv1W9VEBaMneatMG9hFxs4AbJ378kpfhQAzVCIpbrvniooJF-Tcsx_L3aFyNlZoblkNnDFJ3r0aWz9zRuD2FY6dSvD2FY8_VD7w1QWDRMoDp4QeTkdzIaAs2wLrEiH1AkYMg0mTuAV0EurnoHGmrvQD-akEbfhzZJOAoUnDMbABlGWqtlrHBe4aDWKVp-we5my-Iaazyx3ugzbiEqMU_Y5Pad947WTA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "15 May at 15:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026386907441100?__xts__%5B0%5D=68.ARC_h0uyrOBVVt_rTvA0xoa2NLKIOnJpsPq8wnk9SV0J_lhV-ImvaY5z07OIP8UqVSxWgSrQLv_upW7DE2pHS5vZtvVcQtYDHz7LX0PTiRdCiiKOOP8_qsj09AWi4q0ajTTPShgjdCNaMqhAFxLmpJpWmQfnYx8cjVnNtRhN4Un65jgkvwtSl615YDpFyANgG6XkgCQcsK17H0me89_Qha_sgSIg1WSq04BxW9odMgci7Ux8QPoDtDxkIcB961lRCtLdRY3Eu2rxzvN_oMO2eb8V-7HJZU511MnkwL30ISTA8W_Fjix6cjaLG5Ltyy9V0M1mpN2FmmqY7isXOT778YZJtQ&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 12,
        "timestamp": "15 May at 15:28",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3026326464113811/?type=3&__xts__%5B0%5D=68.ARBWu6w14ZLF5wjfvAjsl7fc5kgeymhBakvR_9bGlhTO8LGwAHO9g0E7e-jNgAhw9Euqn4qiGL7yPoUqZCEuPf6HpW2LgRMRgxTAocul8KGXvJ0lj-7qY4V5ixsuj4W_OobxVMWk3qutqRwiE140GZ8buycDIEWMHPCx_xuozFFfOxTbYH9g2GoJLTiyI0XtKZ4hL61sHDaDmwDLpfufOENWhWve551pT33CB9Ro-PMhW6msHCbM_2g9VrobOW1A8p2dJTrLnaXcASAtFomeGO96Nv1vXKCFjcQkyXjs7-VkQ01qwi822NWq7afVv_hBEQwsXXYH1U9Efhvexe005a8NJA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 11,
        "timestamp": "15 May at 15:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026305900782534?__xts__%5B0%5D=68.ARCfpL6mPlp27Ph1Y4phDoSjxOGR6l1O0pRPfyhUKisPxDosMrnTXbxmr3BdOoF3ebGSvVu65YRAAdp9mAhVmBuPSOp-4SPLvL_UPmsAOQ9khjgqcxYQ6C9pYhV7_g3p7f0OrZ2YWJRCn69yFunYhyWZeMzTeczjgcQYU0JZ564QVMu4zZPLGgx63l4z8PodL89ZIoW5KriCbbxEIhkjE5pflgFdXPMLoNlPmaGVI1HNskXomMIlXP9YaEqJxSs1f3EVt6BZGot15KjTagIovPSykGgqU3Bw_18dAF808AxufVBm7A_LatAH9Ce7hHnPjp-aSStdBBqD-drw5kzx7WImbA&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 10,
        "timestamp": "15 May at 14:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026255717454219?__xts__%5B0%5D=68.ARCb8i3hMqnuMSYVZRBARSrJ4JfaMeBWLvOj-JZUh6p7-cR4DORaIqpQAy59utII2z595r6VxgT9C3pXKs4DX6XWV5cgvimVYqlrpDbXPXYQ7HpCz3dfdGcfqvwqrEqrMxtK09J9gkHWc97P3MaSolwm0muomwG_EL3F4OEedfYo9lYbRqY5pruzV9xTZ5myNos-FDLQrKUjcWvlKQ3XtSNqlWLYdD_-flfgkef1DPNmtclAN1rm2gRr0v3u7NACQnipk0HrIeFEQuc-fjAk70RiSlZkkfOTtdUXuquec_SCQA1evWbtma5lx5hGRhmk5ToGdlMmsA3uU55VQpsCaUxszw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "15 May at 14:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026208487458942?__xts__%5B0%5D=68.ARA8fRUee27XCd9IfY3hm5bDrTqMsrqbbNnVdpthqh60qEvY-KKmuo8ks4CsNQfxYMILhJZC1c-8GjFIIGL0f7U7v6lgqe15wXrTJajhYJu9czgNpKYwELl4RHDK_fHwTpgo-_N4lW5EmS6K5dMlMcKtkYGJWPYZa8G84iehjWQKNRUBT5q0hUeIekpn1vYNhRmTkfYL5Wb8qjm2v7ijmsINKEpdajlHAt7OW4stHmNACxYNVY8k6b1tMvJpzPGo8Hx6p92ChPfY1nZH4tg8003cYCFEntchfXaiBpERBbN7jMMRnRgzQfcmN7kkMdNSSMugkVqNTsz1AlTkvRpNbW9mZA&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 13:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026110697468721?__xts__%5B0%5D=68.ARCT_H5in7upvFSEpApsv9zYYpPuAmNOjVWdjTvhq2vbJLpMYCy1YBLBCAUGpLrx8g5e-mqzbKYNtvgMEKT5xXq4EoR4uUbnivKvpOfacnPBK4aYLysiF97bUQVmsjNBkzYUKEYVZxRbln7rb7JP7n2WCKBp099_KH1t1wXTbYiWgpsHqECWOA5dY3ceJk02rpFR14NE8Xn9bffHyMxjX2FLqr4x9kvx4wUKpPcKWwKYkDqonwggnG56H_NUH2iKYyXrx8gL9GaA9c8XZ2IcMov0SeY6MZim6SdOeuZTLK_K_OyPdsPdOVvZGegRT_bB0XOr9wOmfdLH4VS_JJgaUnVXeg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "15 May at 12:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026065184139939?__xts__%5B0%5D=68.ARBOG-FPjtsef1KUGJT8PktG87ns61irT1N-_RIjgE7e770ABXYF0Aym5hv1qeplpT0b43tR3wl_uj7M9ci_sxyWoElAt_CjW7Bltue-ywgw99xy0EkHtRIYL8Pf_qFmyANwpuE69H1hofo85fXmJotrzMNVBttQOia5oHqPgnXO_i9la8zSwfIF-uBnwxGXG_cBX_CLfKYm-w6y29fhm-HwhBqExNAOq1pBQu86P-9str7wRYm5VBtF6tSagR7ojJrUIB3uYxS8QsaBq16DWvrAwn6txBTO0BfCanESNtHeQMsXxXb56edMvGklDAzOCKte40KzsF-GOiHRYSd97f58zg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "15 May at 12:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3026000164146441?__xts__%5B0%5D=68.ARCX6vw02yVDk4WZlSHWxlbryKYbJUMvnFoMk4DrfSLbwLzi3zoXxbshtjGx3iHK2dhDpuAhMWwudeRIPNBoaXSYhK1dvNu5AVF5PTFItmyWyj_rZMBHyWbzCDJ0VwSJEANquMv3OkCLVAE40USlgFcHlr_pYRmnWXxmCavmu-ZI7ijlebheRRriKfP4PtvkByN6JUBd2__C6D5NY6PQwSpjS6v_9euHLo-OpcU2N_0Wkgg0dDqa7r1_Uqb9NnsMhIa7kOSzGjE2yijBOI8kFits5OSzXcWid2cPHr7042pGZBvPWsCBS4c8WNht52YqYdT98HekTFQv70Nsih4YpK5VnQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 11:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025981514148306?__xts__%5B0%5D=68.ARDA5L8z7oK8nJrEMK1NleCfnRl9wRrMr5xfclDaagHNpfHSLCAtZIAAdXEMnEeYEL554iUqtHXFma-xaxN22naKIRLpZl6kkuzezYAtgb4Ubtn3XFOC-L5-Zhr--ESlYpkM11GAAAhLeNLU6dthFUn4zUsj6P4uWA1fNv2ya-lnFpkqSnYGMJ17tm32_vAxAa6O5NIr0mnXmpb8Zbgpw5AufjJVZDme4Qi_EhdpDbriv8bl3iVG1Ef3Tdz5YLVX3sT6SJZ32ZfyXh-PIz8ZlhvLzTz6ZT-GDNSsyqN1oa01zRt-xuCc6jjynAYjiTX5ZeRnWneGPIEerXgnSi1Oj5KMOA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "15 May at 11:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025924737487317?__xts__%5B0%5D=68.ARBUJt6JG34jQ9O1PcdaiRlFDEM-4sYJAuD3J3tFroiY3hCiqCOahbQwSLV5UxGOzJZEdl-6EZJYmrBTzIcgZspXIYeWCzroGmqs5zV-UM_HMakCr-5SYsq2pa8e0VLraBi-HV93Mu1wzRS4E3WIlKdQ3NBtqm8GX3LdPkrdw9lq4dfyqZSvos-1Bf_ar50euTNCBXyodvzo4Vftz2GU9VAtOwqMB0R1pYr99xKKIjyUnTVuYgDaBo7kz_D-fkAs7e4eN4iH-N9oAc3avKjeRVccIOQDeNnlkm6kAgPoCdiblAIb-Qywep9PjNBcuiu_NjU3ZThxn7LBWxS7TACfPQ1liw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "15 May at 10:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025883900824734?__xts__%5B0%5D=68.ARAjYVIYS4QXb2gQoLUOfeury18W1sAe2ga9BLa4KJjHi2gHYw4q_AcyQSpTkCJ3xf7Ncm9Gwe_AhJv5z1vyOzOwtZCLl1iN5APy6AjyDhkPiPYpN4CUAwb4yETFf58Cz_4blefu1j7TyZH6dVz4StbnoGRlayCeeLDx8jzWZZioiDQuRyGDQwuoo1g6ppcGzAI3HGLskrvKO7ISljxRIJv9hSiMqSxIAALDMtrtdqQLq7p_XCn4s_3tBRhrUE19ub8CDrdnA1DvSyZ8kvPnsLS5iYCaKBX3W19E9hojB2BZH6WP2yasf16wMQB0yb48LKK5ecZN_CwkH4qkjfN_gTYBoQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "15 May at 10:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3025846530828471?__xts__%5B0%5D=68.ARCIrLVH7WLPMlqnJVz4tyljRh1-K4MmOZQ706cxSCSK35vDoc5dfHrmvb9RQG9EHscOrDSIJSH6-CoMGJK4MA9YLhvRVcoTjGMa-OHom0yIY99963clsy5Y3EU8PXkV8h4xGpCjCNFTSpFX6HjRwJCm1cOMTqLBnKbYX5y3P2eIjQpfu3D0KppCoeqHreJ-ixTB5hHo5Xeh47ebUgoBWb-IOc-hbyk93KM8JcjNEhedZPjr8IabqaGOD0noz7cUktFWr33Xcz5XkCS3QqncnX5e8Kuy100TyYsZuJR6OB6CrzuqV5-LoAaZ8cN7tGoMv96MvlvbEF22nd5lyXfjAUexdQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "15 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024669224279535?__xts__%5B0%5D=68.ARBTlomNmkKfItaTPvZHP0EGCeR2wNv0RyxAEIw6EtwpRqrYdhsu0GONKfv_WyrGEABvFUNdSgpQ0nTKnxJYpOfhwnG24TfR_gDTUwtLPaxtkQYrmm3oz3srE7oKkdGIhYFFlTRwwZphjfh8_bIVDOU-jjxXMjVo3mDXp9B13lp5Q1DwWqYlSkukGEVhrkxT19yTyu5G4KsZs4cLjpeOo1RQtKHpn-HGOU4ou83RHxG67_38zu09wDQ232fiiuVQhn05Njm9Inkj844Dm2jJYwFzj6LJ80aUPmRlJZhl1NQCUnW0nu0O__eMwzDOH0_aV29FzJ0HWQU1gciAeGc6kvNpWg&__tn__=-R",
        "comments": "4"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "15 May at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024664797613311?__xts__%5B0%5D=68.ARCMkqVPogf0yhEOUCL-mpC-JTDGoBiW_DQXIyxdT0y_zuL2BqlmW2qDBgwq6O_kw3xMUSO_DiL1dMyhe4lhNptBTdtp8bDwEcJAtbLyRIlXA8UAEOzrdfGeYJqQyAJtwUow9SyH8slG09ibNO3qShUjB87q8xMQy7ka-OL14SHE7E1u57LhITBO3dcXtanu9TvoNanynkQJT0C_0CvvwQ60T7mwW2uznC5MBBlnkNRb_-Gsd7BfxRXLQC4-uHU_2g7lqic4thmztYUqRwxvF7A3wf-h0idMeOwdx5dS-W6iF2LAMqZ819mx8PjcOnn66Gg0G-wYVGhnNAzk-PJmEEhrHQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 22,
        "timestamp": "14 May at 22:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024678490945275?__xts__%5B0%5D=68.ARAJg68w8IAj-G9ohy6n_9wMJuHG102ZR4olG-SWTULf5BzSdzWVQ7FgTgSoORozH7xS9k8IRm7B1lQqiWJxHFgRSdKpP-H3e_MhhEYlrEW3jDULW4T2CQG8j0WGi-SvEDtVYFiyz8e8bSaC0CVF-mlUU7jAVbpRXY4Cbb_U0GEDCyZaz8cZb_9WfQfktoIXP7ZRkggiFvRnlpwKXh4L4WgXjAgGeeUlKnY5YYFkNgcF6W9pnyMAQx7oAyaE2LfFQeNINSgNE9vqqm5t8Di634RFGF-f-CNl-WXVneW2iqZL4dQXlVfujvRvT_0cxr45sLUWyrZNQRCv4-Ax37RR-g&__tn__=-R",
        "comments": "72"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 May at 21:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024574780955646?__xts__%5B0%5D=68.ARClrPCjJCan9Il9CrsyJfJOf71py7RDc-pn6Uugool9GrwUgLEtFot6e0mAfA4LRqC0JGZ-GtQc5sQhujj0AWzmJr3tGgxs1SYs2TQo0CavrW4wWTO4ZrnotH6i-wxv2Tl7dK0IofRVZNx7FUFWPiGFUqj4smxtfuba3eU4OSdLHfHzZxWzZh40W2jJhTr23tfO0QMM-NLak1JisJl5Z-Qo1wrkvNuP-eYnSDlSOfVLFOxyXxooNqbMpIPCJ2G5-fRhErv4z8DQ-Ut0Uc6dybfx8YWDfBaJQHfFntXqQBWgQoJX9QS9VpRsKX-xZVSBE9M0SshuHYkggr7sVQamDhrtdg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "14 May at 21:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024498827629908?__xts__%5B0%5D=68.ARCUxdcPpESZFAbqr-bUImgJ7rt7m_TzHeLPwIiKKVmMDIkEd7i7C0SuhyzVcdfIU1kAbulsmc_xweQ6jxsKtGl12gtIWZm8e9QufhLgDPc0rYU0i-DiqeRtNh_QFVL6rTCaSzYwrlfkd9Uw10VngHRXBdceJQE0VrN8Tm_74mDB9DPhr2G2H1LF3vtZb1TYBL904F2RVh-_zzLi-G8Wi_Mw3f5GYYlmEqLFb3mweYOO86ZH3x1sFsFS2o0LnO3k8gksSOdXh2KF-wOoIDIMGKl_TSsYDVWnhPtrz0nSjZoB-bJAmJDNkICMpwqJpM8yZvWKwLi3ltSrXdU-Ps7sSbQUbQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "14 May at 18:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024162954330162?__xts__%5B0%5D=68.ARCIXT2jRMnwDJJ2eFq4HyBD9OhEutwvLSWM_81W1RfX4TCyoA2kfNAemQi0qaUjIqEalg0BVY12HXLG2L-Bw0r7FnlJP6SA6Li7esUOddf5NGZ7Um4egcHEckVF-aSn6pa8jH74zvIzx1pgrk0501gKnBelou6BVmMZc4Wz-yVpFFdfGfiBYt9evOo8ebtOZH8hOX4R8unqQRcfN54ENXdOU2bwnpcq6XmPkSCQuDAiyuD9VPjoU5N-pMxBJJBZx8tOYi8IoksMUBbKgM0whieMCzNT4N4ogP5PNi-KhgXqxDMQLfcvgHQYOh7knYy0ms67rdt-acW2DYGt-8PmroBMQQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 May at 18:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024158927663898?__xts__%5B0%5D=68.ARAuavZxvd2YKQ6kFVZDG8NoLm1c82bvE1buQcTNqyRTu-x4zo9VSmPFyfHlPkF94AwC3-bkcvzXkJyiivQfTcMUezm7-kcILjyVjcn2wItTX5_rV9G2P-xF8CryagfMaABsKxtAEyOnyqSRiXWftMpDz16um1B-IWJqB8q4jL1EOYZU8gQHn411k_XZH946GicYAoa0uifrBGYBJE0pTC7Bpkk3LhAktRggIJYIZEXx4n7HQo37gvKoot4TN9aEhdzsv1ces7CxCij7CsgcWffapPSVrWAqlw4pVumOfEAqk9GKVilq94OTz5wefbaAlWQgWHfhYwHhb6Xr2M21xx0KBg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "14 May at 17:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024071011006023?__xts__%5B0%5D=68.ARB4tCXusvn08esgh81lvGua3UG3GQLHZDd34BIS2OzicvYv4yHh0KJP-hy5PDI74cyixMXR4Y2LyNcHt2kLw_Zh7EqKrV2dwKdj89myGKR6HqkV7PfihSOvpNZjmwpY-jqsdq6f3c4UmXqXZEyH06IrmyHPwLzFlxJdxiYwPTw9TlRfeakrZBi4q2pKYLxaEy53NtvqNNuJoteypbURdVyARox0CyBoxxSvP3o1vTNbWryOfbtofCHtjH9zTyKntTZ25zmxvKVpsLyp5bm0HG2zitWLrnCZNI325n24fRGX0VimSPW2Drtz_A1wGOv6p24IManVgogmmH50t81Au3tcvg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 32,
        "timestamp": "14 May at 17:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3024019424344515?__xts__%5B0%5D=68.ARAjl-iMl29QsSSvf6GyH6wJtbHBN5xTCyZWosLRwsAJNRAqDxgem5EsJLs-6tbm2PsNywIMZbeyPqwsnGt9vUGJrE7VaUDYebhnJW_76IPYaOpvWPyX7fetWbs4cemFv08e4PoDxix6tplyCHztVSl8pBeV45U9GRqUBWQm9VZMFdDtDOXdeN0j0y7Nu_K8ynCuA5-jOh2H1b8ytjb2h8uWX7vh-Ine82wPwRvIYpUvYCdP6SCCY1ArdkZOVcKBoPruvOHTEihc1hT6PRB2wTD_6RaBnIzwJdiQsxMNMRFuEID_geIGbfjkYfCgZdp-nBXMXjh71GufZsWe70yziJ9pXA&__tn__=-R",
        "comments": "26"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "14 May at 16:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023903084356149?__xts__%5B0%5D=68.ARBzeCD7gxTp1AOdeQ1KghLJcffzRjxojY3AyN4L96tgwfsKFPmf1ke0O-nbMINOLHjUJ8lR2UleiE8L_1nhW_j29Mu5rnta--8VNQ-xUHETOCFvRqURqMEc7UzJLBFsuWy_GSGmug6vNChxSs8Yj3ZBlPGBdFw26U82SYgFVhv9-Ehn0OQxFK9ys8WlndKWQxru7p4IGGoGv43-wLl_VeFXAl0geSiVALyd3IZ3CYRG5OLBwzJ7VpwLKiieHJ20mjp4PUrSrGmq-jAQsWt1al9jxIxqojMUAJM7xAKtcpKzbMsC9G6UlVMYvuE4waUYM2ut41i2gr79FOpku48aABp_uw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 May at 16:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023882784358179?__xts__%5B0%5D=68.ARCUuH-qK4csf26yDCB7TK2B9JkNNhOG8E5jfZB6kDxzoiSs2RfhYDK7Q86O8ZhDp17woDoNjonhfY9D2gxmAm3RuBxZDHaTZ0sti_dMeITb8AsfDxiDF9K6Ec2HAiOhIcmX-0axtyQIl-5PYnkKEx3aZ0yd7OP03hwWGzZ4K_hU0wetwFf9FTfsXNxYHQntKT1Vl88UyCmLbfPV1Vb4t6DDaycSxLvYr6DPqLQbvZl_aR7BpKoHzFcQgYyPbss1Nr_BaoWtidVnL0Jp1YjMgmAax7vhP_ifFsxhMY-avbufxpHMupEL10_CKpd5DeQb1iN3q8-Z04jw5ttNajPkqAssaw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 31,
        "timestamp": "14 May at 15:38",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3023839504362507/?type=3&__xts__%5B0%5D=68.ARAJ0nZEmzL0M9VZ45S4AX_yW2_u2Er_ocPeOykaTcr7HVtGHerIlONF8-Vg4NpBeJPO4wG4jpkWEhpvYyKePJQ77TI9mQ3yuoPmImEBT_Xp72OCT59jiCy5eJhXT36SA7ge8yQ32W20U-PeZPTEdsuIFXYlFemhqqk_BU8r23CwNRV5k1iQG5RWC-cfgtkA8aeILL0PIdmhd1vyEeZKo7lDkhDX5gbMgBnZZ04ppRu29ocwJ4_Qp64bN1LryoO6SICLh31cBCymR8dln7AJye5PwYWQ3s4pKfpcwNFFKO6TgHAsdv8WboErn4fPC8XdCxEZn8GgV2KK9qUfyYFq6ifg8w&__tn__=-R",
        "comments": "53"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "14 May at 14:43",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023745987705192?__xts__%5B0%5D=68.ARAF7rzlvlUDpfijBocj4AZdLU3X_ezvkhpTLJFESSVaaIyKOL_UaBSBDS9EK9_FcbFznUWIL5kPI2r9XaAxW1rmCUQlmmSglfHeAhX0mDxHrN8qqJrUo6HXV2iaH4GMNaAySWaZCztMne9FnuLPytS-Rq2RTOqJEq1OMutWxEII2MqJaEiBuS0ZcghtzeTNDTW2HM69XiWgRI0VTHYwO6bUFkTIRnm_j1ws1EHOxVuqy-GbTiqtYMkrDAxRIXYtceUX1NZDQesXSN4E1V19GRWHUpiQcwdf58x9Mq40I99r3OSAOGbZ5J-uc-WSCsY35DCK1jCNixgs6A1lBxZIQBcJMg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 May at 13:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023662321046892?__xts__%5B0%5D=68.ARAXQOEm3QdUPZI8tY7eVnTq-Q82AlINZ1Dcyo7S7K8E_2y0E_fuu0Hmz0gJ2dLEGCKUZj1cS8mVHIs4qOznFHeav_U8pUQp6yqlPUXidQ7dfJryK3vTzQDNNhlPRzEhfhsARIVuwA1FXfI7EA8nmHxedsalR5mCsW9-hJ4E1hL2tFwyTaY2WP06PrGE5T1jcU5Crww8f1MmXLCPUEJ3A34OiQNruTWMhiJiFwOKOnwnAqhONuxF1_C0BGDeDeNH0Cz4QZZT6ciqKEFi1Kt9r6NEP2bhEqHqfxUp0xj3wGOFgHSN2wUj3nO84OKlaIajInlb5ceDAjar93fQSSVPcJLeJg&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "14 May at 13:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023572414389216?__xts__%5B0%5D=68.ARCj0byOks9nMESHOq_jhfb2MaX65pcYgyxPgN8u_R39rc6tc2z4m8pyh02bq-LUJpUk5c0KiiMzxOE_Lr3Tk--kZfN3bXOR7t2xF6-MqIAnEA5vPiDcuXK9i2R-OyyXiFJ7KHEVe38Fy0k_LlHN6a3ENhI6y1ETS2QSLNTZvEBrbCttyvCwNaJSZ_VRsD4PKFD72X4OIUBYW4IH7g7G1GceFJ3dPIRuajZ4AQ6hgRwsfbAT7npfMK4EGfLX6eJroPNpsF_HDLRiwkQHz0989eSzADM1d54AbmAmwkkmmGETrTcKjPqSYS85i6cw3NdLshABpMSmEYCf0eOdA82HYvDuoQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "14 May at 12:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023501404396317?__xts__%5B0%5D=68.ARC-h_n_4ox0O0J4CoKvEhupoCiQZuWv5pVZHoX0LnvJKDPJgzVZmkR9ECnoyBmlGin76onpQiAK2Z7XtzJjLX5Y2RGD-pbuFldH7Sr3Xa4dFDQo0xQrjQk09zPibpKQrRSMufHk9xjMk5Ogto4PO2j8h3IVPQVBckqxDpeY59NK7IZte2GyiAhgEpsOBZ3LjLTznpx_Zjthd19yMozNstS1aHm0E9-q3tsbyTWM12dffXcsfMfJmJ32Ztg7Kas5AmftXsb1PPOEXfD19Np8c1NcI0YpPK8aIJ6YasDpPj4YrBmQCSIpBmQn9Vo3f8AdSAd4FdFUjf7Oq8ZM36euawnuSQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 175,
        "timestamp": "14 May at 12:00",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3023447664401691/?type=3&__xts__%5B0%5D=68.ARAquLksmNFGS3D_cBSIosKu-UCbEQ4gv2ftaA2isC9zvyeDVVtHP4mad-ziw7usMQxY2-2hQtDHohRByCFqLViOOuBr8ZdGohpAg_qeT3vX1KYLX_QBdUiNtuHyBYSMY7JqEsBhmAVIL8d0_2KVc2g1ieRu_3Xl71q3iTIQn8fQ26hy6zzNL_5vkp7Ve_y39Ym460UOA7tH_OiebA4_BRewNqa1IdHSO40WRQNdPKHWAXhnK70RyTu7ZkGBop3G18DMHgsxYnP2KK3niWYfLU0GGdCEBot9eMqnkr9xRvpXVCCuGimk1r71eCiOe2BNdaCMTflJKRx_VGxRpsJKT7NEGw&__tn__=-R",
        "comments": "50"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "14 May at 11:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023418917737899?__xts__%5B0%5D=68.ARDmJZLU8IO_6ERmwaoLwtWt3CeaeUKqaIcIX_JU6eXtm7FWxA3U3I_Dh6tId0i02coXhPHePVO6ZzZMYCS4ZkABpOpmHEtq0nQOl9mL4IlXyaH6lXgxMgt6RhVNnNJXtBxzxek_AH7vne3Mh2X28fXUnRPONT5NNexCnjy28XDZXFg6Z0FF2DpmME2NZPnnCVa79sBXcSsBg12FS7re0ssFosu1xEwk_fAuC8sk2Mve_HTDhSNBxgYUdwSAlvuw57JwnrUDkoU9NYeHxYkoPV0_Xa62dJ03yAR_jUFq5Jah5bEI-iKKdJFJ0AMJezIBT552heduvkcqqLOyBjUsooSm5A&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 95,
        "timestamp": "14 May at 11:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3023364314410026?__xts__%5B0%5D=68.ARA3XrFALGGhzzY4nDavZcWd5s5w62Ub1qaqyVsEmaL62b49KdSzhrR4_53g62ySEj7TtAb5fJ__qI6sQ13oXUE2UhybhqJkfQdLUmt8NCCvul0j_Yq4Z5aDvduoMkmLzk4JdH3CSneffDCaJVVyIgdNHpy54Ji5jqFETHDc0lObw04fDv4ENZHM2AYg6vBUasvUbxplA_vXgqBOVzTfAwADSe7Otm8eAPMWuhriwpHIrZ78I5fhCj3GM7fkk9n_Hhl34mY8TrwtZuT0RI7GQ7dSmZT1DZ_v-04Juf4ZvJD6skGvDMUVs-lc_Hfw6Dd5wr088XRBmhE8yM21UQjMhfF0Jw&__tn__=-R",
        "comments": "60"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "14 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3022167064529751?__xts__%5B0%5D=68.ARAGzLBMC998vrKgPaUCYQPKEynCw_W9uN_M_hLtyrosf5kPu_fiLSXZY4XOSAif5S3-ynZF33VSGdfovnsM11tPj03mswMZbPkrzD-61fzIPHwbiK-26NkIpKIs5VgcQEbb_M2mBow0icqYr34L_bRcBckmhJqsKrldfcAoAD7DCLOm7sJME7VHRusGiVCZZGeQNM3-Ra9xZUT4Lum0gRXWD_0-6XyGX_cxmrxfzVuWtHRJlgzJ7DHm2sjJhp_LcuMB2QQ5HWcIQ6pbgk29w8Gbtj6puoCZP0M5B5Y59UgCMApHwc8TP0_UlB2z4pOWERykbZIiBrqJ8WVTsHrCzSkQUA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "14 May at 03:15",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3022440127835778?__xts__%5B0%5D=68.ARBcp0cGujEN8hXOGJVOL9JtG4nYMIlsNqNr9bkkd4q7Lu3rRQAuBgZ6uRSes78DF-TtFOZpMmPNXOALZWdGZ0hbZmiJ8RQOEjL6HX5bn6LS1up2Siug5LJBtW4FD9LWSH6WUA6zbAWijtlJB6nA676rZkmPxYkcKwsrZHUuL4sbm9TUq4wW3kgQXRCOi78696rYw-uB4bKcHJPgzRwtTSCPJJOyxXLXXnNkUyETqFEplmWlUGqbkkcRp9OSdoAICTjbejYwSu7zoNzTijvV1n8n1hdG7EQ4-bdE3zjDjemGfuRbieMUx4JQ-ekWpl2rp1TT1qrbOnNxHVPLTi9cAxE2l043Ok_Tgoig4cgq-eZDOyr5CuJVxM2kVP-jySM59jMfiAFoYzUU4RxpmKpd6jwnL8gDmzsH30VO-Vg77hMk87m1KNdIzXurOlZ1RwyFvN4NMViu1FnQACP_KLHcvvcr-WC6UpJJO4yp8Y7up9cJi1wKIdMO&__tn__=-R",
        "comments": "301"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "13 May at 22:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021817677898023?__xts__%5B0%5D=68.ARALNOJFStWGz4tlPeJdAh-KJQlRgyRnOJypczvmVLIBNHfPZT-EZ5KYto6SJl4lW0TT28RKW6yrFL2Ca5QUOQi_0GNLJl6MKgrK4tfvw9YrBSnD9o9b_nXb_WoeNNhtsvoJETezJvG8qqBA1gaS_63guJPKMpErmVqrhTP42dqXyeuTZu46EQOoddb2ontYufIXyl_KwVAudtJy7FILtRorFMmMVQNL8BsPOqVkfFtR7e6-o2UxddYxGFgW5dFPYjU7lE21z6gsezX4tklX06qdXSw6M4cTEH3Z9tHJYw-1_mMa5PLR3xCw0gsDK2N2TA3lTKE93zwrmG881JDZXZ2LUw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 21:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021432077936583?__xts__%5B0%5D=68.ARAmpYeZ4Hy8XMtBGz95WDZvQq6XPqNYy6umLMgibyAnJNx_hWvb4uoDvcwG8hDVvVB2CDdeF0Qv9m_Gqh-q_toSzuoF02kWiFVC_fxxnOELq0oFNFMtvCnj-xwo_qVlU9vmxmaHVLcQs7CI5MawzYtGrcF_ZCy_PTvjhsSGrpyIgYRSe881iBLhulr8UH49xZL7dtXuF0R5ta6Jf03nDyPttz4Z17RJNOFV2mbDpWwN8QlHaKODXCibpOqjDGhkaMllyBE1EseOLLKiZeTRfhwMYWMyilkIrkN01h8UG-W0mTL9jfSHeOsKcGJ_armKdKqZso0M5DlS-6InyFDCyr1lig&__tn__=-R",
        "comments": "7"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 20:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021388657940925?__xts__%5B0%5D=68.ARDBpqkCjT4BJvfieCU1tQn3iIxgEkRMr6dyhI3pmSLPfW3IyRU1dPfdd2oJynXPUN9KQNokM-NSBxvmWh4KdHOMTNytnTQjVPxX5QMRzvd609XUb01WVdTToJ8uoFtDCe9bQKSaPDTHRCii5wKcI9CBFjSsIMuqMjNbn4rJGb1sZmHXBchrKm_vyvw4EoxbELrUW9SNwU1AwWv4iIzpzkCHiIEERJ7QIR4io-YjY1CCU6zzOSzU4cDNBURXoRdmfWY10jVbWJfYee0ijmbbIKq719MjkeyaXNMjzc-CMIkapYz5UD5BfbIdokc85pliehLXN6ftV-JFMe5KDAha1YU_2Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 20:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021470504599407?__xts__%5B0%5D=68.ARBn_Wbakm_zTfLec3DYXy7n-Pm5xRc5ZQ-aZc3zLDneKZfPt_4rSm17c4DAKdbm8jb6ExB84LtjMk8oRMbVqcP11c1SGqWAgFmYlGAOBYBizgdmWP95wNjyjIlgtgRrdDXsvU2k1m8h5-1uKZepTgh1M17INKR3U64_BZLGmOa1jTkaJ-PJobLOYi6ZUrf-bkg1pOV8Z34QzA1f9aLmXZaQ3wZHCVB6XBI1OruJZoRDTBxJKK_swM6yTLAyhh1yUMZ5z2DPdLMbXnIHeaxuiKhK-Dp_0rlURr75PWeTFFRFMAB3u7q6q8-tSOg0fnhLaEwoflNyDavh_huxYWW3DGZiaQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 19:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021467747933016?__xts__%5B0%5D=68.ARAiUG4aPloTsy2EEmNClJRyhyVUyVuygsZxGTRPEPg3RnO5mJjswj-gRqNwInI0mKiOrJOd72kFMuaJ55bRZ86BTiW3YGig9T8sdhp1cq8ElcuEfEQVjg4KRh6uS0t-DsHvp_uS3AIKjo2EMQM4WsTDTXc_AD2905iEzkOQ3ZEc5-DSLvDLnZoXxoQAHfnT83vMQ-4awJv24TLbWdrnQtX5r1ysu69Dsaq1Puo6uhKVr_3qRMjCzE9FLJdbY2d_OicrnKv-X32AQXeb6tG0TGWnLvnEieHIWaEVy4FVoNEvqhOUmvGrjMbP546rcyyfIY-fz9mbM7hFrReVd1JoLi0c-w&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "13 May at 19:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021409527938838?__xts__%5B0%5D=68.ARA6G3OlpCZSFs-rAa8uxhismCTs9154fRL1_fPwJeNWuktKQaXLSwj6H7Uundr_iTpel3-QdWUYTF4qErChLc9RLZny8HpOertfjJirWN8zd_jWFyQgJEDAWl2DPf-oVkhSIGoa18tb0p4QZPjT9sH6qsR9_nqFcP665t4qk_3_wULujRWq2__46CStneN6SVoyRv4HJvB3LaxmPpW3z1-wGJ52q_KhLT1v8JDlOgVZVoSmuiuSKm58S-vrAyrUqJ-sUV2Vp9rYUvMfwJ8R8PO8YsRCTh4_wyt530TxOWcA4hA6Jtjuft70n-2fbh1HyslLwyttxmzwei_Bwp7VaHSBrA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 19:03",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021361607943630?__xts__%5B0%5D=68.ARCeGwIRWur4YI8VmueWzTpw4SFoKcTHpbH-va81LnefZf7f3yX4Ek8SnJ5ymPN61yH9HN8MW1n2gpC6HZu3QVqmv1HUropf365RVLMmGv4VRJuA8A2IujJAPOrmgKLSSgk0TJInjY7Fj9jTZV_gU-W_FEpXx6VvqYTDIXZwCe1Cq2QMTAh7zF3yqDVxPq3fKoJOhyTHo6svwnlK98cUNJR9AVVZsZ_klidLUp4kvLMs-nTdNAG-mlSGN9lbygsVjPT6aXHT3-7-SS_N7eHXwFt9N3RAjyhmXwH2HuraySgSoencOxGIcKZrzznBTqPSuFMiOcKrfTRBa5PahFLYq5bcXA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 17:04",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021128994633558?__xts__%5B0%5D=68.ARAjCYv5NBA9Oa5ma7wh1Xwg8jUb2f81TB6wvZk0OHQfGAas4-3rufFELcSeCMajNbBAzRdWgESGviOd2d0vXL89ZElGPtJ8t5zhPI2G9m6vSYvO3Is2T8R9JVJRogMpfFgZx4O0rD255Ez9SdZl-gaXGXn7s610FsDD_tTYvKjqb3G5ToNRKhoAAxHrWz2pJ9Pgugu965C_HDRc8Qwwrk-SvwvhMgixhz5EAtdkyfsC8tlvBqV4sU9_6qzGcaXQEfShZ8Dccc_zJNYFcLKsK_F-talYLI2y_vMYAO0Wrceig2mvhlLmH2BRgonDk9PqK5CPgh6jfQQEcsJby9ALui4wCg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "13 May at 16:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021042311308893?__xts__%5B0%5D=68.ARCszVAC7jOi8NvzIQLccnjVYYbzWWDsLd1CqxBNWFxai3hObSXIhMj0CSleSw9XbKU5gKhG7nCkdNhd3cEyOV2Z4g6eiVwJ0McNKSeDBnyLCc-gAVB7JRlkdD7io9NTT_Klt-Wwd4MWpVVyEnnWSqekbs43lAgDDLU9naQI_fnquGSCXXBW-EJEEOo1CTXkas8jAe2NZlTCgZC9vYINTcc9kO49eGEro6ttKOV_HdFFVVvB1Agp5xbn7zTm8MlHH-3VQ_tMidGgsLYOPVhnbCsFvYs_U02VLQVe1XnLB7r_6wniT6tyCmh1bmdbsFxLap-Vmusbs8sKkAvJRgrgaNNvJQ&__tn__=-R",
        "comments": "65"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 15:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3021004554646002?__xts__%5B0%5D=68.ARC7_MGOWd_LkMLSJl8Jo2ZBo-j3wRnWDZ2zF_ie-QRveiWN-_oR8_aBvdtKPbnhAjJ2VF3LVgq0oT0fQ2aKlh_2vXrHwlRZTvni9eY771oA40pOQBBq1I2eOAl8VmNlBN5qmHDhf_2XEMCnlHO_hKsJaO_rEHO8OQxzZH3cu8hTesNeoA7oyJbYEvPI--FpirsmVAszMI0hExgUKaUFwYtjrM8Q7O_8b-VTK6ZRlkH1lb9qbPi4_AmfwQZatfCUMr_QwGxRMGwxEJrY5e2skgS9SFqoTszjIYMKdSuV8RjVajZMxV_2meB4kF_6Jx9OabdXUKjO40FEGtLmIFDbjFOeGA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 15:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020960341317090?__xts__%5B0%5D=68.ARCZxLSrLtOFQb_tNiyjQNgncL0BdnpBFEwkPkj0xac6O0BqfLpKBH-SJWpa1URbLO7F3FKFe5s2g3MFLnsEL21B0wd95_1OCgH5smaLPDaGRJAESi7mE2hmjox-7g3piJrsXjF2kFTWfny9pG8auZklnmVSXNNSmcAgSgwDX09JlncPL6i0JNy9IAyqcHs5MhkXVUMSchtu-RkDVb9YREb9-cRV8V7D64xd7tHNS8USpa6yxz2kegRPHozGagqnwl-0wTqfQpvYMlia24G3c4qsaaAn5C42LUix9hnhGp1PTOZ_SDbkDG18FTBpusqtNisGIe0tGtjDTCWQHmBcctG4ug&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 14:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020910561322068?__xts__%5B0%5D=68.ARBYNHg5PiGvbBAvQcYCJTRZfn6nmpGEZeTF8QM0OrnUsQvd_GCLIRMXr9fnLenNxANqvkOTQbh0OklO7YWpPI-iHQnCkTVsHHrJ8AJJHsxqrVnlCneqEUb0aQAeHqBgME2Mm2uVoEk0WVwL6OaoxXg7Y8GfMZ3_JeAoQUlWJBP6X6IOYowcNqbvDkEFK55w_HzBcq3eG2WsCrWcYOG7HJPFriQnLmWzWr1I6qVDH6MAv0A7ah_a_46z0HnlFj17z_fd3HxNvs35AdBVn5QMI_NeBDoGF9oJjGjPjui7vaYKYhtbdIa35QvN5zY2QLda1lGqpgdX4paYyWrWLZJ0Q0xqrA&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 14:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020861854660272?__xts__%5B0%5D=68.ARBQqr8XXnA-X2zRJVYbB6nZKLUnxDTekLrB__uN01Oy5fP9ql9-XN_2VZLDkxhyGiLwbWrmHDB3DhQOLmAr7EiDSlz-NR0_oD0LjZ1CZCnpFT3CMScm71_BybAJOPCI-AsEoIkWbJxNYKr-YD68ghrLH0K9jsO1wEH4Osap9Etd2CwTm_XFYbZ9wKDRQy2IWu4C7xRX33OjbhDZOgZW03J_h-xptIPo0NRPE3d9fmZAlX0_-NsX1u_SND_a4Q5CO6BS-joMn48S2tJdUKRTpq0qHsHj6qC36vcWtul_kLxemfxKfMg-QVywsI7WevLLr3_jGe-CZ6nmSWl2CLIAeTSJHg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 13:55",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3020817507998040/?type=3&__xts__%5B0%5D=68.ARBaJxOTJfLP-IDUzCAqxX1UZuKoESHB61skgyJkdj91rMWAbYZ8Z-3kYoFtddVQYijRQhaEjgnJmnav_8ExMSwTuVdfniqpaTTCuhafUCrkuWFjWxT6C75UzGqy__3muRiM-0ucwAMcQjqhcsy97YT25idrGlJVJPze5-z5rRKydBmWnMb3sqnZo2QPSs2zLAJxw0gnESH2njw1u4ImMaC0DPsIGz3z4nDiGY-jlGMWuIiVo6uG-NLuR81pKzvElTtYJW4pC2T0JvziOGbuPfWpKW6DxOyQsQNdEHJid599V2KZVb_Kef4HcZNm18mLVrx9Pu8xrxCvycBAqXQ61_6K-g&__tn__=-R",
        "comments": "14"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "13 May at 13:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020814604664997?__xts__%5B0%5D=68.ARAF5rM8B560zyhP4siyL3Jk3d86O-4t78_HVcPy8uEtzkYyXtFaWQx59bh3pPz11tWahla8C7vnC_Y9Btuh3GgcjAn8husiGLKJwvdcBpidTRGTDsTGS3Rng5p5VIuynXTeUUw463yGiUuv1LMpWuaA-clSkeYri_0kgrNPA3dRfexZaOiXY6vCksHd6qnv0GekxTjqE6U9rEYHR22aFCAtbPMlWIdlgr3VYJNuPvJWrPYWNidkWLSIZP6rx2-sG78OhTIIaKf4Ljn7c2BFgYXIW9tyhJMM6i3LreQH4xFUPT_GfWbYARTFkZlNYMepwgmka4Fxko1GOQ1KVhqONXcM5Q&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "13 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020684494678008?__xts__%5B0%5D=68.ARBQXryVfHpULwYnGTKSsl5uKghYEytNb6K3BBcCIB1qUAFHdggvjfVN9cecjCKQF9bErhtDXzsIZ30lWSFsLoMDd5bG7kbd8b9XMV1nUBt1U6vl2sbx4YnvVM_K0fbHUAfBLWEmAxdKDLZFD6JAVH8VYFIIHpzgPSUshH9MS8z9uI3WUAZD4fyJchRyIs3WWhRWLPZW4ykjEosZHRM1uPastahlvyB6I31_Vfx3r06uEz_7pFBPBW_0lmG6Br1zOtbmbU4gNfou9F_4e6k3U6MEyWLegfrLD3enO1aMywhsaj79iqZ7ZhQlgcZIYT_8xMPVPHJOiAEQkR0PP9wvzS2EzA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "13 May at 12:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020691654677292?__xts__%5B0%5D=68.ARBbuxgQiKZncYq_SwgageYtv3PZd_67p29F2cz0h--neag9PRRnnoaeYxrfjjvZSAh6ulVSKLK4nXZ1-IjunaE3_D3y75QECm9JyutrDFNQ0awcPnM507PrjLeO8CybzhbPt7Rs6WOupWFObcurxjo1C-zqPf2QFFIUl3k6QrGcs0C4bv_hgXdGFedtm_wDmPVhfrHZxXmtObIvK-FA4BSxSQA6YjlKDzAGu2t50nlBbq_3NbAjGgt3lx_rxliwr4W28JOuvUMtOqHuZoKfYBbyoSBu7wdLBVTw596Top3YRr09hjBDfY83qGk-pM-BT1RgMDUFRHwq3v5milYdg2FGvA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 12:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020651681347956?__xts__%5B0%5D=68.ARD1mNwxyMguHiJnkwXHIetJhSyvs5JESoChZhIOTE5E3IIg9GMwcn_egsQKuSbQDnW6ioVr7-mHoFfQBZX5swW9I0NtMwwm0ECTSvYo3fSbLyYnioqI-G0TNxsv2mTNfJK_7XQbYs2_CVyTx4Tmn69NBse9_1iLSK-rf9jVvMKi_LFK88L0jjVBZCn-FHfz1lFnQZXPMjEqQTOazmyl4f5XjrkxF9oPxcE7F5NbrRFfuTcEOECEW_tZihJfJ3rC6rZ2Ud7FEVLkSzUNRJoppI3Nl1owQ1dk9_tBOf-GLFBpkqZUhlw6Q-yc-x7LMM27LvoEPGWABBPvN2pPzPOzdfU5lQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "13 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020600881353036?__xts__%5B0%5D=68.ARBF46P27xajQ7WdD70MT4viqORL7lLVOzPlmg7t4iJBif_iain5rEj5pmBLZ3gvk4NUx76Anpm8aU9o8Pl0l37JZ7o_TpgnF3krj7rypwAZGP8jfvfsQmzuRi71NRqre5HznTi1SUDfSolDYACOuJCk50J9UhcClcI47dHgOb8uRJerEEuOrSJMQk4ZsLhGBdlSh0s7_eggA7GrBBWnSfpkJCo9IO44a3dPFb_th18gWnFGk-q2VQ48KNncx3wwPsWvllMIWl1fNzXqC7nA-nMnkA8NA7UMq3kbXesbeWwYUc_jaUfXh-rFdvq6fbQPtp7GbVRwySvFFnyRms5U1CT9xw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "13 May at 11:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020562628023528?__xts__%5B0%5D=68.ARBGfMeI-Q0bbGPXxp5uXg5cGBHrCwLj-bJvA2zUFjRJBzRbx7NmXqwzvfoD-5npq7SXxWVutZeySid_IkUEkIuGtehi0hLSJ3IOqVe2DhL42EkUMvMUUADenMQeWvAf7MwnUFYNKQ2oKYh1JHs7XOO4Uo6yBTH16dmFfprusC8LzuFJ3dgC3ZpOTY1D4krBWr5At7VkiAe41Sv7Yzokq9KnoPKkjmKEqubI9KWblzOdW-TTrv7UosdAixltsBsMK1G6WlXD7kTWJHCa2gQSKX2Fcz9tWWy3z-RaJYQK9mBoqV2irE1kaZ9qlyi-ogl0DzFmL-nFzostP98_cu2kEFs7xQ&__tn__=-R",
        "comments": "149"
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "13 May at 11:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3020535038026287?__xts__%5B0%5D=68.ARClobuiadW12EVk5RAujWe3DP_vPc8MpHv1hmRtkjjo0x_-R4TOQp4_ijjRrrEmrDlG-b5TRySBByyIG2rHBzd7-H1S0YjPMzSZlhN9D1ID-UTV6dfVG-9kOp5Etk2_w8lR_GaLp-ydU6jAsq0IX2pRRqGFalfDQt0KwefwwbZbpGpTaAKjULUixabIfNwjdcz4ec7ufFYFxzpvJkd4Lj1kLqYbwrV4GdlQTKialj4O0dYZ5H9mqOfw5KoUP51QzI7hVuHjE3cAwKPkjeo6CUUEG25FzVczpMFtYhliUVPVgAQzNznAhDgy1qz9Web5W3IwTbY1HkWmYY9ZuXuK_w94PA&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3019678014778656?__xts__%5B0%5D=68.ARAMiQVETJX7ctc0TvkW1G2736rSlo7dnX7lhiHVi-PYnGCApzsqcCjCMZDbBFmKJ_ruo_nferVf9PY69Pkl4224VShB0lsThpkHWcX28IuvgFLIe2dJHahJoZdsaNwgcEnfIP8R3hxOIvDaDPZiNwcacU4UZWFJ7ABsMt5Q4GvZa4VS9Ep7yJC-ttchd5-Q0acc_FeO2gqnZ4h5-RG_34EYJmTMEVxsb5CZnymI_el3OaLPM8HFjCV3D5YkRAr_vsKSZ1EQbTJIoxHBfnGLVwnrWo7OusqlZVfAH-PWRkTnD0DKuUt5O_kVYxokAS4FnBcGRWNKqY9zglHyOzvihuhVuA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "13 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3019672711445853?__xts__%5B0%5D=68.ARDbIWsqCInPQjAV3FhlbM7q9dO57izcjJqbH5aakf0BImBGUADlobVYxMY71nOPTQLfMrOeoKvtQRcjUlfxyVOBQSPAU6RhgD6E2YkKak58MHZqREPisEHph1SeG54ne1OEJQE18ZrXUahsTBTVpPpOEdQD3bzvQKHfKU3efxF48N8z98DuMdb9vh2XXDBcQiuk65TALm-GzV5dOtcsel0xuTCai0Gc-YGL1_xJuYWb_q_Kl-MVfylLAh_I4p3CwNvWcqOdgQDDj-1YQmDKOxWFaG2detSx2NPoqGbKwGgmpMVR6BKNasWIaNqHT7aDXFXqGXW6VXNTmYudj5f1oU6oBQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "13 May at 08:59",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3020362311376893/?type=3&__xts__%5B0%5D=68.ARBRAlzjk1AxfH7WRv92Y3CwmxQ1_Xtp4wFN0fBLtAaqV6IuYchHSUWzLjvXk4rj-eARiKtz6dgen2VRAsH2fue--j10J8O_9O--DJwZ7RrEaJ5XGGe4IX5cKq-vQQKwBTzrBmZnPnbIAdq95MIu0SZ-fZai9nywGCm91TqtWB7anfNH1wkcDynCoNrTj9eLKsz0Y_bCaPSxrk0Yu5NHY_Q8fFewzT709kvb2Fo37xsQvcWkqPHOsaRILWjrBIYNCWUhPG50m77JlTdDt3qA97lKjb50Bc-QhtyaXVqYmjEfJ5EbZKd2WcnrM6m07k7ioFsD4u2pnp7Mvfnt6KkVCaX3PQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "12 May at 18:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018799064866551?__xts__%5B0%5D=68.ARBXC4bTued-KPX2Q5pEQ4nrljbsDOMuDXtjRwjhvdJCilDFCiAxMlXzHx9FCDt8cUuSBzBVdtp0VXCnEhMRToCzoJV-6IiZPvaBhw-WJwUfJwrALX90IR6u0qQuJAGRgbXdaogi1mEM5ZH2yZLa837iE4yvGAPLYWh0UAkJCXf6w43yW5WkKkzgjHg6UoFOBsYzV-1nUJMia8iCnZdqU5Q7MZYaSQ5uG02PQKL2uA7Ah1gjdUNIRkE2P4QkY_fEbSFk4OOfmT3ACCi2cI5NYyZvCjLxfVYXc0DMpSWYnt44VoN3ia2FbCgMWAhwW8LYdmkvXO2tMcZtF-TwbGlnERi3pA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 29,
        "timestamp": "12 May at 17:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018709828208808?__xts__%5B0%5D=68.ARDo_jFU4CGsK-UbdD3uTFtc6QEZ6r-3tv4ssP55KRUFzPkdEibYouvGuTCt83UnCJ17CbyQIqH77GjQVNd4dP_RtZzG9Fa4ietUNt-6-jhG1Dhog7zVkaN3reQ2vVlDbNOHN78_TKYXk0wWqJ3deKPmALf65B2DGKjUTuyGzWKlbYWCPPqSadMpaw8iy_WXcqJvBav8oBszbmByo9uRzx0acU7xCP3_tmgsx-fZBHm3TT9yEgPWqzVizli33KhTru5Ik5kUZ3bx71rmRL4jLN3YXVnm-BA6_AzN_WaNexQRUmHLb4t4fUfuMLh6Q7sIkEftgCrNc5UCz8hcyaFnGx6oxw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "12 May at 16:06",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018557994890658?__xts__%5B0%5D=68.ARCe3rrCFhKNYYnbj8haq0xupU68RFvzgQsJgTlW22dfTiZcPsZxAd0qwQumjdTzpS7dkwg4-bhgXb4Xpex8_Ks-oSV8pqFWgdLJXYaBe9g8JCuj7kBR25ZCdoMbv1RsoRRmHbkmYbu547HM5uIxbOlh8DIo19YOTFqfcGLJvgzPDVxKNT1lF6gYRyippsZ33CvS4QXeQsTLxekCka2E5gO1V9m8E6IfjVBQqAbl-CFuhRSmxRXOBg64vu_sZuBUm_O1jqguKrwtP6yyoQEWSqKTJHcrwaFWx3kc4MZyrpK-9lrWxXsTflV2hEFN3pCyJ4VK_yhvqBKCWfDALy9cStJEZw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "12 May at 15:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018474388232352?__xts__%5B0%5D=68.ARBxM6s0x7AUsHC25AtL9_go1ChgqCSxxts87aH37ryXMPq_Iw-KjuAZfxDUcqUlMlsT_xXGN_Rl8rwh308eIdu-idP4Lnm41JPnsF2xpemFErWUX8z193IQMzpbfF9aGimxT8AcsdvkNvXm4ADheZW_Sk4Q3b8vVRJXMCwJ8BXIW8kQcqHiCHe7E1ojw3gH5KAjlkUCxekVjK-9_F30s6_rRSKoQtUqLv-7zMxXRPWn7udaHzQcQpGeJq99RwY1wjHo9jR2exG5p96rzlTQopFF4X-8MiqpmQMroWQvUnND2jqbDCv31nVAmW9a6Kr3B5LZZYXckUoA6gT8dugmy2EVRA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "12 May at 14:42",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018426284903829?__xts__%5B0%5D=68.ARAiEKmoHiL5IlPNCoSC9mbXkq5FTVuK_aoVdoaJ9TKzkGulhBUJES-SQZAB5kl_UbLtErYobJusk1GPZbF6qN1Zj2dlQQNOW3yZsXi0Tq9GSI0xfbKZZvTI0XW4IZJq062IUnlzKzL17hRQCpjKLXMAmVbFz9LnYq6a97CF-3GyJj72CjoP0Xp7HGsJgKovNbIiSHql10YyEBRIFGPq_CX9teuUpB7bAoy56UpjObeDmvfdElhSykz-43h44D44DjoAvCziZ87DcO1I5fG1OGOVhrVJ6EYWoPFoi75M_ZrsTfE5Hs0RnShgpzgynMruRNVAnGKx9irndOP1MBVkmcdi4A&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "12 May at 14:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018373124909145?__xts__%5B0%5D=68.ARDj3xduWdRn-Upti-QvAPbHXnthUJmbuejN-MD3o1VTivjTWFfgMySHhqZi9nkHlFP9ChEdze0hyGrv8AMestz9mau9VtAz1eIImng81XxjYBbZFkACxJ8DI4rc-Izq2nGwQKmC_yVsBNvp6PsgXa48NtbkT824bctcScC93r2NkUdAxgid9zdyNCqq5UU0DT7vg54lha4tLfx11zcMEPHgiIEEdQL2iCoAVa7gQFqZVZnMePQq9w1LJJgAN-mscFWY-kvQ_cRf80tGSYPQitpr4mcQK0CbDXskWEytMymlbbzhHpXhxrd_zpHnuMXyychfLcekUMCcjRes-tuFx07jjg&__tn__=-R",
        "comments": "7"
    },
    {
        "totalReactions": 0,
        "shares": 27,
        "timestamp": "12 May at 13:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018328174913640?__xts__%5B0%5D=68.ARBbqt8Xw0lbgh19ALKcMRlKEPYx5W2p1SHLiPy-dkCELrqkouGJO573F3mrSK1nhfzucpPCoC33fDHdmLFcBc7vzjjLXeaak2kFj1zJv__MeIpcCtI54WtZKAo-YpnqngzuuGUGeycpPpEe3okCAqzAMnMWnYXvNDLsdmqalzi_iLKO2pEgpbEUKWkurhYiOBqTd9VqH9VYkKXyRnZkOUIIG7C8JCkqiZSSpuB9-zvVYvFfeI5n0gTS9x1DFP8xjPnGa-bz3L6xzEPRQ4Fn3xiKCshbpzd4V_cZ1w1OGjI_aCrIynl1OI0FrQ-9EX3-S3cCZl4IB662wOWRUYpFQnXcOQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "12 May at 11:31",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3018141124932345?__xts__%5B0%5D=68.ARC8vodCCdgFaSFM_hqTxk5f_Vf6PKf3QcXyZyCrpMpj3-r2eNf7xgv0Uj1tqdmZ-zUAWbCHp7L1ynMb9syz5m6mOeqkYvLJZTrgRHo3Z1e8K3OOon_yXWd4BD-5fWJa1t8Nq0s3-H3EpP-WQCvwuSUgC2CYPXglxpo5yPW0Rsjg41wxK6xEz_EbKrVFPFaHdqCP3goV6bwMHAKJqL8tVwtzEc5W07TqjdXKmLs7rmDFmNdCC1XwS4Fi9scemPOdJkmqhGVuTQIbLR4smw9G_G1gG1AueHxtPJjPjUN-iH78BD18O6BKGBrAB6MIw8L-HQXCcGHmAW3qD8q8dRr9k0orPQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 36,
        "timestamp": "12 May at 10:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3017167278363063?__xts__%5B0%5D=68.ARD7wXTEyEqWIiIlc3pMXevtZcpxf2SG92NEjxF-CUm1ukSLQJXVbpXJ8Oddcns0AY5Wl_P0XxW02UkWTfJiLvAdn3gr02crTfaqOmzdm0fMSmABdGXM8KtlDRUbvP1U0JGD_UpPYRBm50S_mgV-j_b33L2hPFilP5TtNXpJvJCakgm1aNpR50B1nS5_eitQC2emg9Ev9GfxcdK96yCzLxjzGy-00LwMPIrjvPavgkLxTJsdFjd28lOFxX8DboIfiUX2pSv9nhtYLOw4_9u22mLDaVKwl0gF7u_VSyIU-lrc9Erv3SVT5nd2_M16mhd23FWe_vSyqQaqjKKSsRYcIIsCaA&__tn__=-R",
        "comments": "28"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "12 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3017160041697120?__xts__%5B0%5D=68.ARBG9RxBAFrK50oobj2Z0G8de4iJ8MXy7qOVTit6RmP9CcQzjFzlWtt8WTwosq4pqFPSTo_Wt2ZDRXeKepQl-VeG_hdtcPUbQjbKeYvOSasms3yvtruiF_0aAVw3rLy_QnFAbf7gtR5jxQ03TLWFJnUOZB5Pgt3ZUg5d3Us5Seu0pDXpp7rUR9wxgFVVHbPJY1T3eSrOgXCaDHPy8SpZvjADMIxTRWTv8l36jmF8lZBNWxki6iIkZWrYueASjlSIue7Yw9miIcQLIz38aDfpkZCyE4Qq9E9WDItgZFjZVAC_02kuHwMMr4qfToTkNwxC2kK9zQKhTbV9UCOT7C9m-3wL4Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 May at 17:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016414505105007?__xts__%5B0%5D=68.ARB_o8xnVfxwpOwiqUE4mK6_gDgtCCSmgARJMJfKvKgSnu-74QngIcgeXSf-2PUWo3BRsRyNilzo1mbQnaR00gYWTAfGw0VzrEwiuLwfQrFtZO1ifJVj1zxQEhtozaDTHnG1FASQ7DwhK_zwOSA6d2NpuGghKt1LQvyIMq93OzbXz0fu-mukZcpuNUkEFtjdJWx6vvyGUpZSeZtVYsv3cU2fqRCjwlxMt5_GX5n1kStBl3dULdUvfvRhpHcWrAICr_nrAWV4_WMjyGFwfXBmutqzY68qXiapjasiUvj0xYXV9ZsWDnTaV51_7XOL9i-XwkAG3ns5fsY3njABuBct_FpmPA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "11 May at 17:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016323788447412?__xts__%5B0%5D=68.ARDmIr46y_-2gfYQ2uO4XbxnsrtHksmhjn1b0bZNsB7hHiEA8Nkc9VYm5T8Q-5IqLnAcfbskcJ8YUWcGdr82Os28neRzOeIMInqAPX-Iwxrr7BVuLQclDlaqohuMidFm6ZT_eEed9LWZw6EhZFAii3xqFukmTkeSkzAtEE3xLcM-nFXlROdPGf52rjVEZylrYFwFFOVOJKdy67ehqPSPcPbkCdF6sqlayeikSN_7NDCXgIb-YKtd1_yNwXEzsxgiPxSj05MVWx2L_RbSm1Q69rAXYH5v4DnKfqjnBUCjBI5V7NUfcQLzlKHISGUZtl_-_IiPLegPIgt-OemRRX4NADUvzQ&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 May at 16:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016241775122280?__xts__%5B0%5D=68.ARBvJ8ZssDsqdKVwdYuUz1CtWK8EMp4UzKLZqt1QmFBNX-4rqCsIcKJ1YNNTh-Ml9ClId8tAEmT1cfUcUYYEfoerwvHwLw6OaxLqYQE8q6q1ext-QzMQXw1bFb4ux9jY9PXiztB4r7DtPqRhrCQJYs2lS9yuLE2cPRSrNcMVNJRTxuhzSDZIATuOE4__CeQckyrWMcg9aOqrOOtONA6T8NoBKxmVLd31YDCRp4yVy6T2cwwSB5jsY6eO-wxg8-46pkhi4_aV9LARmmltSrkUqRHEVJcAkCCBrHRcqvfxYg5Fl80wD6Yf8GPsVwrpbQDxcWYe36qH8R6IfvCVH1K27DqIvA&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 21,
        "timestamp": "11 May at 15:25",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016147991798325?__xts__%5B0%5D=68.ARAjy5N1WjMc5_ndREuWQygxgMRDqxEOjav4zSiRnZMuSxOUINGPVOkU3wn2FKWAcUgOs6wjKaOCQl2PCkX2hS--tnLrLiGjLUrjPklEbK3tywIDHi4AQFCeAKUdFpPG_LaC8-YVafr4ewo4nGzXzZnecC3tdNAY8IpAROVRtgDzzUFYWXRMhaY0uI0INLkHR9-4Rsms4xMiLqRc7OlFTDXpr1RlVJaW1xuHtb7N85xtkeNh2P2T9S98X_2VL73sI3qY2-vVTTFxEcBT2D0E7QajFXYl-Ge3P2fS4r8Ufo9oYEgaf2SaYeCQgvzpyAUrj3tiy-BFL8nQ2Sj1xFfg5ehMmw&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "11 May at 14:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016085665137891?__xts__%5B0%5D=68.ARAQlYcdym-MM3jK0Xk-S45kaFdcrRDuuolnRNvSKaTBn_0krK6VW8a_QdD7dqoO1EjeluEY79Yj9s1R3iZZvBqZKfgbLdYG1DjXJbH_qKFbqi6rQLXYJuQoS6QAVgpzyfF8D01EFaiRyGOOySPE1TV2GkWJpe0JgKQtM2wk2YT67tze9tZ7fwyTc-p-YtyK3cwYbpZqEnJsDo3P_q8LO_ELc1Y6eXdSB4dIChsBP_8h39FKFcG0mR9HNh2LD927MtPIzKT4COjyMPsOtm4ppeWkf3MptHDMCBZrS-YM_98SNur7WxWUBdyWTlDbzHFFJdx3MX_5yDsz1mX25lj4cc_6sg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 May at 14:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3016045615141896?__xts__%5B0%5D=68.ARD_CcfOEYblLXwh_EZyKxi0I-M5auMKt-lOzJUKeqFDFZ9oKyEBurT0lAr705t4pi9d6VJhMXaC5mNV4tPmNAXhVfykWlH-QH7Fo0pUIGhxGu8EOnieOHnfsyPujvvjS-g5GOOcyPvPJblejgHEFWRO2v8sCz4L9ay6W7YPauYVsfNKsROf_Za6y4hmjNSy_uD1IJdjYf23sm6L7g1R0voKBO6JxBZPiLVLsZ6yb6JFXnKj-LgJ8eNZCTAQWuQzHS1ve_OpXIW3WCLqjzmQpanj_j799u_xZvnyzyNMZuyExiyakkmF475MI8HdZVcf72MiKzow2R77FSnvV2qFtjtS7g&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "11 May at 13:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015973371815787?__xts__%5B0%5D=68.ARAzafQ6bDX9_Q2fgqmLXe9Hg9ckoCWYaPuCo5csPHCV2WhnrwVfHtdIlsaYc2q3b7V4ROhVNNJNXSrpUSFQ0MhWHfVxTIH7Py720Rn5eRJlHvy2FktHMVTD-4n9TLyWcCx8xHL9LgA-7YWk_RHXpAMdOJ4ihj0nk_grnWEsY9CT15X03fyoDmKPgZZpfWccvS46-8qDHsidOMiIyDXGeozzbCxgMru-ond8plM2MApbpHEB6tAO8JHPsByFYQo7fCEJVccXliiIkQ8RlI0QuqLW5DsALx-nnNlRnvOe68jnJQJ-SvHrBsCSWNV4JM7VCBceWr8blIpb29dFhx1pm2atgw&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "11 May at 12:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015919928487798?__xts__%5B0%5D=68.ARCOI_23l4M7BPIWqUIJ_SjqP2R6iKsfEmj_nUEtr2dk0J9h1ou2IvN3Ef4GrmN8OjOAobHHYGYxSqFZTdq5gamBj-QAZEMXbHea5royLbOILwMKA-2aazmJfQsVXTyAkgMaC7aVw_6bNrV7ejuu3mo8ziuGmo-Sc9xsV0kKrd5nDC1FFF1-EgluJgLn0Zqwyek9qN0yQRSgpMMDtswu-M5nJ5YR4aKNpZO47PqwCWAYNTUUa7qN4qHoBB-Jc5V6jJwIpm4uHN30m0Z0FCEOjAFrelXvwz0EsmIuklBIALzS5ODu6sDSAl6PRtlSnGHuPwuKOMJf66kWJ3J44aVRt2-gzg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 15,
        "timestamp": "11 May at 12:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015851891827935?__xts__%5B0%5D=68.ARArJFYIVbu5fsInVmQCfxwWNeNeCuNmpF3QqLU1fZxUmQsSdSlzywHelWWGMQ0YG1rEETJzBAszeNCjHgtfrVv4inkd2Jk3Q2OFDIrOFkn94T9itv1jPdntuZGRDSGYgt2rP0BOQQ4KPjvjbhI8-s4pijBSFB73x_9yo5-kcJVubWRNIfUimBfgyrAiO8d5PT16qifMe6yevaOgqDdWPW6fQe8NyKol63TM8zTNU2JHGoEA2BzWt0su1rVrCjDol0HgaYpOgA656RQCkmL7vlW0MnU_lHjUCrxtH401uzRN_15wZK97oIvqJJGH9Hu853nMEL5vElt5OIYgwTYsryWJGQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "11 May at 11:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015793908500400?__xts__%5B0%5D=68.ARBFgShgZmF45LVF6Nb9lG3dwbWOGZpm4rr0kP23lFS1thF6yvMzsUnYT3OOFLZNO7qJaL6FsYEk-lsY3LkiybPZHVsmyytiCgDj3isKX3zYoVJ7XhCOqf7FyotZG60mIb003IOVkS-TAnGxpKCO-rhwmnhT_qX9jc6z4B0DZboys16nlSodT4aMTnL2P-zfeKQqwdVfCSuIAlbY5VWFXx7JWJlD9Ybjbw4UPr7jlchGHXsJaUCZ9oC5bWm9aqxEZ-jxJ_t7mlcd2CnLDaZcdr0NpIWmNsQHnTQRDGYnvg3ldIctPq2r_sR_I3QhnQHOH0WWvMBr0fhF_qWpHGSfJ0Hc-A&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "11 May at 11:35",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015775868502204?__xts__%5B0%5D=68.ARC2vpOnXq8Wv5bdfWx8eY3biEmixyJ8ToCvLqFwnQX0OcCWgFHIK9H7QmJhlWYMheWfNAkuWQJpAcI4ykJ9y74PGID67ANsjWOfBrYol8wAekV1uAaKPZ4EAvaVSSD_0dSE_zSdXGqIPJrEYu8PsWvgyAygAmTB_FmvNcQjMSUxbKn-dD0KRZ-K_sUpl1vHPs2JP99ub6FMrA3cehBZ6XGeRx-xpkSHWs5OFxGEktUxkPJqQPB51RMYiRiJ1TIN4SYKxh5aKVopsX6-dWT1D6etIG5Dr4AJhig93eRrDZ58ex9noiRX7Gz1rS30zND-XbAZ2hOkJP_8kTxuBbp9j5p0Gw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 May at 11:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015745165171941?__xts__%5B0%5D=68.ARBlxu63qzQu2Ht_Ra3QxEXUdRu8XJBI_OHsFcVznG5tBYftOB8mpQiB-d3ro8jV1JsfiIV-U9_BhY2DCevvgXZ_P_c8F2h5vNlWC7yOJjAEDjwJGtld01-y3ng2rZBtP-UX2ljjbv3qqKrdcLkkcdKI1TpOO3x6S90zkwJ6uw75pWbLWRO41V4Pb3KuF3eARAStsWRSf82E13783G1Cea5M96jTykQXtajc0B80e--o8v4fWXaruKiIFEoENMOTdRD2jA63d535Kiaznox9mkcV4VimNxmf0euPyxhEfPcqF3IMkH5sol_9JVUNZYavdAsEe2yRTAYCG_Yo8FsTRmugig&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "11 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014936601919464?__xts__%5B0%5D=68.ARDo29kCsbENfFI4W2vp1YfJx8rWy3xeo-pfu-eRUr1QbFvF4uDlaeEUwWBOZNq-BKi4G4YeQtYizHfKIRzw1H8HWLduonPcOyJrxqcHYbBbTZAoEqqgmOFq7GUGVVgpSvWcbV1e1G4Fh1AEG0HXZhY4YkIFNGhuWaDg3wTNZUhk14NUqe0cFfMKc5wytrrnIZp5OC0t3QDFFDbkZCAhq48wMBbdXNAL5qLXkBjVhV0tWMJ-3YimyrdrkAHlTdRjLaRv85UUSo5J5EjX-7gZUT76gOdJI7uiIV9pipsizmQXUjjVNYhLuZqWZL2g7KH422iXwbIiSBDLsuIIYaj2c0QihA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 65,
        "timestamp": "11 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014933205253137?__xts__%5B0%5D=68.ARCoqDgEAxqW8qiNy9IXTXigjobkHPztXa028W5KpkmszGnu3pGfiHwFKkCaEUVNLtB34uorQJIFY9tDW_noceBqw0TJiDguBk5KqAPbQpJdJRDoWXQEHG3uLUn8hoz7QGFNIoutWeF-8yWcJHrm8bhb8IMwkEdNnjJ8v7CnDoq-FafN2iu3XK37gBLX2YrNQ3Uazp-SWHJGOSoCX_CVKn0WBp2JQCaxnfYtGvQQAqgnE27GGHHfYswS3obHf7eCRSsAs7wB3AmgPbfSGR3jhPp9QMYtlqYD--T0YGDt9EHaNdXjzV_WtGpVmPQdq8EX9NY3mKc5LlwQB6oaGZMBWocuEw&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 44,
        "timestamp": "11 May at 09:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3015668335179624?__xts__%5B0%5D=68.ARCnfbAg3tkXdrwYvriZvi2D12BHu9kzF46lM7agOKJxEHew-6CNHA6Zm_ZxeogaGqRLgFV014Ij_-wbpUZ1s3VmVS2VhCK7VBhv-k2VJaYLlZfH4o0m2OI4J2u1SuWwoxiAmfNrlAbI7h5fd9wY53F-9whXtEsr0Hdsw4YoBZtb5Nht8WJzirX-f5HJIV_B4NO7O5y-mq9iINwBW5xk6ZgCUUwXO1_-P-e9Q2jVzXB64j6NKMlWwcO-JHRHhBtEFHjHKUaf-ujmpNPZdUqLpnijPk-fn2PlwUy8NZtnYI3yh3fGVlvUIBQbQGxNaPLCAfCxavMYBozxjt-wYXbmZrlrvA&__tn__=-R",
        "comments": "19"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "10 May at 21:33",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3014277791985345/?type=3&__xts__%5B0%5D=68.ARAjoLP0J0mXPAZNFOvKzHNhQWK5-m-MNdtxF6RBEuIJxpDYEFApAX2jW5FOlGgd1FVpcEldKruUc520o43B5URpPBi87fXgxOO0-DggwyJ76vxpOgKHrZ9v6Kcay27-py32Cm_LR4WCTBLJdLx4S1AVdpDQ-8B7DkWXogh0Ll3aXbnahvTI4QbjPyQ2E3xkFU_gv2HX21CwbC4vucZNkWY9IFouQFaiwK6BlJmQhV_vw63p3YL1tlUWw5fHi5hG9ZKmrEqs7vIh5NVhqi7fzE8kg0EGonFbmMXOhCYrliHSwZ-hY338QWlt72IqxTM7Qqv3Bzv453JjTl9l2bPL59iccQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "10 May at 20:56",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3014424265304031?__xts__%5B0%5D=68.ARBLGlb3hSr7CzqW-B_BWsE4PAaPszP0dQg4gOXmcz2ryl95dPwrGYT6t29juTcIj--Rug_4KUQlhb4mClK6s1qJsZt0uLhKy5wfK1lERFx3usuku-NDiS2wrRiC-jrx27kklys7687PepeUI9-Eko3iHcdVkDF2XpDFZFxH8VQPdOx5ljp34ZKOUrdFlR9-LP4Ki7_kW0fRMfTWEFHTRRVdl9WG21nYTszYB-tk5BhQOTsBJuf-5Rc8DGOX0jdi_mMQq1o3EGkhh3ylMY76hTGNnwTcP0NKFsOmLXzdfF6zfSK716usU4xJ19YbKSloAbLicMAQJQAZDwk0of03ZjM_St62yX_oGQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "10 May at 17:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013920538687737?__xts__%5B0%5D=68.ARDEcJjb7t6NFj8jSQrjTu7UVUUpheQJxOWnqzfdXntIRJ9KQvPV9gsuUf05ukeJo6ufEx-HqUhC91M46Mkh34aQi2opNXcJREgwIl6vK93rOXRv2YRAjcyVyWWbwsEpZiT0oQXEMvytG_ZXs3TO_Q9cWQUzc0NPsehJPjAj-jDKJ7OCE3Tu5PYgZTHd5Di_gO79yqM2AzyczS3X_AXLx-bTDowqdwpQeEEGaYAU9B4X6yHkr8UqjQla29437jbZTRzimn89FFdZaSlTiySANCbYzCA_J7wwlvve_caybmbK8Z-XbmVSxb76eFtA10iSKMP6Jlt88quDWImw-jYTW2K1cA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "10 May at 15:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013822538697537?__xts__%5B0%5D=68.ARCiuIBwrgd0eglWGR1dCjPhy7mTyBAI6Mi2MHELbGRaKSuN75e3NQTqxvlnmHmm8Qw0Wq1lNd5HwKWYNqh1XS6ZdWK1pPw8TuGut7BfPtj6iyF-zSUBh7Yh10Cg4nw34W0h888M0cnefowzHhF07VxRvuOordLV86GmkuHM-FNyH1_yl_sYMjx6GgCtOUR5yxCDaxdjgOYzVUZD4ZGma-5bAZ6AcA6DasdlXpK305A4sQr0pIWd8p5CaI1LFxquC6TamMkQbJEVuK1ERGJ6UBenC004BU5hy_UOAgUf0lXJgoAg6kX8Phb094vlYqKaRJABgQQGP--ZWp6umBs9hShmQA&__tn__=-R",
        "comments": "25"
    },
    {
        "totalReactions": 0,
        "shares": 10,
        "timestamp": "10 May at 14:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3013687612044363?__xts__%5B0%5D=68.ARCdebf8NhqwxwV8sCkJ41Wdr9VXBvRFypBLxrokz8d4iohoGHDx46OYEOUreykllnpfFSpaBCB-bTKnC3lZ0zciwc-akc7oDVX48rljsfVYspFiV0_hH7L-GiSRcQQ0dkf5fZIBoBSeYrAAAzijmO-ZMoJcOTdDFDgKm1sKy5RVjTu6E_Ds0eYFXmz3uJ8AMwCt5IdDA0u9oBVDHC5g-bZCoHfsHHfazg3r_C_gVFEDaLdH5Lw2MPUEshzBjJLs_61Vag4mdspGw1LvMyYupU9sTByZZ24n4MMKmdzQmGD2W_D3X8lKmkNp0kUUryw6nGVXaz-dV7j49aHAUaOk4ZxVdA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "10 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012419358837855?__xts__%5B0%5D=68.ARAcOARAk-Pxy3NfJTMNUytcUP2NY-Rn93aUe9tKteubYPUtj-Kv4Pk7HibpGWPv8yLMScylAtkFS9jo_F1-3GYGfnvmHp2Il_OMDgqTT7Xcye8PpognBMW71d87jTTjdaixuGwB_fGazwVqzvDYqGjAjxi5i2qPZVBuWOKm5185gGePVRUAGDWiJQPnQZbPDUFLB-iB6_LN8hmzKkABtFCneEe6KhNt1srM50LcV7ptw_jDd_hyM9j85gGSITKKfp67qBDx8glDrP_5nsJ5_vKlTkRGuROgeYabGWyssU5tS20oHi1C83SxqJ7U6NOj-UVvCmr2ZKKVrG1bzMv51_YfTw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 9,
        "timestamp": "10 May at 00:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012359808843810?__xts__%5B0%5D=68.ARAsq7z0EWfJbnGfKeNo2yX_XlgPBzhzY6cOKMFvmaUwQdsy4jhr-QIaXwqTgUenl9wkUbF3ATSwrV0Py0mSao5nHoWyVEka0Ic5T6P4cQvb0oC2oEH7B7RB2TkBlp7B05qngLAFaVp9NCajgDXyWh5IUVnmAl5iDIeZT1DXwoTYXdWOI1Q3JAL_51MqxrMnzOQmga5YY7BdqWuD6iMV2QVxZWHxUDFZxDRvSt3RJDDVu06gw3Yk6Ns1XzeN3hKFyKlOwlvJPEj7wvuqio964btAX4F8EQEoPcy8BlHf86gvWlz8zJD4IEEJVnIRsV7hHxTx2I7aorkzgeCzIPfa-L4hfA&__tn__=-R",
        "comments": "14"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "10 May at 00:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3012358412177283?__xts__%5B0%5D=68.ARBA-MQUuwQ19jrFD1qvCNQGYp8GiczfUveU621uQPw1-ADJ3tQ3ppIvllAxnioom11tOcawtmVaNGm7dPgQ0UIgzjS6KoqihEfUzDjbzZhOE1ib5kSlMabVjz_iFgydWcZxKMcz29fGkK8QYXCXsrSPfaVS0P8mHSoSWvyZC3EmPBHi_B1iZ_xEFsdPkSMWA8ovN4P7JdZOGkCkdzib6Q-nJZ5BcRORegAbqMOyAIjXhylYLT2t39ynEGMIO_TrTEXTyH7kg4V8IoALUzWwIGLdX_1QDRMkGYMXc3EjE1zWzkrxeqTHj3O-aGKmDv-6FCuh6E0vPRUvvNr95FeVrZ5CYQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 26,
        "timestamp": "9 May at 23:10",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3012190942194030/?type=3&__xts__%5B0%5D=68.ARBIRqmQSAKVtWLH57-CXxMXCIFGe3g2dsy6Cxi5oNMiOQwyfrZajpbz_unzp-NYW3b1C9UEVrsoVC1Fe3pVaGoAmGpjwfrXihZOVRycf99xHkB44GRJLYNnuRyXd3OL5VVLaonRTgU2sSwVmKTIdXq78wwuG0oYKQuYW7JBuUj_dJjR8hBUjSy9_j9W-UAVS6086a3oBjwScww7TdQc_rrVEMteoCXp0lLbwWTS9mEPLpW-mRcEqo4KjqyGcazzk42nnBdtCLRaGSjgsKjCH2dRsyZVseN-U-KvHCbsoAfc40TUvM2HVvbHfflHReDVE3CeMn8H-JPNKo30qbFcuBX8Rg&__tn__=-R",
        "comments": "1.5K"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "9 May at 18:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011655025580955?__xts__%5B0%5D=68.ARCckZw7OfbSL7jcuUMHmk0zlPv61Ez4TP7FX8vk0C85gVTlHG7djxpXCUl5SA73S04xxe9-5S0JWlEWfn-4LMHl0sheUwXA5Vn0qWlwqImPl7-979oK-HUH1DtwjT5cJGRxjjIgFb7-YPpYISlLK3HrYH5FQs2WSvOCDYrgZVjSKXPqyeCgRJREXJjdzdfSMojnhwPoErSy4LabwRYKvYJW2o6srvWS6UoYXVtY5iqV1JVPHNDSj3FX7Gmo_HSyzhqyE4t-fLLJt1TW2HMYObZGSve07R9HoInFA3VAYXqrlnx4e2K-YRs-qKuU_2NNebWNmsR2bDRY7Sd0Rxxv87zWfA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 16,
        "timestamp": "9 May at 16:13",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3011438615602596/?type=3&__xts__%5B0%5D=68.ARAaMXQ35XNBwR2TE7-YCUBPpDuK0zmJq9SkalUfPtEbTRo6qdF01EJ_vnIx0xnuKfMpKUwNFGCSvM0xRUQ-VyeT_lnh6ViBhD4J-O4fqjhwC0I5ofpLv1Xpdc1SjAq_E9bBvMgJNyWyVEn4-uoPnNFA_EMTEgEyyajMrgsH1vhpy2mqQEAaDjcR-ftlPIZDZMRF_nKVWB94DacuTTwWmSVOGaFLLVUM13fsXI06ORRQUdQulRd9xEa7q5N8cfzQbgQu3uEkFlmbO6TkwPEbTfobftOJ5Ppwy0rmJMp4ejoEY3ScehqqWECX1RWxi-ImQ7MxYDs1iRlEL2ebAnIoGSip3w&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "9 May at 15:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011177795628678?__xts__%5B0%5D=68.ARAl7Nl85DJxSAlhcZvCw0fml5DSVdsWcsAV6miRPkLUVS0kG_DXzBsvuxk_Vq79H3hPsDlH_IUbQPcgdXZe9PCok40UDiX13NfXQAjUwMEczrxV593TQkTi6c99BQbzwMr53Av61qpfLFHH_ptB8lFazOMahdjQQ_mKKV2JDYqP890ia1Qte1OfryihiJF2ky7uI-pL26bBqUZIxm-s4_ddKeil1lihqHRQJfbmKvsaJYUo3bJ9mbu00ymBjgJZUXD7erWBBxpYN557ts8NDkuOI8NH5gRfwSmXAPWiVmn4jcgPCVDmv8ErtcRrVLl3NDE4FXPmkndcMB0J5jN2uT1MOA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "9 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011192065627251?__xts__%5B0%5D=68.ARAm3_daZtDDMVIp1G3k1jHrkfNFKZrNknpJYYpPjNEry7OiNeNiTHxGKf-Np1apNdkrTq9Kmc1IAzGi7n29YvdXSLWLjDY0Av0EakaNtp9OnXPNBCWlPxM_BVAoeJIw0vv3qCM84y5y6aXWcdNKB1NNnqT1PQmqjwAOKwmeeqen7yqPG9bKME2BvJUM0Swh1qQCkykJZUBEEE4DmC1GfygFwOaOXQmECeCkNCIo0O_CjibeybsXXKz2RrJzNzED-_SYC1_ou9o4y56WpB9wpKuHc1uinOb53lqfTv4ilgv8FkCfGfnbh4CJ_ofFgqZTUEfjR0xuqk21YlibzmfnBMBkmw&__tn__=-R",
        "comments": "19"
    },
    {
        "totalReactions": 0,
        "shares": 13,
        "timestamp": "9 May at 14:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011279435618514?__xts__%5B0%5D=68.ARAnibpC5XfvD4X2ZrR3FtZe4gU-HpsOQOuQ12Ef_WpsPRDmF3GMbClNsvZGbkGKVG-U0OWtxGouiRI8mIqTQwxiSZzCXJUSE_rUbXECxprrxsKiremjTeIVB8dkQgTxZKixAJRVnqtK4ELI4zlj69Nx0ZTl9Q71o_OSbPnoQdZ0S9vULSaiQVllfDyfRm7Fn3nOl_rioJklGVavTxW97b6YlVgMoW7UeQKlZJ3gANRVtP-fyKl4xu-BrHW1o0bEho3SJ13LLckaPkups5JXpNl4PG_qz8H5-MvKt7kR_sys-7ea4utSIuoUF4AKZHwhpHZdFXs9qA6O4iIPebyCY3srnA&__tn__=-R",
        "comments": "28"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "9 May at 13:18",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3011170662296058?__xts__%5B0%5D=68.ARCMbJQZt8yeox3eSzd82mZDE6exSTRFscRvKlX5hbKrT4SRHnG68Wq_aqsLPxJj-zUpN8IHq0-_zeZ0x6JU4j7qMz2MDIv6FgQJwY-UTMiw-NraiGP6UIzXNoRVVjdIJn_jeWcBRV07KURii9gc18KGVxLXYW3q1GFBH8AqE3oYLVtNQtQ-vjmGqqdvnJHWcQewhOE-W2zsISxZ1IbC7DUouw_K1pzvhBOCnjY8hWIrFVz9bHY5zIpTQkSvsH5dHkbpZjYUeOfOoQK8ZNe_ml1YQuZ8huf4lXqajGsKtH4RwPOTuCtKfQ_qXAqydTceujflDy1hMVqXqKbJyzuO1sRn2A&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "9 May at 12:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3010180015728456?__xts__%5B0%5D=68.ARDGPXElLuSMuGpNUmQMig0ihPTPrcr1s6PcqeeOHoFnqFw6EPi-14kERZYUZSQKeQy5nQcsecUM_wi2zdXnzIlrgh_51MfDBShgNngLyY4FQGmm5iQf4531UA_6UbPDdHYgnQhG3BJkwDwbPI5NfygojkXTO-KT-gMIpDVbRvE47_qUxbAh-LhyzekRPKMw_HicJBWaFi6nmb17pJ0wXTwYRLNY0S2pmf6Q8aoVrL1UzMnmDaX_-O7UGRsyLDzeb4v60rQRh4XqrCIC1fxOvpdN3rbK03mSWxvu_yU44bMBKLjrqtGB0PTW4AKP0bgGmoK8bCsWgcjwHIufq0ryijWhYg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 72,
        "timestamp": "9 May at 09:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3010855062327618?__xts__%5B0%5D=68.ARDnzfksl-PXd66KZivrn0aKfcQnnsYaXnxEjFNmr_soamVoglky8s4Cwnf0ENWo8HoTIqJbigzcQBPdJpc6fcB0M8WHQtNvH-qQXf2y0bU4olhNrMClKWrMP7xnoSNW_QZyeOdDyIupEA_S68i8mpkEdJTmfIkT7G5Cbmy7NoELeTn1xXP5-hm_CCi3I56Ji5wOIAaefJFMn1qylHbKBKp1iwk6_lKj6b0iCQ2ut18ybUeuESBSjmdqhQyiHj8FxVR7busLmueiecJ8Z_C2HZpm60cNkWBHyxwcXCeZkqN9r_rcHTrdOWJ0rFAv1aWt0-_czmW_3_pP2faByWN8Q_mCvA&__tn__=-R",
        "comments": "22"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "9 May at 00:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009972239082567?__xts__%5B0%5D=68.ARB3JH6d6UgmJcUjvb9hmKTnQegcniKvFYysK0Zkk5gGtN83zhpBRw-IYDfjdGKW120Vl2tjibB5tbDNVxj5pZk_MuYn2tXX7R3dGdEHVjDA1mO5G38_eSfUFfcgNq330iKCV6oeT7w21whgKlFQjac0f0uSWWYzkF1mTm0Pfw6wRayKqojy0MFaWByaGkmTWxcaz4sp_bgf9ZIzLfaA_mQe-9G493BL8Vc2axPFfBwj95ywJSdX8s9QfRvV38ZsNip6XuGTo6l8h7c6NiyMqOYxH9rOl3vvek9nWSoGn0rHGtUk_1kOYkUFJu53SmHlKBYrW9QgkAxQRepBM5mYzklQFA&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "9 May at 00:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009058682507256?__xts__%5B0%5D=68.ARCkJdLpDZe7Oa4gcvZd-nJz-YzBLMsa4lWL6GrUbojKhArPMDATY4uvPekks37ccRxrRR9f3Vv0hjdnql6v8elrEJqqB01EPJnAyuUCQcjGaLzLA0UuiXuorj1nqgIhLWT4TdkCnzELtSwAs4pKMB6uAOjxi_Ff8mmSUSAckyxyI2quFtOmNb8Nh6Nm6hqm5Sz5xc9z9U0EsfzwwaNdy2HJ73bR7mG2kB2dGFDutB693KXVz4gQ0nmzZ1JdYq3-w5iXPNyNtLDxm1pAg-JDfSD4J4V5N1Hkv0CDDxOgz-6KTMVHeqhzUOeS6efGHol760aybHu4AQTGZlR0vv6mpV5Xrg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 20:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009542015792256?__xts__%5B0%5D=68.ARCgwviWhFkzfY2UAceMBDUkT65M7C3N-ky6d79k4QGP8jAtPQ6I7juaa9RkplYHUKbdZ9Tlsy6pT3Lvmlv_bHQayNJtObz1k7c8GGfX_D3_3F_8o3vZCZdZWNxw9BOGtCV5a2tMdY_k8OypnPLka9eT_-JWy8REdiaOEI_bkn7PmIpov79jgtCH3tVhAiSf7F8prxmlpHXd38U8ZT7hYhEpoB9or2nMz4VeTMuC-NhTNbWhbFyRjz-EdFW3iWwIogFqB1NoQahCwVKB3sxl0iR31fPzB0qGc6jfzlsF_Yb0Jj4Y-Fr95jLB8HYT0ht9u1mfGct9a6Op9Q7Gs3gdxgCvOw&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "8 May at 19:25",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3009451182468006/?type=3&__xts__%5B0%5D=68.ARCv7Egcbn0iNzS971UnRdabeMvcQR7YOh97eVW_lVBZy7DmYRSz_5UfcnpZeswA2Z1nVloz1c4Uigm9h8IYcDg1O2lNY8zvqbX3d1aeKtFTpFSm-zfN8jzm9EJ79JMtEybStMkMdQNLQ3HT49id7suRZjJxI3F0_MEqaTRqe8SG39O0QCunMGlAYP5KfXtT44_M4mXW-kFQndWHucv3UXuxNy-B2nn9WdBOgQgIpmchzmMFdDKWqHZMaZfyXhHokoaqccnlXAe1HHKmbMy5zxSPgAWB_tHkpacZmGaREgsHS-OrGa2OulYa-0kHh-y5bcnmCqxijlQqxHGcNXWJ6-Q_EA&__tn__=-R",
        "comments": "10"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "8 May at 19:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009386585807799?__xts__%5B0%5D=68.ARCxms83a-eM29pByTjsVrfLyeweE1Qx9ONg0F3_XjbStaO4Fe4Jlf6PaDKSxZjqQ9txj7sZtDq_SmFVafUfwpJarBAT-DgrJ4Fse9pdWdXCM8aYIGbMHTA-04-FjW7dzFWCY68IPbhcggbTAKaZmJi2BL_87aGY1AW3dg8dAhJjwlylr-Nlj3VfHm2bFnqygiJJnv6qd_lgwFSgDibcv5TsMeSnhFFiVaPe32o4iAI_82YZuyqFOdfgKTsMqmnSjbl-QlxjRqDkxFVFnQSToxtJeQX1zcAdDK8E5b1l3XXHt_eIbEpeMmxem6FmCiAQk8J9suUdiNdaEEkj6-LHwDXuJA&__tn__=-R",
        "comments": "4"
    },
    {
        "totalReactions": 0,
        "shares": 10,
        "timestamp": "8 May at 18:37",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009371522475972?__xts__%5B0%5D=68.ARAd8BeeqlMbuQ0O3k0QAWT8gl_8A6fDEv8vDPrOUK5no-mSzOgPvI6c8laneSyeNUOyMuBDY8cLhVk9BnpikK9QGkYqqH1YeptFLGfAVrhvaAY_BUKm2-P-ubjfpPOejtEYSaE8qRfEalyfai6NlfheIhi9BMqrDO4LhiQWF2pmMyM4DuBLVPstYmouR6U0BjlRiaYF6fcyh3-PDdjt5CBycXsjn1e-43ETZjHJRlDXaSbyPg3n1I_7wfot4GqQvDchew007y45NPI3MZHkCxl7pUpblfkLEGphVnTljm9AUutKZcEs8J97eNZpbQ8ojYAK2suzbReAjqt_ywhL0wulBA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "8 May at 18:14",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009327469147044?__xts__%5B0%5D=68.ARDKEzyOg_-upqvwuUQCM9Nl2Pene6QU4urAZbND9FJ0pcxwfo4Vtr0e5s2FDUPG8F4qbbCWSpC4-G7fM9falzyOpXTtNgsl1MuApXjd1W_rZcSPZPBkzEzGHRxvUU7_-e2PGA6subDtKYIVo2n66umHvYbOOz0iixZU6MUJ2o5KgA8E4r6eNHZlNmw1IWZ92GFA0QLr1E-bch18r5JYsEYnRiGEX4PKhE_34McYWEi0dbU6NI2ZnhUTJd1EqinoryS1LaNoK9haCQ4U1sZkdp1dWWzh1Dl4cOeL5AlZ2wWmhQCFuV4tBaTKAhKhIxDkcnDb0faB1wWqHDhCP0O458RjYQ&__tn__=-R",
        "comments": "29"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 17:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009273402485784?__xts__%5B0%5D=68.ARARCvZLrzENlDPsXFnENTAnjM2Se5XiBih6J_MzcyV-8QxtZ6dFkwRqpTKYnS92riRyhrioygnXPSLXMRCEMLCrSjWZr962Neg7dBgW8ExPzcx4L2eGOqu6IOIRPqjRHb-5UdvBS_nzP_GeLjyI1MgppLnJtNUgMfE300MK8WQzV4hsXNTY7-eZBRrf4aMlfezYhlDr3O1ocQFy2AqvYE__c7cOpNV5ZuaE8JQbzcWnXGby98C3s-bxuWTNKcSt8DIiW2C84Iwt_3UGt5FhebbCLrGHBDqP-2c2O0uIK8wiWrB8OnctarfxbLTUvxmVdt_JjzkarCqHF_spcerOJ_s3XA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "8 May at 17:13",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009210109158780?__xts__%5B0%5D=68.ARAZJkM-fWVg3mnRb4_54mmRprby-0srCYgdB6niO3ibC9bgHUkj0Jvzqpc_JHGh-4VP_vrTnoS9tepC0H8k6ud3ejStS_Hazen6l3Z-KJ5Et5DCzDiHqW6X0KG3bofJMVbNEsEpTYxDfBCVt5KUZ962Xlsxfh1jwoWuP8Dj_YOUBI-Yo6Hdhd9XB3_4DMXdwdIAC4ZSppwsXAZd7TfKOsfmUnXn-2txctVFExFoBnWsysNWCxTAbUadQ-RUNYbsxfcFsdJGtz35UVo7L5OY-ZEy60VQAHrWGlxmRDmkbvmUvj8UG_7O293_ngTWYStujO9uzPi--5EZi1DsFANtG3zMxQ&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 10,
        "timestamp": "8 May at 16:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009155179164273?__xts__%5B0%5D=68.ARBc_CB9KkWji_DwwFJlFEgC764B5N9xIHKuRkmzQukNa-Q1nFsXEkfFwGaDf4m1A2le1qKVzRfxX5yZkNYmJGQcz1L4lxT3eNLxLHb1Y9TLp0PwTM71fJkMu8-7O0OxbMHPGDdMiKZZDweq5zavVt-TzwWjQVMqdcwTYC1H0wuNKtqM4Cad0Z_jYKTQiw4WmD0W99t3l68BK9t6xPjGC7zpuCc_Mmf4YufAXeKAaPOLC9Wfmgd0XGhi0ApPpKTXvXGpEIPqgsqqxfR6z5EItx2Kwa8LhtBCs2OkiIGwOxNTpvSqS_cRzpaKtC4Rob1_lH3KnZkNZpeSC9Mn9YJAeXe5Ig&__tn__=-R",
        "comments": "23"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "8 May at 16:27",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009127739167017?__xts__%5B0%5D=68.ARAKZoHcTl4dfc2H6SoqGqTrnyEWL95n56P0esTgLwVe2gnHtOyd7xyMl70cl9Cd8yQZwIE1Bm5hSqiA6AWw8cAJ9J-v_Od-xglEktD2AIVZqW0fZolZIwp4U3GuwuHxJTG3vpCk9Zru8erqMY3wHlwYCRLQDgxc-CaQQiKK5yAivevFRLPiJ5eqCOKj91iOQVqE0Fx63dGidBS6COU3GjJuK0ZyWJA_N5q-KVxS07eBT5EMDfdzwIzxlDFQDS_GxJ6iUxN1rcq4UapgQxl37MQ23kCBvXpDN64WaAusW1OqL9DgFv49XdwQqJ6kQny3wfTQ16xD5z92iuUGupWdxKD3Fg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 15:56",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009075019172289?__xts__%5B0%5D=68.ARDKSwTivzRHpbmavRS-YM_RRJLtB7oJGlvZk9vO15lkquu1Us2M6lSdJcERfNbV9prXxNKHTuvdqyGm4KmgSBjqnBFQajQtFJH1shojspg6npnz6fhWTiC5St86Jy0jiiIvUk0OwYes2Gbyr0b35CQJELlttu0inYjC1Nj-Co-pY684Y_kDXkJxE-rY1oa-NQ1px2HP7mX53_2odggdsS1ID5Et4atokzgg9uda4MmM11No28Q5WQ18PkSx5hh3qP_udtIjKtbQVilyvbxggItE1ORRlyvJX9fmcgaHYy37bSM022kWUmM8vEjgVON3HJPxDU9c_GmHxnNWDPYVrWHWrQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "8 May at 15:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3009017925844665?__xts__%5B0%5D=68.ARAE0QFOTvF--r8he73gmaSLOUpkXxoGs-nPJGM4zkna_pmtxu76eDVzBAUdKRBceHPKC-Tgn7kN-JnpOtXWTT6TNx5l5d2f33S8VjsnJzVgakC1stH_yjj7AgRpAzkJHgHnFv3rEKUc3iCAc26qB3610-n6keQW7aIb3qE2e-o-fzNgzfk7YF5jmqAxipbqNHxWodc1FxcAXaI6qvn14LaVsDgciEWTgXJJyzoqjHfU4THeUn5-9otkRfOmt9uDmZRpT5YQFXePG3QPlKndYD0BqEFPVmam4Nl1awG3DMFjVId429LkXD4YIFQtEnuE2FzthP7_ysZD3U_ZGm4sIOJMqw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 14:57",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008979879181803?__xts__%5B0%5D=68.ARDKjkQQrQHZLNp2RtWq21otbYW1NJcTYb0HKtQA5cybxyPE3hZKX9X7AAvJZY-Ur7zzLAkO030i4bB9NmuQ74QQo7f4w48HP6tMRg6qfcUrsnci3TlGyIOkt3zaSadYjI84DeJ4f4HmsmeaJdcdKmSnXkG6_dpIAt0s6abZwyPU7_JB6-1aeUCB6AclB5QB3aeJgNQc6Nlo1MoBhQ27bMlcevDfQjUolc36n4lyKZ19ZFK0TeqT9BpPyiEisT-L7C4NMyeBI3BUxtmZr_i8NQLmn7sqrq_WOC6vV07WzuhRvD9tB3qA4I2gv1M9v-bgYhIOXcA6etlQWcWT8BTk4IsgCw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "8 May at 14:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008946302518494?__xts__%5B0%5D=68.ARC3K_kRacaLYTo9TRHmC1DhXii0ngD9813ANVu2QhWIldFDZhlgPL3XnFOFeOGDWoM92FPeRredfRvi13kI2UyF8LYD7zjnZyn_NXX8OF1pKbTlQtclIrxtF0mb4xIBlRhIc_j6tH73KKI7f478oDjuqYLbZ-BCPfQQnblKYcM6b0UzKlxX2GQ_UZr6Q6tADttx6aGZxavq2AWSgTdIh_S05Q9N0HrSmr0k8rRTlp1_5KU-5pJj6fJrcl5IKJfq9y9SMklDGkZJ4LB4Nt99Q5lFAG1XJ97G_0wdLA7yfBdB5XC0sYeLfB2RGvijY5ep8AwgG24QaqB4q3HogVDzFi7kaw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 14:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008898709189920?__xts__%5B0%5D=68.ARD0W-qwWd68sBrCZ96XQvrL7gVztUg6Ml1NScpUgG_liVyqcDWEgfbRMN4i0BskrS8O1JbfMRWlPOMcKf2WPS_3W0sj-eWbi_0whnFYxxg6gbPYRt5BRQp7LWkQNgc4I8AN2xyUmrCvyRwjcrFUabhMmbsOmbD6HWg1YwfNMK7mHF-dKO_XyCfd5FSAejdDML9cTUl8p5oB59P_KGSTohbhIfap2L_Odvh2j72E0Zc_Ddt9lq7dGrsvlv2GTq_GQbtH14hYWhQS9CeJrpqd6DDeE1KGmTOuqvsXXDQ8dWol8cFHVnsfyce3ynVtXtGVU6cQWn9Vn26s_U5nmdr1wkZqSw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "8 May at 13:26",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008844055862052?__xts__%5B0%5D=68.ARBEcOk5ah-4f_-z2ORKB3CjoOQCAKxGJe-3OXaIS9ELYWSZ9401EMtT2eTaNis9h_7SP4Al_FxZNOLNvJQCDmooFEELrb5aOWkU9Ur737Hq9b9i9BcAewhQBJO-6Wq6SUAPJpN6f3AQzFCEKTLbhP51e6OTOgHygCUaOJlKXvn7IiQcQZh6ElcOq__LRRkmX7DFHtozEaKXlsexklUqWj9rP1hAvma65jCNepyjhd4YVk7iw-b5SslayJ5AWAAbbA6l_cJsB7oCHK12qI1DjK1hSVzNIb7VaBVxjUrXCZ8pAmD1j2hvPzmU6gpLDfBfuoCb8NFkJV0FHAnVBOyZNJzoWg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 308,
        "timestamp": "8 May at 13:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008802409199550?__xts__%5B0%5D=68.ARAuU-Isyo5Tysi7KTJj92v8z_wA2NVZPbYp4JxtlsU8QrrBZOtqxaKG1u7OwklsqGzuC6NvqbNVwUznrxJS4uRC9XRwj9lHJ-VadFyKb397ripCLxzNVr9ab-fI8mgiBTg61muCLJVj4pxYuuTesgrzSmpZg5ZBIzpQDcIKlEJAAr3YskNgDx710OSAB-f8rBqd9isUpwPRRy81arufJ8-Ix8Cq5U7KOwjHh5jvh0IQ_OcLynrg52_gsr0ROkASyEK02aUbbNTmtG-UqZqQ1Pv53eHEhMS3F-Ow1PVs5ssmVo3No9qxUtgKX9LDcqtYGhbZJTkS7iIrcgtgCSB6a8__lw&__tn__=-R",
        "comments": "36"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 12:34",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008763465870111?__xts__%5B0%5D=68.ARDVl3uVv14Sj0MkhTMz3YMakUIajfp81nMtZGWQke8rka883AX5NkZb2zYj1Pq-ciOv7vU2x0Y7TVxFvOQkp5sjse-Ot3zNfiO_cPeW5Ru4spB5MQdZAHCv-aH-M8Wm5GVqKIh8kMoMGbtKcfPTJQ8utbvK2WzXFlG34i_xGLTXFrRezS1bKwNKvG9hfXcRhSGkjOA10Y4zi06yGg7puYF59rL2H7ZxjqBuw4mnQQcj_XH4oCoYALDxRQAOaJhhSAqATVVO9GxUocnzWp7KQt7AEl7nPu3tTAqjH84esyxDL95PLMxd9X-Zl5y8rmUNfYfqAEO0TrJK26lr9faNbMrLkQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 11,
        "timestamp": "8 May at 12:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008727595873698?__xts__%5B0%5D=68.ARD3gFkqY8Igg5kp3FGO4j1ge3RR4IDOed7xyblrpDVmQonmj0NICnQFZsKfYl4gMxA44I-Rm4XsKaEn6senRiDs7ptAFRg1Uf6keYsCbqEQpOrpg4lk5a8zgRGPcyfAepTPeSt5dNRoOhLjsUOT6CYgUHLKvX9pvTqPathfnRED1cvnTolvdKRgvOC1Ny764_ngdbQowJ4-Y1P0qKrazwmKnvX0itRE_Degx_NBfe0y8M-xLF_pB2fCFKvAy27Am7hCN6hBbNt0BRFxWsXex_oAdMll-803ODyD0g9aHiWipuiiDACx_HdoZ9sfECZpxDgg1ChHxW1xEY5HKjyYqu1Zmg&__tn__=-R",
        "comments": "14"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 11:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008687875877670?__xts__%5B0%5D=68.ARDtLs1e_YWcr9C0W_qve99f4pQkhHQQppkbWoWMIy3b-s3QbwZ-QZc37e8qPvzY06g5h0Ti3w8IH8Z43LZOusCuOWzAzBCCiFu-hcgK5Cyx2TDVbigCyZp0zENkZngTKca3ormWxnY1_Fah8YU7i8zObqrQUCus4qZu01unDFdLKv4rBc5k9rYJFfruxpOYz02sxM-z0uIdw93HLcE4JhEprAMlkSds7sb5WWUReMxC--moVrw4N_72QGxm0HugI8HXzZzgFa13GwBdiq6WLQrREcSe5J7aPAR6OlevRF6yzveeUrFPz8znZ0KbrPKVocRPdQxS7-H6buEIlQfe0qu8gA&__tn__=-R",
        "comments": "11"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "8 May at 11:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3008645012548623?__xts__%5B0%5D=68.ARARQqeBUAbcZne5qUEF6L9XBN8-Tt78M_sGeom4aVnfysx2GmXOYP3Mzup95U-v1hCdCEhXfbx6ccV-mwyr7fWTK66zEJZagCgLvoGj6sa9SBlf2Xn0JioEI0z6Ld19ICwZoWiw254scXB1hu-XYYvTDHfAiAe63GgbE042otF1o7Ps_GNJMwdLDP1f3bBUEVy2s_Tr5pmepEect0P7RAQ6_6uBIlMmZk08_c0y6VvRT3TsQzYdeIPAPKz5ok9RkHCsJA_N_Ezx84OpEFMwlF2nuH9yO4GY66t_gfgqX09aQ_AKqM1fdr2zUX8b7XNqDp1zcYhBoTmstiiGpVDufwWpgw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 15,
        "timestamp": "8 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3007688865977571?__xts__%5B0%5D=68.ARDBWXcIIxU30-6YvsD7NqNRhJyDVqriH2sR3DsCO8Zkesy8hllmw3IXqqZhqNRKmgnR6x4omjMLeGJf0lDuf-1_5NhlxLHBJPN7Dpc0YF6BIn2EiYyTMXspEwyymxzL4eaCIxmO0_9GJLdnhO4BIX0IaV2KTYT6RMB6sQ71bCOEcpvFyy6NOAI-8LRlieDieg-H0g0LnUnDpsYoULUXjnKoAtsrXoamNWAw7HPJ9I0wOktZxPuHy1LGkFmCGzf6sePmwRK6TjzXO0PdVcz3wLgGUrm2qHAKFO1Z6W4gTovg4fj6bSlP5D3nMZ5yZrrZnWpIzrArT4oL1umkbtL4t4pFzQ&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "8 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3007677725978685?__xts__%5B0%5D=68.ARCjvN4Qmr8UVhU9fJLpmiJ80idj59uyeACho5G_aYLj_mhiShNkuw2kDhZoaUeK57taDULCQSfEqglyIwpuHqq4cPsdbw-ak9m193rPxVmCpm_VAsMcJ2LGFeG5n9o2Qi_drCctqc8D2LQcx1crTcOeCNIrWrwW9KTfj-WggUrOESEw6VG_RvFQXHlEd90ASP2APafbpshWXwQfmQ6GDLd5SZH7Dv1YceZOFaYVO-3GlLXtRx7KCml81J1rrZv51wS_9YbSaFa53LglLtRprsJS-C-AEqBsxJzXptJDxOwTZbdOHwUuTCPalNuu-11WA4ky6kTO2V_QadC-Lu7kj_LXVw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 23:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006974469382344?__xts__%5B0%5D=68.ARBTCYYkyjPqQRzV-7uevKWtDcChe_8kxEcG-liTHm_vwnW4HhubI6LAwJh28T3ok9YLhNBEa2LI_8Z1tVOGUTvP6BCD1QrUyfiPmxJeJUepjYltszuRAAEe2tIbOE90-dK9_jc8oqfYXwuOhyGZ6DvgUe_FW_zyhksdun-m9aVbcLkejEb3xbyMQlnvkg28Rg6rvEUWQ2WK5O2CYnV60nkfYtFKNydPsfTMR_zFkz8zR_IPhXGRnhFdpJ-r44hu_DZXW04bDYoYhWJf3QmOs_Wn1hjP-NwqqsSsTjMAnX-pLsXaYCskTthjqk4ra2L0G8oA7r4CNaCKWorlEAwfK__bFQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 20:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006994436047014?__xts__%5B0%5D=68.ARCAyeWaZ5O-JzDNt6YdxdEF2aBYe-5zJ1gngy89lIuMLhOjLbUH-05-zYbIC3JVpraqd2HGTwej3cWlRFqh8Cf6Zlo4BI41yfm9oeQ7emCGEOjBfegYmorenQiF9GYdXNw2DVbU_NjzMG0EpcUqejBv_df0b7kG1XYNbcm5V6gCA0O-fwdS8NrHR3rrzFiK51XcNsQvOKhX1glnRJBI2DyrxirKAun6Iy6ylVfWi5K-ekfHRbDf8ytC1RLT0Bsh58wq6eHwyGTunHXOcYQ7gbP33ZUIk1O9C9pooBbQc8J-c8foA46PJnKAmSxHYXzNp36Q0QKEccygz16ttu8ffmQLLw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 19:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006996609380130?__xts__%5B0%5D=68.ARCAUcThtqc-KwEPTIiFaqEi5sYlw0YfXYhX8I5KXyLI4rxsrYHcT9rAkbnn23zk9U25OjlM4xaLmlg-dzvgGVmUNJP_f6P5M9Pt71CPEKuggCFcdcepJ71eiAAbopY6v8xksIpYbG0x__63REJgV5d-jtiJpNysNHwA2n0Q70jLy67nIYVIlie-1c5s-Z6g2q1UiGMmNUZ9GI_aJ8olhL9-YRkuscUunlabo-KG95SRUhFolXGmv95r7qEi4jcQIXqDYJF9vYzcW4HTtPHvZXF2lMBpcvwr7bz_wGzd9pDwHQpTy8hardJ4_4N3gcm3tjkOOqY5MXhusanVXIukluPDSA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "7 May at 19:08",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3007037169376074/?type=3&__xts__%5B0%5D=68.ARCJjN2wd9e5OVEs3zyYudKxuvC5ARilLTUVZBWvzAZoc3s7fAMuHWca-pQGcqxaeBBoA-ehCOfrmVeVJbcnLdmvfDc-s635fQMG7pk54Ur4aWHVWbYqDbcly7LCrXLgFq7Lf_-LRtcvhuGU0pIDeACKFtdhDghgDTuaH6lif0c0dDQxBWMzIJdKABNyuc2-eylZlrqXhm-7g4xYMGQSaxkYKFW8lSVmVdy4MyqN4VEtQ5L2sahFH129_zWWI33L-cZFqZdoHDF9jWn1uz97-UiCDamRdWm6tTjEWtM-xjM7sYSPd7zegOLxocgqiJ43pLkM76VX1XFaoYshlrWfhn7YNg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 55,
        "timestamp": "7 May at 18:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006970192716105?__xts__%5B0%5D=68.ARAqeALW_8F7BGavy6rmc3F_EEok8KTwCeGOF99T4ILimwGRi9xShuArAEjSWT_PVq2gOi5uDNJNj2nO270TGqiZmPx4b5802r4wxXEtLIUaEGT-Ng-qFZzXgtqcjUThluWGmO5YXLOw0TOE99qBaaxcrK7NGLdBXg-sEQGFp_DBjaiz6GX4Z4bX0YZ9-nDfcSl9oqMZcladrZJy4-XV6FSk41HacV_ceUv233DgEAVtBKc5Y1rwI_R4AV64-yIwgieiZGUi3RRTdvSCCauiUUgcwbrd1WTgtOBEZ_UVnPJK5j-DPhs74Gwki8FIyT4ZvtmF4ylfbX0pSfTP6L6GRdGVQA&__tn__=-R",
        "comments": "80"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 18:09",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006929232720201?__xts__%5B0%5D=68.ARBtd0RVt5Hs8jLjSlliLuf_1ZUw4Zj49N1F35FuO_P74sJrMJ4L-AuHql3OkvkGKxTKtAdf1bklhnY3XLSOIArZ8aLOQk37TUfULqOB0ecZpPu-xXAxUU57CMcxuXijJUMiRED_wuR4GHrWlkeXxboDG_heuH84_n-gNN1CQSS4qWxNuqvY810GBYYKIvjcgAE8XqZ4liB1oIfXU0rzqKEJ1qRpOj9KN-pGvmUhkZEhNLUFuEkZxpbmSgBBYESKECqJOOPcusEwDVzBVmTo5EZfvNkYy7CBMAPhQAwUQKZrD--MWGn7QKDhuRTe75pSrt8jjnkA4dDaGX7m_doCmUDT8g&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 17:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006870136059444?__xts__%5B0%5D=68.ARBIo3wnJg7OLzw6_ITCd1WVVdBa5PwMZ10i8RGxLhmbRlete757cahnrgypQ6nzBhF0QnY6OcDZXIKT0AaO3EKBp4JojV_z2N3-pQGc6zVpooG4cxAc19luo4nnI0uCIRePHN4Ils6aOTCrNsIKBVo0yOTK5maeJ7ao_1k0usHcCb9ie71wJ3XlgIcy44pvDNiGveMAnxYXZaq_NOQCz775iPN3H334ytP45An7JzJEdMUPeMqRZ7-gcOIpLvBIesUVANGyg5AANmCkCgeC0wSAXU2HuS-4duWjLlEAXi8zyTsp5EryA9Ic2Mq7VdzaBH60uKxLwuVKvFVyWNK9slRYZg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 31,
        "timestamp": "7 May at 16:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006795176066940?__xts__%5B0%5D=68.ARDMv95A4DDKqFHx37T_pvLaulVcfM9NLdeU1db4s5yJ27rcaR-WfYC6P_uvCu_xm2ruykQT4huWM_DAysoXLnspdN_VExhBBeE5s57BcxDx_YTMLOYjLzVuStNExS3_pPKnVYUvobPqrTgb4siTyKKmypQZQ8FmUq-50DJrEezIVzoR3PKCBEeMW10FXMNHuTWWcJLXoxNeMXtAlU59weW6G35Mofk3ENm6QXujIw5YYO8GbtE76V8TE4JKX2rXcFzfpyNbAY84XKlYFAVB3HyygEp8rTFF5KwUjWQISGDo_dH6GZqGWfS3ELQNVmSzqxZ6rdEi-ZD0HVSYd8VQowsd4Q&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 16:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006746392738485?__xts__%5B0%5D=68.ARBh6ear-VzFQuiSYl4fvZ01USn-i-SmSJ8wdKBHDl_H_EkAVN-S-dD60djtNphOJQCCt1pwqMyp2xZv7pXJHLFKDhsU6ftFSvZnt0N95khA2c52U0d8aj0DonhRCHEKbmh5afve2IuMomSz3tA1rrg4GZKOQFzNWrfLmX82GPBBfmu9Mwu6R_7rZeXAH2jIsXjmgsxziKFKNFpLchbKgudDpaDC8xynV7adOogpSbD4N7X76Z8SlcziiFPh1XauIDWD4iqJ-k_CQAnYJ9rqhQpnVvee3FgrzMsy52qN-XigoP3KmyzQU2xoFZuBmvVK9OU8KVaqc4AFt56TnQwZHZ2jpw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "7 May at 16:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006706019409189?__xts__%5B0%5D=68.ARAMYsLCpY4n4qfYlfHwi6NcCqVNlnSLobiQzSgNmIpviS9VSKgDE6xOORopoFgxt_3dgO-zRSMYerp1v3W6OuaiMxv_nof4SsQl3wbaHnrWTZCmKAIbI_SB1GLuYsTB43WPZfO5LGq4XepZ3MJPOZ6potUXMp0_voz4xsp-l2bklR5CBzMLj8MGe3XYzHrIbvRl0xneX7_tlyi3_cZJemzcUsKYpj_0-XIc5asyFx_25cZM-P5MS0zWikmThFJLcskSif87QYH_C1tQadaPSZtNqUFnVq3cW0ppu6b-sk1O6zT2GYESwNil6vPYkMKg0mFTN9Aj0ObsgLNT_LladE0SrA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 15:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006660076080450?__xts__%5B0%5D=68.ARCRbiPTTlUnNnkU0jsHqklx1mxhuiiem-fLqc0sL40sSn2Mb4LPjrxHxmXQqrWQYtTMo4Aoo2HYRdtC0UOJP-oOBD9Qe5alboV7_xv8P3DusBMj8vPo5mndnD0qKEDQAOiWdQbPLCJUVRWtM8Lkucx6bOXH0La9RjJsi8DoAcoUFdxhkHUiuQjWqmBS3ci0bX56guyp9XDBuSC-JkfJcrJrqKNylF3O0yJI_S1pwJUStQI9V8gi3YZS5TucPpHzVx9P92KrnRu6QmWoXCs-0Uw41cgxc_pJXky77S4KdwODYHlRVTM2YA9og1kzIbuxeV7RpnwTHIEhDLvEp5Frhmp_0A&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 11,
        "timestamp": "7 May at 15:12",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006612219418569?__xts__%5B0%5D=68.ARAcLeN4iFvumXv28XSJNpuzYwr_gufLA1rm9FHkOPFehOjD-XFs01sFxbz96MIm6CfJJUyTqnpBsUPrgpkdQwAUTtmr-KrpNynUmvwGLdnZ8xZ2TRr51MoqYFeWNlfZ-wigqRlNe6mOgLxzPFk5bRXLfKkd1IKidgwG5gxY07bBZKB487cYC6IJHwXU-WLO3RnPwzJMkQ_4kEEUkrlnVaNRXC5kbgFN4AyRKtrryKMokXkJ1cqLaz2J7OQzU5XEdk7yFQsZnp0ZNAEJfeZhoOuL_MCuol3qrZBShAWS2LpTqRKgAKO8UH6dzw7lG6v1ZqEJUbBvLKNl06sxWIikTmerbA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 47,
        "timestamp": "7 May at 14:39",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006560116090446?__xts__%5B0%5D=68.ARC05yCpLItZJTVE1BIlVUizpGvC8c41i5iJoKDvvAtbbiYvyTcIcTHxU0Wo-d26mo6jp881Jm-wS4hQRJNk-TCaLFbdUzrvu_Td736fBLiUdJOG1QkIkjjn7DIfUB2s_il9ejx2NJqIoUjrot8I9CTdqpx5k7dFG1_lXzsw9fyO7sO7PG_G-bp6-9vcN3Vci7e8g8zYKs-0_0XQqKHjFseoPnBcdQx5QVVpUsWcE4bcYQq6vAwOp4m_rw8Cgup5HBDVBRhXXwbcTqGg2VzIpPxXNGMxUOUPk3fCXVvVS84mVqj9RCHyXzOun1tNY05wOzFJ9WHm592lI6LbGcCIkw&__tn__=-R",
        "comments": "128"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 14:38",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006558562757268?__xts__%5B0%5D=68.ARAnUsNRjCVAa0DtbQX_vPFXgXDEjLhUef0zgdjFzOiSD0wKV49Qxvq7YmYLd3M4F4bpoQecA3aqHQMgkscJAytrijobTDRTXFPkDQ668TmdriDQJgbfEnYrnFmSJCPMVaPsHeAzbm_9S4VZ8OqQtl3tBcr4qhlmGk30nujeMlVBU8IAjE7JAkY2IAul_uunEvGz6sZXZRI_XaRAAG8FDH4nEk33XpdXRuLK0jjSApzxNPJGlmTHufDemN_zBmAyysloZR8muRmeLTpvuDrljtESIM47LEmYgbTmTs1QkSn8JSV0-LXKdjYTlJiRFzoMbkFAnGwwyNlEv-zYhIrD5TLB_w&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "7 May at 14:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006510212762103?__xts__%5B0%5D=68.ARA2_fsA32iPZZCLGxTWTWWJTdGCQuEsULjh5mA9-UkiYyE_EFIzZTJc-lDe9jUpqtCEl0Fg2E_IO3-eWBVhz9Ngr8lHIeMUjv5tnVcZmZZusKghSaMzzqpjbrUFCFXnejfUunsRdUtb0aRPkjx3H-4C_jVykMAlGo8bio9Qn1jRhOHwFMBiUQB0CvnKpFr3oC4VnuGXAIcbERWaGghaSH0srqqn0trh5NbZF9SYZbCcD8glNyCQOYqNiTr_LvDfdI2ivohXszJtEI9TR7jQ5rPn78f9rgKhxdDFyqbJOH0Ue7U7TGkU6SYm7dnlqegT1inFtOHP75tFJNfOtzQTs2tS6Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "7 May at 13:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006443469435444?__xts__%5B0%5D=68.ARDFNZ98JNES-zC9GCruUPbi9vXUvQPdHVvglBpOSKurFwOScWAr3INoprDBWkxf18zBFaPDAfNV1fbekbPDdA45nsjVx-risSUeYQ6CO78ccKmZGIanVRMIhBDdtRPKbOx9mV-PKUA7s4MS5XwYxzQ8B_LWcOfykllTqsE7cs_ivFXoMATVYkbt7rZpE6ARHF5T8r_PCX0ysFSocdDByULrwwbBBkHr73_A4ohdmWTZ6C1vxKXxQ9XglrH1t4qmU0hTRBpiEKvzQTRMSakJEnAN3GVDacjg5Gk7lZvZ1lrosuOt4rRGEhyovremNIwTPxoKmaGaORHpspZYV2lsgc4Aeg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 12:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006355729444218?__xts__%5B0%5D=68.ARBDjAgGdLp-SQ2l4Li9TQkfHbHxy3BpD_qEeZNk7mzJmAO2jbPQVWQ4gQha4C_7Py5oDRiKMlvR31FraQ0xTq4rgUloeMpm1kizjbtAwm-c2f8fjoL8Rd5pMOUsBmvA6aYM7JppFpAmWdlIocK89aTtH9u7S9LJrR3uYLzSWjR55ckFz4LiSQEf-sxxedzSr5oeOGYKXOuqHaqZKCHuPfAaN1Lgt_tp9eEnmKHfYKDCR53w-Y72obROypJnneSDnVJd_YmZjWadWcgDhX2ubDxWvWffMILrMnnQLsqCxvTohTH1HpraqDHK8fi_-tfVO9acjsiKb9OVwXoXdUXqNf6MtA&__tn__=-R",
        "comments": "17"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 12:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006321762780948?__xts__%5B0%5D=68.ARAWEPBOgOlAWRitWZtVVukwUT4W6zZuIF5Wlp1C0YSAaA2k4Y-SYmslrftLo2JhEWCc-jbNp7Drr_w077OvT_ntE6OPgvCadL_j2-ZHROly5NCgK1pg0Dle7l2uKkIuj7uBRS6-LmrM4_90fydG18U-5OLy4IB422V4Idg5enRgfJ6deceKzsZp6cedd7dnKUi_ixM8_vY_oL2zsmMT-oC2Cctwxks8e38LR-irazG_-XV3bYjFX7qPOUPwOBsR8GpBwm05ttugeSYggVzUMDIxuIoibJT1NcPN6WeeJ3eVYIMUb0q6yw0Ev5eeKfVAbw_8BsE5w5VhDxOiSWViwTddNQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "7 May at 11:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006309426115515?__xts__%5B0%5D=68.ARCHm4Ihs3Jg6gG426AADMbRMniUGDpP3cpChCTQiUw2P_6RhUN8sWqTPfesufk1NUQRPoMkVaHU9ociLlEn2pFlrWjR85u_N2PLRpE632B1oaVj0A2Mbz21jflq39sfJnk9ESeyy2x-T_78ZB7omx278MV1y_lPrw89-aej9PSkOdlirzKINC9Z-CG5lc8e5UhekXdF83ms7mvROdaKTrDjH8DsS-oB6EhSP69VNYNkjQtQmZvScUxPrT8B_xFF_STZ1KwsMovu57OgMHBgZ8-YhmLSrVWi9mynTJq0gkaertpWtP5PxGpvI29qDPN0Rl_3Elu4gL6IMV3dr0I_vX0uOQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 11:34",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3006276716118786?__xts__%5B0%5D=68.ARCT9vquF047zj2zU15paDFoSLnnD7fUkg-3fpGVS8DoV8Fi5YDXBLUT0Ha76lHRItllU_jM7Eu2qCuNpci8O3SDmjXWqsj6aMOrhaRwwMtXLLmBhgkuYQAG9obU2tY38NRCYA0GGMmsOhlO5BJx8kj9aKpQUNfvTNCLr3z_lyjn90E5k3YawptvtiSz7oGyQzwzqbAK0y4da83EnMQp4_bTOiqTWIQC-XydgVSwwbjaDwwrjgaebNBaXKL_tmSIG9jXKzLXfevnVXisTE-dRJ25zRtApWgHd485u5PJjMPEIyUUlb0fQe95WTC9LRvDgo-ehdq6PjX93dWNRgEjNTQiQg&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "7 May at 10:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005767709503020?__xts__%5B0%5D=68.ARDb-r5707IAMcwJTYjblGP7wlFUoNFhx4P3Dj3kZ_4CCH9REn_2eJknVRPOI-uHjAtzwbmyILGPXZLoYBbmEje-OQT_YUlADrMBsCsmNTB4pvJ_0quxNod6a8aVrsLCp1lO0tNbPzVX3EyYP5dDbQXGJ7tsCU7Z2wxXd93Z5dEKbz1riH0kpUZDC_qs4EsRKa5NC4ZAJW39vn1fgyxKn0ktNP-ECvRCQIHXaz0Wjdyat0DhEel6AhIEtaPhu0yubxfPFPjENHDpvbnIyU-1M-fDy8r2PSD1p7glnzo2uBLl8J3MbA5961fkZRa0swIUdjekCcPx8yHd-PpgZ9tMVAAZ4Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "7 May at 10:27",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005763609503430?__xts__%5B0%5D=68.ARD0rut4uA0PItGdowdWPTsSb6EN20ZWLD2vDeJYKo4EsPV3rY9J8fZqYRzrCFQeBAAB328291Qldt3VN8R9L6tk-SR_VDToiHcf7uV4CYlMULf_nBLStEPt1fLT91JbMsips3pqslT7uCd1ayPO08WVMuICiESau9eYD9CMmHiizSeP0SC71iC9Xznco2KUcn6zyLzIG5s5jfDkDMztsHszAwK0GAiaJ62tCZRhG5ANr3ER-Gs0CNUGMWUt8HD2fhW1By44Rnj7r_mLsRy8-NcOeHBHQJxFozAJG5WUQA3zZlLgByfSabSuAngM3X0VtYzux_Hc4qXZT-Bzc6URLRLf4w&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "7 May at 01:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005355462877578?__xts__%5B0%5D=68.ARBY-Ze6vpk37dWGvptRwwhp3oeMVEw0GIlQK5l9BA6ogo8Ucqium3N70EG5KfufFOD57FApQyhcG57wEKGaBTWRgiDPPmUJvDZhjfdNyNv5I9yWYv4FmCg07IY7JdwiNp4-8cDqdWH9jlu4oydC0sy4XJQe_et34BmhWnu_IOkUlzb96oJxFt_mCq8zKjgF5esiTaDJnuXP7bP_MZ8kzxs-og14lWurKLYy0LEXWBoL3vbJ99wZP33uEBg4InbWQ1OjWXJZXpc8jMqw-QmgyTM7MnCo2vSA7FRvH7YSMhWnTuc9senDT8i13llEHmanhSNILF1Iyq2R0x6Sf03VE9qiZg&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "6 May at 22:59",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005113776235080?__xts__%5B0%5D=68.ARCAfW4F_IX002K8B77HKGWKl9BYOwq2yJ0oMiH6mQ8ct7wkzMjpXH1NChlV-AYy6jHDDh4V0qbvAw8sRnTwZGASUYo12KLbcYZL-P6QhRpsglBfBC0L8z8cMTOgM70nLip2nR6l6GzRJFzjzqs9ppdIz2bA2I9GWMMb1O6F9tjfEGieQTcAAbGThar9_UB4mYD-29YG4pwsleBYGhsAmsskDjmDnf6DzCQEAMwtgZ1LwQ7CFf0q7Ia8jEE2X4SoGKFc9S7ohWlxZyTksJ59lGTe1P3P_0DSDVejiS8DmNUOUc2r4_HrxLTi7p8uveMCd7CFSZ16wHGkBxvzbo4KTfWjYw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 22:32",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3005062626240195?__xts__%5B0%5D=68.ARB4iCoNqPVJ_GKgapJmp18JUfSZFuFudwfsOK3_WLSxUQEakpRiDIbxZqtMULd491ZspLK4XwyfKGU6e5Ic4ViLgtteGLYbRUXKOJZ6Ph3jgfGQm20Znvv0TxAUgui49FeW_9Dwugecuq_n6ETxGrfCy21CLg6ykomzQ4uSO0UpzcvmWJCQJtkiWrrnDNJHeXpNdCtGd2Si6NIA81LCkoUxgpsB3nP1u_a1ttuZoF-GuTAz6bL7q1EVzUoe0-NakkmK9wI20BWB3WdObJrstBUN03lhrLcNbo6EB2Wx1IE98BoBzALLS5nxr9GYh5sDnK6SHcmQOtoH711u5Yguqx2gpw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 21:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004974199582371?__xts__%5B0%5D=68.ARCKHRuXs9IUl4bGGXKSfSZXqKKsQadixfsupN1r270McFP6zPXS647NCNKYY3afWh_Fhf-EfnrepK9VHen2OaN61BixOuGFmkv1zKs9tBA5i8XmrVvmXsR_MX05CZr4KmY7BzVRzm8OqwjEYaPyV8BK8hhmUsrsifbijYWBx2fGbO8SfWVzveKkr5w-cwHuYoPwuLii5al3g0E6uF57Iut63Y86a8RKucoz_P2MdsCfMiDZmz-9UufHR89P5nF_lmcgabNmG5HiCibYoLtpEt5RJpOwYNzrA8n_BUlssjgCTL6QZUWhMvbOAwv6qMkZ_yHzlmxt8aygL2rZdRDe-nrPGA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 4,
        "timestamp": "6 May at 21:06",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004902522922872?__xts__%5B0%5D=68.ARAAcB6hgEoWA0B_DPWMGtaL2csVDQAvwLxdTLJ0vYqZYUN02-1X_8YnWG_FF1iUXvbjJw-zA09s1yooElrdQqGhatBLOsxti4tI6Zz9e0k_R9Q87yV40fz9UWvViZSGWNs5sAdfqTsn0_-2AqENyOjSOwD8m1A0EL3aIFZtKeSPUukUx5rnPlBbkSIoKPd-JYi8TOtRZZF6T51lj8fLxcolKoVneiJoHo9cNOKwi5RL-bMNW00NiIj681q7osBK8-1Czu0EednAhvoOjpEHlmBa7ujRjqrf-4CQNkpv7EoLYy-bTzMipA6bz7dUdYXTrTVSsPEdiaNvPOz5gyhg635ZiAJLvgpuYw&__tn__=-R",
        "comments": "84"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "6 May at 20:55",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004881876258270?__xts__%5B0%5D=68.ARAlg9csyo-Zft6-iAGZNOZlHp36oPCoY2-nBD9v1d-pM1ybZ7XYQruQ0GQJsidHAKaG67dBl9MwWYLhuDbTLSIJQmgUPQ2Ax88ChDtaBsNmImXDGwGv5GJxxRRGFEqTp98U_JC1B2o0fJNrPNR61rH1ZELDA6l-5KIHBr4_Qk6Uh04I0_WgUY2idQw-VWsfLkm_KHReZyGmiT7kQ2nBFjGR-DxAvqFA1wjPzrPyopnerFTMjI51vesQl9_jSpfpEhwY2SxXUzhW0fqIEuA53B9J9hZuLwL2RdqTvLsjPOIC2ZgnNSdgT2rHstciHXqFfm1jygYI8QCdQiiN2ZGvQkohkg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 20:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004878509591940?__xts__%5B0%5D=68.ARCSqLJ0Z7c_7uMDhvlGWyCk1QFsPF1xLanbur4qCCRPEhadIG7KtR0SuclWwjBHTd3og-CnkSdGJ1TZ13sKmnTng_Fr41qHoIAHiwb2S7wvW8036fmL0K8gl9QQEgXza-WPCD36acOiW21GkahvKC1yqosdkLYjChxWqma2igb5mu8-V3pj9FPu867J2yVH5IPL8d51Jy0tLIJkQG-IzcQXytF-OBAofu_UpXh9oizuAT_Q90CTb6pmahtKPQ8iP2N1LCQuv18XLkt9Io1gjNnLEZFnmf7BpMcZhFYV_Hi1NMDUc5VJL8coEzmW77UqVcJjeFA_-co1K8WHzcdT3XEWfQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 10,
        "timestamp": "6 May at 19:21",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004704736275984?__xts__%5B0%5D=68.ARC5BxvmBXv4XJ5RF3QiHFo0pPRex8cD0qiub26A47PqTM5oMCMfVuXXLtkPtGnK8OtgFMmMmVALurg84OYBulrTP_kEOADdShYlLRFQIWIgng1UmjmOeCfmtlS7jlIJtKkOERxSqYHSHoi25dkxxr-ck6c3cSx9j69DiaCcnBmht3vdtYuYV2Pp8KuatX2bIW29-mXj9KAyy_fVnl3JFssA2s8mtEr2VmmbzkjxgFHOCEkSt59Z4EzOg27lpD5Qc0Bb3X6wmGmMycwbHTrAt1JX3eOsicHjExEBLTz5BRGKH71xrh8pSoa-lDMuUINkPvvm1MDqREEg576o-zXxu6sCxg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 21,
        "timestamp": "6 May at 18:26",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3004570699622721/?type=3&__xts__%5B0%5D=68.ARDtU0WCzoVQIaJGyRcW_OpWa6j37zqYEfZM9fL6yRAHYD4mR-vwZ-zZFd13BuF7-uiDOT0wkMX5mpVxPWY6P_wieF_Ek0cSkSG6Sze1h45DWGF6TPKjR97bnVdPqKOHeoGgp4wPwPf5D3LAmqP9DhI1hu8_YorBCKCbmKqoJF1KWcnD2ESEO_S9rKI-MsBCRvL9ONg2gXeH42dUO8bQ6W1xMrRhaNTwKb0GULBBZl1VTev_8JiGSI5czl6OA_H13EHCgfGGe3v7DN6WN6JcI2Hs3JiAvBYoROkQk6-zSMl89v4FFOkb2oHQh5KLl_LnlTSWNapOaXSmPofHa0wm0ilTBA&__tn__=-R",
        "comments": "28"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "6 May at 17:44",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004508376295620?__xts__%5B0%5D=68.ARB49Uws9OsGuJYOTk2iBR9QD_aisbp2nUEUXgzZFidyUVRSjSLDl0AnaJEpbV503NvHR2Oo2EZGgoQdpVAvhVlYe5jSlRJ0GMtglQVVVZy-Aco-T9ZSSMj1iMClahAZZBOM5_uoYY-fbLtO-gfn3ugS4u8tcnatAsjqlMtFBMYxRwuopufuYwJkgtcEJhkcs36wj6oSGbwgqZOfrBizh9wXigDgUgBK-sd8NF2ktvT37c_9Qwt9ZcJtwjOED2_vuKNkWXWHpNxYCgU05r09OkXisNqehgPv6xviqP312SAdhsAK_k0CtcPBto5wC_lv7NStBGcuJ31ZkCm5LMH6AP7gHw&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 17:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004462986300159?__xts__%5B0%5D=68.ARDmSXd8SdmwkbZ6pqiG6S4nl4Y-zhB4SDHzOeH-g3GBTAG-487omfJald28yI6E55hDYEYXU7xXDauIIbnpcbk_Q1Ex4H73K1P7JXBQGl21k5cyfAUMFMktBRBw9kZsUVVobkHElEeCQv0agpQbjacQ6gVQgybPxnawqy3EH3wrtUV2i4v3qHLDr88wJsLZyTd0C-cDSgpBn8a7U3ysXa54AkNpHRgAtCsg1nIP0Th0Bqs83UMU5yXtrILKK7gqN0rI1M4FD55OGdeeEdJd7VhblMX-wI9xnu1oB2z3guL-zscreLenZQz7Cgy0JzLOBu8SHe20cBIR_P_bHqJtJ26eLA&__tn__=-R",
        "comments": "14"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 16:54",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004408582972266?__xts__%5B0%5D=68.ARCElaDJPiZVcnZF8Is0B9bZSf_f_wmdW8yim-3dpJgaT5dsQgmbOUTRUJ2qeJc3yRnd_Uqc84NPfTbEvQ-8TYwc7MOKLobiJIEaiQnWcThYuyeDSDM6oeDdmh335_vqeDG1G49FSDTV66YpIbG6JVZ1JFtQItoo9kLMzh8VW9DikNI47XM2L2zlk5FSSzh6WC6ce_zdEqsXaxAB7sHDR4pXCnTOw2DrE2vT0r6-C5vvXCWdnB1YUSFy8gkhEL6YsH3UPkVRYZ_AqEMPDlucknwqsyy2PSReZKP1kBR3SumL2AtKQA2qJ1Bgq8W52z8K7dBFkY8BGgxDjY8rhGjJNKEbGg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 64,
        "timestamp": "6 May at 16:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004356032977521?__xts__%5B0%5D=68.ARB2n9b5h6AcekrvLVQXtWCeIaWPzvPScfZ8oTxvCEISiOsK1qEt9oYar8pPGJZFAzZPRYFvCOS57JyAdHQp15gonjJw9ZgFgjifLIB9AAcLrWqZsvErdQuS3t_zjNnNVuZXOcEKIeLN8C6Gbv9E6jwR3heoyW90gwwFSExno9VNEGYHAhv1EGyvFyDpIJkQjnxf8r8DCI9bqfFVADtvrmSe5Nv-22lSfoQoeyLJMALhfp5P7NqY5HPT0g-NAQ_DRobQOt6kCrEZiFlpmWOEqzdYMg2EyS4jctr0d3yXmPSmlVFUAfVXu9FuIgoDMwU7s4PVivyKuUChS2PTIWvULoT34Q&__tn__=-R",
        "comments": "21"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 15:46",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004297282983396?__xts__%5B0%5D=68.ARAZ9vFQgZPy3OC0uJ6FIl1ICHo2xHlhsqKPAqrr66gRav-_HHrX0WTY_jIkmqxUlZySqdzeLp7tCheDb3e1kpO-gFUWKF4MNt1FpPRBj5ceNmORYamJWvoXWix0omwazjZxvsZebYsqeogHaq-XzDGJ8z6ky2vMhQYjS3DZSZRtqYVe2Kk8ssUqEG8aGoyv6FeVRyx2vMDkDDsG4nnCaWZgEpzrJP5RFy08xzC9rj4BFpIrWr-MFFBM3-y5DyMEahBXO6oCBdahG2Cg9ZeR67sdQCOUbZJvnvsgiJehiMHcg8w89oOP3KOAcIyUowiCLBumetXwHjHKddMQymZ3KOx_Vg&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 5,
        "timestamp": "6 May at 15:00",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004228256323632?__xts__%5B0%5D=68.ARBIeOvZDUjZmeFPRuCHaxDICQ5qBqxS98kGMkydi-GFY4RG0dFIjvdPYqqRUzEUTSsWV8viBpMtzeZMG0QTh0cxfdU8m7djtsqKY6BNmLPvsc2PZyI22U8CqgmyjrJ6B0i00J_QpXYpwLpF4ISQGz4z6mqDxoq2xDlEUsbolSbNs4ojfgefVomiVh6url_wuhkATuhWDJkhyAUZynUqOFgH9APLejFMA3-ygFHI79-ccPMw-9S26ldbfjdo9xNXg30Y1D_Y5K5uXE8LsVtMePv4IK4SMT9-_BXjJhw5htvHkWcVTBmMUMZoXv2NUfvePTS6gKOIFwWiVDTnc283zFnQow&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 14:30",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004182102994914?__xts__%5B0%5D=68.ARDF6qG1dK4ct2vMvlPdYRDxes9OkPIjg_Xxu63gTVeDkkRbSQJgBXFkbTOsc94t3-gSGsKKg7oPhYzg4G8t-zrh2HYymKOJrXoa0_k23TfxM19CzP2kXE_5WQ-dz-HeYMZNiQwsQmqHr20SeqJMdtj_kg5dc00b9IfwbQw3m8SRtf2Dc8yb4KgjnOtvz5mARrglqiF3wHkgYIVNOWfNoUv95yMmAmWonARAgVF6FmU6LY4Q7ndceB3a1qeWCyCVahwwkmosDTkhUHHqfFMdTN5JGxyQBR0OstRZACNhE6Wss_jtSfgTuG8DE0pRHZ0zeoCAv2RKVVhdtrVmPNQGuGmQPw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 14:03",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004140912999033?__xts__%5B0%5D=68.ARAA1G6aBPcR0UW1a0Pgw2SLiJU0nIe0xig7gOtwLgBiyvbupiWq8As_XD-dUOo7mMaqFHj-fEZXGcnCMtPo0BRU4JpevYkDqGgid3twr2zaA1q2CQX8AqqyY_xuM26lHiwuucZlojeWQV0gLjMDlvoRuZvxWMcn_qdLEjLTwZJQXtFnNuNst4WPwWecEYupUB2f_aUamrZG5PGSOJF5jC6Hd9EfzLATu06lYZ2pPhIVEuGeOPV_nIhxnXwP9NJ5LuUznC1KD3EKx4noX4iRWz9Guu9pAxvvxWEIn3xkRWMEtaBoB-kCOSljxp5lDEzVTk1F0oFgFxL5QfsB3A7b3M0Zvw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 25,
        "timestamp": "6 May at 13:40",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004107963002328?__xts__%5B0%5D=68.ARAlSdYzLQqS-wdpRwUIZ6mgllaeo47MarZv-U9rEU3ivlmpegv6RGT8CycxS8c97gu0Deg3SkMNGxM05JzTQejBtZokZkjwLDqOmWwJcKpBt7DHxI58jSUeNA3Sf-WLr_Un_z5v150QBWWVXQNmRkSt_kqh6DyF1PTyDp4ejCQMidD6YrEr5PL-KHrzxq4w7pVvqDV2CFgb2ZkW7AaoJuKJjDKrXe6B-A0IW8TtvQ1KME3jNlOPKokOt3gENU0qYqlGBl2B58Lfx2QzAwwNOziVVTdDPN3nZRwbSNPdxdfqTgkJHLGrNKEanTuYXzgehOU6GQpXQNH4ZGZBZw0KInl3cA&__tn__=-R",
        "comments": "10"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 13:10",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004067979672993?__xts__%5B0%5D=68.ARCHP7zVv1R_u-3yDMJN_T52Amg3Qz2N0bhkoLO_BkNYp9sxW3_tHSUAOKoZ3QRbKR35ifz-g_YCii1hH86XtTSas3vfUORT3eybKY6IFo78iq7I8-AXUkehnYrWxAvcSgRCbXhRmp2lDeltRJDBSdFGDwGv80MhtZDDkqqcDxgN6MbE6YAsPXOqeM0ybDUMHWRMddexzFDaRh4FWRNVm_6y1F4AryCCooGgmbHNB8UbbCMGMttYk7VxeKFuncYOjzcZqDhXs4P7lkEWZk9ii-hats-ICkd4F6vA6oqbWjQ9i8X2UBnlz7nQ1cVYe85Kjg2JKKz2hXzQNMiQ9Hi_bwD4tQ&__tn__=-R",
        "comments": "15"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 12:41",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3004028569676934?__xts__%5B0%5D=68.ARAUPkLcIk3DUCTBUbmSdDoNsOaX0MsI3oPKBAcDd7o8NG1oD77Rlwbtdxj1wbMtgT3GIcUIMeqjCJyavUJi5i76SLdV1cxabjQAjgOdAK8HJq4nyR7nz4jJIO23sHx1I7icX55h0FXh3yDvVFULHLDWfNHUgCr0_2pT5o16n3IMkUVA9C19dhVv4yBL2CsuBIf_RY97yqAXqE_AUNvEIuui9R-Fraap34aHGRZx269OoK5Sfbo0fwdXtYAnelIJSR-cV_4rbfOleNZ-cEVl1Mx_4NuyYEiF7-M7650vilCuwqXCtwNnahQ3UOPKWbcLd0coH8GPywytKiEcjiQlu_iUgw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "6 May at 12:19",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003999783013146?__xts__%5B0%5D=68.ARA-Ym8WRxhURrklUH278iqV6gBUIngJ_ybyovYsjgvQvZivxjMpcRJBAaVmvMhCwsqJGRJ55vcgfCF11bDvUtlyqI8ezJD52B2wIuZRDNqcJeDtBnoTRjIb083XOHMcphvRA-tbSmEFEuskZ2v5nqfPM0Ue5p3BeGYAHQemvEAocTpex2MwBu0WUdjYcicjV8UZg1qlsG6geroMlo8kU5R8TkAEwGkGXEDJbuCLEm1bARa2foiI2fznReImoKL_RCYbhlZaXjxl0m-73aOYHbAI-y4VUFV5kahv3JjqSVq6s5Ft6YYB09azUJWuH5b9ALRS4HQFTXbx2VRidg7kToIDUw&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 11:58",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003101489769642?__xts__%5B0%5D=68.ARDsrHsdpn_KCq7v0ikWk0ioksu8ews1m7DQP7eYqEqQIH3HQr16hHnPFSIpzMfaH9-H4lCfoLS9WmM9rK9BDWwu4eKChz70O3GR8rSon19nhIQ1TLptv_v9Jfvgb3gMcDmbG1AYnTVx9jddQZ2_pOqvYJ4cY7Fogij2ZzgkvGB6Z13Ua-ipo7i6fiOa-jUzYMN6JLMpCXWkpp8tXN3sIGKIt1Y_GL1gDGDJ8k31WfwuKGxrEnnMHiWuOggPMnrwp99qKBRdmsN7_X2AxnnX05OZ2xqzwdHxgypuFezpUHNmdoyh92Zl8DReJMD8al5oecoqBq5-HICZI6WRyXpKYJ1xzQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 11:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003097333103391?__xts__%5B0%5D=68.ARBTWYGfbTjtGFIVZ1Vs8JhAI6jdZKAo8jw7MH500ff3_-qkw-64hMcIg45U-3jilON_r5KPFfMIrt0BfcO7cBB9Was2e7rIXtJyk9iIGZTUyVv3yxzkdxGBW-efZ9p7HvDzDhyyRWsAzEwsYOgZ-CIH4XbMAotq64tVeEFOiAxuU1TPaLlKNLvlCZ1MbZFfx4LRYk7l9HTDGM5q41XdLm_NhjgM7UNJM3kwSfJ2tt7pDjUjEO8IhM5gIKXxKhH2n_hWlWdYZ7A6b6HP8hWUsFgNmF1glAYyzZ1BVCfTB-FtOHsJXbUOaqugPILfQ5kDHDMU4cT5Y9WV0X74B5JMa-UPxg&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "6 May at 11:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003094136437044?__xts__%5B0%5D=68.ARBIZVN9guTh_QyFUk1TrjYXgIaEaOT5Cr0kTdaEC4u-2LJPqsYMCTG5shE0m3kTR1CODk-hq2e7zuPvWcu_tvmOLU-J3vfPecdGzASs1k1aNcpW-L8c02jZ_BtatB6gHHtNSrWSnUiKUguIdVwgqdfiufaBlA2WY8vZRpALhNEWlM0ty5N26aRNmRqeIOllZ37lFmYQVxM9rV6IAh1umUP9-9ir8l7sS-Nk3z4-56qzWrEUNfuezwWt3p3Yi2esKziKGeq3o6wb2UhTGtFAkqAoyyATcA7FTIgIZS6BdC82IKYtaSywL8NUm_SsBsQVn5QwiOX-UYfMXp18oBSDrbkj8g&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "6 May at 10:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003089073104217?__xts__%5B0%5D=68.ARC38ymYTuQShzOVOben7DrJLtB37_hh7kkojcvD4xeh7po-5NnpNYUD40LtAkY6SuHsly6m92LRV2O1x2Ydec6cPyIdbLMc6f_D9qhPbmj2jJEGzpbVAgmnfLNj_cvl8WDEtgfMTCFfbvJqf-x18vXPWSCA9sakLdnW6Np0Dx-dD1FwO0W9YDjYcBPMRsqGcHEqlwvB86Cd9qGwq4__myA5FKghKzjaEVMo8TNNDfldXauZvz7MF0DnqLq8vAC8mNk0KbuCwE3XVce5ASTXGAUSCjGKHUWfnQMDHpyFvi5I1kaGeRl57K8deB7ghaq7q5nkEsOfy-Z4ulpaBhSd5Ij7IQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "6 May at 10:23",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003087626437695?__xts__%5B0%5D=68.ARCGK4NL9FOSsbSPSCWwFenn0IP5RHk_J9VYPON1moN_2Z8HQZDSpeWcEoO_6YkhA5PUHLgWtSkzybWGBaL6DYv9Or4URht_r6IUFM3QxV50Twry-J0k-4615h3Lu1YMIpYtJVcq1_G95g_udUORKas6UzfKX7NmG2lYaTXzKEjwjpxyfx4AmlwmDSrbHKqNTDq5xK1oSU8MgeIod_lOJswtQVsvB_UQqT211bEKrF5C3DjHL9i1X-_gOmHZnb8NXM70WXL8k4Wufwej7gEDc6h9EZOD-0WlXU8ZUnRxgZMqy4bqAs1IEvyyGl6r6LtWu4g_1J5MR7bP92H9hCFxPAYjSw&__tn__=-R",
        "comments": "4"
    },
    {
        "totalReactions": 0,
        "shares": 32,
        "timestamp": "6 May at 01:01",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3003015849778206?__xts__%5B0%5D=68.ARDbypFzKLXkaROC10xvVLbvFqy38vVz65iHELSwfGkX5qRDkEeOBKQhQZyuWF15hmjJq3-IdgnyYvWbaKKLiseiNDTyB4IEs6DXh1_PxSzW0riJiBY0UltdrG4j4h6vf-4SIFhBGfF661qUMmqVL2WagooqLhXJnT3CubR08WTNUGcODNeHu_nNjf5hRlxCI8rcR-B-GkJcpMo6rfAF51GjJAfoq1kb0ln-u9r7lM-UPWqILpUxMMpRnNajCb7DX5HkKR38ILIBEpl-S0Vj-oZ7BGkR223ZjS_OudwuXyuWZ22n9H3GPgxSNbLiOTFhCnCbwDKDCMJrIM363oxRpZDNgQ&__tn__=-R",
        "comments": "35"
    },
    {
        "totalReactions": 0,
        "shares": 109,
        "timestamp": "5 May at 23:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002350399844751?__xts__%5B0%5D=68.ARDSD6OzkCb7DQB14C2BJsnMkv-HHsylEO7ivdb3ATEM0NKJURoCIIWkgxpIjXXJ-AGE44Upl4ec7S5kMAAwe_lGsv6ITGDmZTZ_tMyeuWQ6AjvnUV9VgImSL_Scznv7o3vENqv3gH-jDpReuNyKYB2C2EDLrfYEJxDS5PmP-5MbVchaF9njL7ph_UFcvt-teX5KR1SfH2PVJwj6ZRu4fdMTh27Of8852lWa2am7Ji9GsCod9RR9eNojtpSY8pQzEQ1cltguABDiBexUPfk5oN-zbCpz3NFtPBu-xP-cNrujK4572VB8nQFvRHI4O7wHhcvQJBu5XJgyyXEBb0FnyHo6Fw&__tn__=-R",
        "comments": "34"
    },
    {
        "totalReactions": 0,
        "shares": 21,
        "timestamp": "5 May at 20:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002381473174977?__xts__%5B0%5D=68.ARAjwKCYV0l3rLCnVyOkiS7xhn6NM3GqTpSI1nozyR0k5w4DG-3PNQ9Uq5rRD_TiSP_Q7lD6NzAwT_RiIupeWI2Auoj2YEoT8jN8YzW-rldE40RVFIQ9qyj2ofEixVR8gfdPW4MVKmKju0hsyhyINx2XaXPDhg0rCD_p_FX09LF2tIkIUmq4B_7sFKcr3DLo-Tcc1nahBc2ExtD9sAcWc1tSDH_yEbmS7wu7hbwvMbLNzYqj1KkteOeSTlY2BGUqLQ1WuzGVMdPUQE_sDRacLcv2X3EGttGoODxTvZ3YTfE68JXwG0q_6n_Niz-ZfMebNC-Ihb1VMr67vMsRJMbhU05FRA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 27,
        "timestamp": "5 May at 19:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002347726511685?__xts__%5B0%5D=68.ARAvtQRVtjdJRk5_S_C0uu72gmDCUgox8mVlMiHYUeJP6OcZ7X-pd1ptztb9fpd5VY6AMXJWBc2zVCfNvbaYXvh86PcOV0fZFOw3XlMlaZda0U3fL_RdQYDFTDPr-UhIgGzhZw-WmjS8sO2HkMnlyfk8xBPq5gz3YJT-BeTR8Dcs-L57XArufjsMh6uN86AvuU83KQHN21v_WefcOyg78BnuPrNoyoKSua9vNx8Gr1EhUbW2Q10zZ5ii9PfMRNkc4Js1pNQjyDvHM6z6bF34U2ieflRZLBghkb444vV3aGPovliCT3KOosie_fiX3-Uo-lnzRCs4J7jD0iIjWTU2OukeBQ&__tn__=-R",
        "comments": "7"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 19:28",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002336159846175?__xts__%5B0%5D=68.ARAZoTHI5qdhlCimSSZ0JW4Lpka73tdaFOXxNBJDAYf5WhAC9_SBwsceFpdm0_xC9p3Va2VK5jiA61csm7WZrWJwRus-UWaDmVKMZrzBnAE_jgdi6uFmnryEK1y5wNh5ltdWdIAIVhnjzstgiSpoPxJxrblQpY_82NVJM3flqo-_5232t68LqA73eBkD_dVuDhv0cEjv6xw519YK7YgHJxDoIP_Gvr3jZ_Xzj-L5SQNuVeu6N2JFJaswMBvcE8r2QWzYtoTRUBsOmS1c6CatSbuw2_9lfc3IRcS7TqxCMYm4jXiEBJO59XVmb_nGsMUGybjNNhidSINw5JQypHag8wQolA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 19:08",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002339103179214?__xts__%5B0%5D=68.ARAcgY-4Rq8berlkPqVtQBQSWQDjPvjiHW8oNa-kIfOOsPXwHtTKv7s1iahUuRhzjhl4lGQtjMFOSbz40ebiYZtM-4ERrphO8cH7slu8jrONMc_z-QgXluxwf_cA-wuE1c_hXrDwmvy65XP-GDgOCG5x7zOUVMIi7XMj49IuHdlGDdgJcY1Ajsy6MuNGbUKqNoNd2VKeZSLWqqpW78UiPHJlEldMA1Ya4xJKOmio91MMCEuun-b_PIb-Ijlv-S4l-TczsfRa5cF6mfJfUUUCnxFS2i4i4THF6HEZMnjxCbh3J-8wEr5V-ap_I_f5FPfCNaeuWTAvLHa_7LGSMMaN8zfN6Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 18:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002333893179735?__xts__%5B0%5D=68.ARBZ4TLhnoImFc8izEJX693EucEtwlHXHQ5YZp3T2z-QiudJge98CtVdDyh8WSBZ-HGCyYXXM_Ruu18lRdl_G8SdPkHHMQIx8i4pdseClAYMvJescVsRKYF6w5q2boihRtznvJPzTJsQUGhRaFaUFsMSmIfZW7jEYisrioFpQEht4NbtV2d0PqP9bRGxnFKGXJgL_4oGncNSBI77AiDMQ5j_HkBT4gSNi6F_vPifuRpT-2G_F9sfYSfL0GGGwAlpbbYSotunTzD3fFOmybQv5nvkULpOAOL9kOiMD5-nj0FCnB1yMidQaHqUQq5zuPptIe4Ttq2zFH7lr6sF1rz-a3gTFQ&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 18:33",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002303869849404?__xts__%5B0%5D=68.ARD22hrhhzVu-qr7PuiVaeGnTnb2f36xE6pubE3qG4sdvPDorz6lajZoXONVujSNP6asiWh6AgG4o8fcIQLkkOC7ZWlSWyYc0Pzr19byHIHBo-1sd-qfqrgwrHTyBw1RQvtMva_APflL183yy7c0FtgzZ0kzLuTjz6C9Gr067E1VLcqX3UthRCURe9O1lIqxPn7CTogx220NSmAeD6kMr03yI9Sl7R6eQXdITejsXJ3p9T8fHEHLd8Iy1yQmD7k4e7cas5ehy87vPgBJaUkv_kzC0FL-vLb1Xd4GqQoa4NG1CAVbg0YAGME3TrY5kY4QCQnbG1UtW4EjjVqkxPFYJrOW6A&__tn__=-R",
        "comments": "6"
    },
    {
        "totalReactions": 0,
        "shares": 2,
        "timestamp": "5 May at 18:11",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002262446520213?__xts__%5B0%5D=68.ARD_gdiByfZjp2veS3SB_rFgwQ_C-NqXJKEAXnsVkf1j0UIxYO1VfiU_f4JsFisixKVcZEzo7VKsr_qyYtvQeCicLJbOnuXYlT7Qt_1p_anQX57ZccOykAX8V57ol4eYZVz_nU-XojBVxJ7SXWsRJ2jqpjLVW11m-fkkMmFUSZouUTFi85ijVrYQIgJOopuIZ5ctF6G23SGmLqrV69tXdLBe_WHI-eDOCLq99KrNbop_hVlQUwhxnC37PaZUrzPUgwYVv68MsGfMdx9o-NR1MaYldx5MuTrEddzuTYeL12zJ4S3TXj8AB0HnRTP9PAwHTrU6WYjDLo4EbdkcbS5eg3mShA&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 18,
        "timestamp": "5 May at 17:51",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002224323190692?__xts__%5B0%5D=68.ARB0iZntryQHOnVGvIQuejZdCJXaQEkaAclii4BQ9FDaseZoY5wN4rZ5H1Mvmkd3jnWTNQghBHvLXF70szAWbrOvi7E0_sQ5_6JRyjKBc8HtUuqa3SXAU53q8-p9r04qDEMCw4Knir6xZVOWg8GZ0yULEAIq-9xNk2ZNJZv6-iaOi9LyWlyyrmmpiTDioLwgAKQV8lwAAvJld6rmA7zU0G5NsqfQ0hZlgnOMx7URHjj8_ja8j1ELraUAxvtFuwsO8vTl2GnKY5ZbGzmKX5EEHVtvBAe6mYbsXSb3XcjgOaYKPJRkkjFNc4P59Lz2xMWskQuJMvfDYRRO53ybMG0TjLgb7w&__tn__=-R",
        "comments": "9"
    },
    {
        "totalReactions": 0,
        "shares": 26,
        "timestamp": "5 May at 17:29",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3002177073195417/?type=3&__xts__%5B0%5D=68.ARBV4ld6HxUGfbDjJfO6alzlO7Wgb3O2TurOj5ihIRbuSIAkHpORFpVc_YNMOCexjMPc1o2h2uc_q9qg2aPPQ9SdxJdDf04K-z5RTiUvLrhbANkHMpkK9TQ9egHm6SYmeEdP76580pz8RFP0U1p3HCy_tRvCRA4XkZpNQEAdMgAXhsmH0zTxLGyo6soRyzP_sq6wES-TUoqdT1Sl0bUO-caTr88x_vbQhqHuIs-_Kl2AlXVDVOVS6P_QdRO35-S-sF4otkLh70VANBounJFwR43JLcauuKykaszlPNZruWQMHYQO_XCkjoAOYmyaIaYBQ8SG6b9W7YEjsnF6UIXZQgbJBA&__tn__=-R",
        "comments": "16"
    },
    {
        "totalReactions": 0,
        "shares": 86,
        "timestamp": "5 May at 17:20",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002168549862936?__xts__%5B0%5D=68.ARCKw6ecpH9FLZm_BZ2zmpM_Dld2FQuGxmAQI9WelLSgcDReF8uwyKq58triNqlUApyIaChmdq6jBz48KL2wRBKgrL3Fj64QDMAg46tjG03RF1rYApc2Ea8aBr2Xz7tsRHd296yiBVylJUF3wuekHrona38aDsb8Vcbdj0h1f9D3Y2faOzbZXEHuD76mMkEIXtZEEyxLS5X7yx4Y2KrF2ki61k9vperdPrN5sUC-1u_-9xW_Og66RCveewhqWNIqvL12dI16LMNhpH_tY6DymkfLBb7jYPo4hXEEZNXRpwgv2XWYyIAFp6ELiCE0SHr0FUXiw9mfVVjULCrGs9afurEjKw&__tn__=-R",
        "comments": "46"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 16:48",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002110796535378?__xts__%5B0%5D=68.ARBktwGWMcrU-Rs6xsLFt1KyomGYmLtpSk42FvBDQAuALME4eqLwg9gjm8v93rjPF_UIe7XmC0dudUPqmpQFdOfECdyZHmltW-lZ2E6po0M1Af9e6gjYYCX_6ifJTY3mCWq-_aghVnlpmKEUUIGSkBtZlX8S3iItWiPaAjbo10SWmBSNzynfm6Dc25ai671Ie3JTH1vhLBR8atAKU1igEnuMC_jviXf2h4YfJteyQX8L9J8p3UWqRSMUWXUh0jjDb8x99dFxMdhJZxGhRCOyPqgtLRkky2a5SA1RhkKWN5FaESJ6gnAVSQnfDM3up7MniLJO-hSC4Ls7I_EBc7YR2yLw5w&__tn__=-R",
        "comments": "3"
    },
    {
        "totalReactions": 0,
        "shares": 12,
        "timestamp": "5 May at 16:26",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002069786539479?__xts__%5B0%5D=68.ARCMykvusgjukaq1PW2NpHuZ2cpdGOiW9KAaZcgo3LCNqnO9YiQmSpEGw43tJflA-UFZJu9wfWXlGUfozajDRU4OqJGdqkeoxVip6M_WHxGAXicZnT1EBACKJ4xlG64OBWRiBzZh69r2fpVGfuuxhSf6VC2sPXGVwI_jd3gl-nlBd7cz6JoW4BCHj6Gz4-32gfPi6a0KSXPWzVsN-6afrktyU39ogHY-E0qLOa3YuMwjvA9RSGMjjLEUjfLHei30Zu7CUfFb25R5opZYQYZZ6ZXdeKIUk1kTzK_Xodf8hTOVU3kdxoRC6d_BKD-5fQB2LJ5YXKYAMPJqr36YQhwfU92IJA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 16:07",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3002038569875934?__xts__%5B0%5D=68.ARAbcj72o3VxDoEUeCEidBeuAYKShDlHAnofVXcg56KarzsxQXN3AHPJZriScONRi0LnV7psPA3taZPA7zFJT8B-09yBrjHE_cyMBvhAhNYVpOElcu-dH5pIQirRnAjMRxr-yheJH4qIJXSkPCAaARy0Xtu4_YsqsdMIha6cKWBfAgZtvU92OPqOH1juQ0BCZ2wFqYsFtc_3Gso784KtBxo16nG5sL4t74RNdhaLrLiur8i7azbPoNxUs3dO-GPNaK4Ow7d5O9tGx-jZv13ytwCl8aml82f5xmX6RPRdkv4VYPsJLzkygIDq8NcTpowm4dlqZuiybst0bavKC2bVu_vT4Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 6,
        "timestamp": "5 May at 15:36",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001977303215394?__xts__%5B0%5D=68.ARAOiXyoqV9csaUKJx3bNd6hR1QHrRoQDsvhno40u9fUYHa4Zv7j12t5nqNA9uitYuq4t0W4g3QbGIm2ndnHZwbgDVYeSJLftEtAZAGZyFBXqUXsk-4kgC7KU25_S5OHp0byLMyi_m03dEI9QgRhDsb_WKKP5DNZMpdoZ-iRGG6CEJ7Biru_wpQu8uZB-QJNgwtEq6hRMNoz419wsAUuKOzI9gmusbGiTZJKmKTnPwqdIHvRKq98zT2ZD1LWFmQ9-8la7nk9GJE3uE1sy1dCbXG_gbi36wGN7RBmpPLFsFAX-88e1YBJ997e6l1NtIffh0bSGEPdA_7BsNM7cfX2VHpcWw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "5 May at 15:05",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001922909887500?__xts__%5B0%5D=68.ARB9csAtCYIh2ifxER57xzb_y9R83cftTKVQmwFqNY-PGZIDYMiJRPfrmDsP5Mlpknrr-6fYRtJB-wR3WKFjbkDOxhayxbRZz5-0I2iN4F7PBDOSEJae-19Ub8Uz84GlcP1OMBZb8dn3w8GM8vtfFHDM4KD5bSQIyUBc7B4mQnirD5ip4PkqL4EU2nF3Ug4z2xNdBDR_g9KbDyQ7z-2jdYo49HCq3j3nIl5jRwkzzCwhPuManbKUrCgZrbwxQ0oOB0dRQ2pa5R_Bum4Cd-CLUIsJae7QPIuwBVqpviAZuVz7rp_d4apevIc0HqQ35O5IsGdGiGKPoDmVHWF9BssaiRj3ng&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 3,
        "timestamp": "5 May at 14:47",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001893019890489?__xts__%5B0%5D=68.ARCf06pnwvL8anvlLI7dhEN9uw_j9ybBuQwG_QIBo93Xh092HQxqi8CSk24lTqiV5qY3Ph13d2aG73NTxPq4EeAwhEqhn3Kj6V-mJKK8wFlYAdeCxXsRiMffgRuAyIOTg8SN_tLPJnvqQdKR_7OGoEZTDN_jYsXoGgnnr_uqlqrSSKhuQLrPiLzl_1XDtlFASPrFmxU2e7Yydp1o__F5Pi5t-EMK0ZECM9f5jX8rFshLXXrXru0Whmnv44CI1dIysUr8FQMn_4Qy7h-90X0rd9QLD2UUMCyOPKhYzjpzlPpteRf_DHKvzpeQkDUjvGxXVN8RAXA4qLRdWV_J1xm5FVda4Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 8,
        "timestamp": "5 May at 14:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001849096561548?__xts__%5B0%5D=68.ARAR6a7UhT_AR30kuwZTP2wPXQ3FWLCsN9_Ruo0I5tJ3et2pMiZThfPCZDZkjiJdFwx5uqV7I5xVOrjyrGeL554Jylq3Kpx-XQqfa6Iv3CFxQwrYgGIFvPY_UeVB8sWH0V0Qyo56anjDVVqIEIwCMRi06tPAo9dYw_qLkKgpD9Z9EgRPmBLVFQIlQ8b6qzrxs85FJItoHEfewTx2FB-89OOTeNxsBtskLxPpQSzUOBWmolUj1mTDMDA2S3TC_JsYefn-hzS1z1oaT-nFXgY3Ewv6kZckt2ZLxE9qPqd7TSa-NibPUZArpdgubMpjc4tilDIYzTY_2RH7N2Y3LeqKUx2m4w&__tn__=-R",
        "comments": "5"
    },
    {
        "totalReactions": 0,
        "shares": 15,
        "timestamp": "5 May at 13:52",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001815956564862?__xts__%5B0%5D=68.ARCBMVrH5DWaG7ctSe7hdZrPpzd9Sy4e0-90OQZxn8WgDEdWO6MsJtlznuAPkH1bmc49RfEXVxRDP7d3Jp_PvSORYX16sW99t_EZnWE9-XpHu3JO1DvHg0mh9w28MjJNBWZJ7jUiKNMT8EGhXRoz30a1gxO8hrS9nL_OEuZK7ryz9igNKbdsAXDIiTjmkBZ5xen-KPeM-02fy6QUWsDCP8EVpV8URXW2Zh1Ske_0Whh9l_IqujYcA_In2ArO3R5JMWQ_ptH90tQQSFwe83Xqmv4l35565rWv38DvYMkjhHUUlBdNnIf1XvK-Y5fhKNlv-vGR54P-wb1slfwb-lxkN7PP9Q&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 13:16",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001742796572178?__xts__%5B0%5D=68.ARAUFg6uVdxuPCTVum2_GtDpGgrm7QId9_85UPOQEUEhn5w8m33PqqaCerTDsaxB2SRDT5etD9NGWW9IvcWZ3Q5Ia2FzFiCBpChU4ZxX5RwHQ7Ati0hQZfdTCGgWa3RGHZX8gt0oUAT4BUNJnNn7Dk2LPEIGhJ_Y9cetgMtGIXWfyW7l0J9y1awmMCOEspZUKPfnCfyw7lBAxKVxrC3P00FwiZStYaNlO-9lPEso930mPkZHIHVNFV0dZjv9_zCwy5d5a6Wg9BrUffDGuN38Hh0NPXtX9QVkXbQugKzP-ussrUHRTRgJAk9SDEOvAJcXTGemsbXp1THUCrsUbP3kHqM7dA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 12:53",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001729016573556?__xts__%5B0%5D=68.ARBu-JmEzEc1ouQCRP1ekEovlyHhjPRmvMo_X3L-WHT3W1duHzK_rFtSoIcJnbgVGgVaFlqODosjjC0yUpbxtybyB-r93FqPLzc4o9wNvCuODLopZEeNNDVdY6x4LmY6awTgq2gKs0HQFpjq6eaWFB19MEaioXTB_E4aXnRTQXzOTMipoA9CTMlsBTNpLiGUx6PXPDPs-21Id69xxyuQGVHDf3WmvFFdmKT7LaeMbT4tEJQU0jNgHgVie63Eh0rAkrP3NMZ197e34vxe9eVZqjeO6Jc86oGcti0VkfjcVFel6VBiATOopMyLQQJYzhI-JsxQPxMHJmZYNl7_-e4oxw0UCQ&__tn__=-R",
        "comments": "1"
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 12:22",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001681163245008?__xts__%5B0%5D=68.ARCNxESJeF4qPT6fIjcXaA0d_9EvfJ9CB8I9dshpojrf_gHNSOpCWbynOU4oiGofBa1QsDVa-2wW9DSLN1CvnoDeMts0PCN-1q9PY5qmnN0eQ4l25z2DI1x7opJLIvLiEdIn4YEQ8eE1nL_9XsnLgeXILsp9qbbj2aOP6Zh3AOWesnBACbzdiy6mZnoC-2nZxQ6D_7b-329AQrYjNH1N2X9TB6k1_LWcny45mky0kQK7tDs68vSFa1G8pI_OWe7XAllKtvw4J83JsjNAjC4Ih2MA2jKUf-6V3KKlvBqdVrXGRy6mdmwQgkZcDDF5KqdOItnlQTeAKIFk71V4kKPpmjGS6A&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 11:45",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3001625266583931?__xts__%5B0%5D=68.ARD9hMfJYmn1sMedaUY0Xk9S7SMMsMjhcbvNQLo0E6Ni_-7zVKqHxhoITRH34gblDtzvMr72uKhvTegsojyKl3iOXkwqTGmKcS8F7xg6lWOlu-p7fkhtrsKXjmJmUU76t2kvZBBX7rXU5xSi3CA7VD3LJ8BY3UBes4uHxpwnoie6ly1XT_WPX-Zk0FysxKTh6vG2kZ_6J0o7Y3kzHpR22c3tQyOBhIKspnWYcYrz-R5L4qQEvStuf16_ck2jLARLC25fMYnNzClf-Sf_v6HO3iFGDqJC7ZjQNo2LJhhlmnjqyDIOj9rWbR2CsXu4orxWkQ8EhVQMuyv9RpP2ZcNrbJGVRA&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 10:49",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000801816666276?__xts__%5B0%5D=68.ARDuVuYh4MQPF3xcD83HuRCI5ddq5aJwWNSHtMINVN5_8YaCj-D7BZG83PgdHIqTKrF4eIv179uWLoiu4XUi6Pi7NV7BDiF2DEwTIatGchVO5gHXGa7NAuwtN4uSfIQzmbY2v9xrcMm-H-WPfZcTzOQ9nLSEcPePHFebEopod8Tld3vwnLV8zIhPRmuNQ-OJJgmphOSQTOiqNf3wltKpZWeutVSu2rTeEAR1vo431jl8STlx5N5K4Euyd74GaSOlSEDPGpSqpjvPvVyPznqTA6mS5s-EqCGfLafgzIkPkTujxiWn16XKQLuKFtAwyZGZ4Y5vH7qXLXfZ-yWXcJw9Gehflw&__tn__=-R",
        "comments": 0
    },
    {
        "totalReactions": 0,
        "shares": 0,
        "timestamp": "5 May at 10:24",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000791306667327?__xts__%5B0%5D=68.ARARdRxd0vj3VtL5z1sEZZyw4TCT7WOjVqHnDZji8ELXZERXjLYrueYHWmotFzolCOrE_5cDaZX3drDzuVPnQwiFR0TyuUbIA3nE14fZKc7_QjFUrifvBBW-HHhrNm0E3cEWPjj8mlaZlfxI_S05C74UKenKIs-Ni_GfWiW_n-yb66jnnns3De0tkyUi6EJkJf7IGE2bBGUP41AVcyxgfxTA0mY0u9QNWYOnSwAHrwkq4Jv6Eu8KUiKnuO_CPxz2dQzV6ZLdcjmTjln-kzp9FQnhI8q_XmJQ4dsOWzqzykYvmftyLnhoncl8-HltgHoOonQcD_V5r5snKzc4WeTzRHycoA&__tn__=-R",
        "comments": "2"
    },
    {
        "totalReactions": 0,
        "shares": 22,
        "timestamp": "4 May at 23:42",
        "postURL": "https://www.facebook.com//marketer.ge/photos/a.193036377442848/3000442296702228/?type=3&__xts__%5B0%5D=68.ARABs4pB6lW_rkKiedBt1ZQjS_mFPy3PrJ1wOutTUF5zHg-rTMXQMT3ZnihlCQPjhv-Lk9Rmd0yoFWL-yCZRh9uQaNnIqYuY0KYH_jt80-VpxnFBgn1g5jCrpA2HGBaVt17lpMV9gaYWAdrqedJQrlQ6pWTaRHrKi01hYF03ljbdXIYIYXffWRnBSksDG-d3M1N81euJF950gro5nJuFf7kldFQ8S12SwyMK-BoaoeJr5CpCLGhktnF4pYgOY-jnORQph_tQMa1Ki8b9hiYwtKX1IoQrFwzEDiZ4GeoPf9QsVTNKjpxOxlKSUWf7xh8vzzGhsGre0SeKGxMOfMzCZcKLIg&__tn__=-R",
        "comments": "26"
    },
    {
        "totalReactions": 0,
        "shares": 7,
        "timestamp": "4 May at 23:29",
        "postURL": "https://www.facebook.com//marketer.ge/posts/3000423196704138?__xts__%5B0%5D=68.ARCP58GMZFFCJwwG63JYUGlySVgB-PzMkQJZKe7m7eu4yznK2lBQePXdSof90T_XNdYfALj1_M8N0lN6l7Rg1uE3ckQbwa-fmGtiZsB1s4eLgV62BcMKYGr0JD7i_4Gax-QM4oxHM4gr16DmZw5hTcnxIMeYmAGkB5PlUo7iH-lTNlXkQ9XH4c3mf9bZzdAjILHQFlWwlsMGg-TqLnmVHVZrE4rUy3FbCMf_AXZcyKoq2XS1ZyCTjmZ4p_OOsFUUhZfX-yVw8niTR3SNd_8ces5eJ39rDCKTXNyiziFEaMIDKdyaqn-iYLJMWglGYOXw0-Zs2RM2f339ZSUQfGBUTT0nlA&__tn__=-R",
        "comments": "1"
    }
];


console.log(posts.length, comments.length)


for (let i = 0; i < posts.length; i++) {
    posts[i].comments = Number(comments[i].comments)

}

var data = JSON.stringify(posts);

fs.writeFile("file.json", data, () => console.log("DONE"));