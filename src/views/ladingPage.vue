<template>
    <div class="text-box">
        <h1>Unleash Compassion: Find Your Furry Friend with Adoptify</h1>
    </div>
    <div class="form-and-donate">
        <form>
            <div class="form-flex-row-img">
                <div class="form-flex-column">
                    <div class="form-button-row">
                        <div class="form-group">
                            <label for="catTypes">Check our Family</label>
                            <select id="catTypes" @change="filterCats($event.target.value)" class="form-control">
                                <option value="t1">Allian </option>
                                <option value="t2">Siamese</option>
                                <option value="t3">Maine Coon</option>
                                <option value="t4">Sphynx </option>
                                <option value="t5">Bengal</option>

                            </select>
                            <section v-show="selectedCatType === 't1'">
                                <div class="cat-item" data-type="ragdoll">Fluffy </div>
                                <div class="cat-item" data-type="persian">Bella</div>
                                <div class="cat-item" data-type="siamese">Palia</div>
                                <div class="cat-item" data-type="coon">Luna</div>
                                <div class="cat-item" data-type="sphynx">Gizmo</div>
                            </section>
                            <section v-show="selectedCatType === 't2'">
                                <div class="cat-item" data-type="ragdoll">Mia </div>
                                <div class="cat-item" data-type="persian">Olivia</div>
                                <div class="cat-item" data-type="siamese">Lily</div>
                                <div class="cat-item" data-type="coon">MAx</div>
                                <div class="cat-item" data-type="sphynx">Sophie</div>
                            </section>
                            <section v-show="selectedCatType === 't3'">
                                <div class="cat-item" data-type="ragdoll">Leo </div>
                                <div class="cat-item" data-type="persian">Rocky</div>
                                <div class="cat-item" data-type="siamese">Chloe</div>
                                <div class="cat-item" data-type="coon">Tiger</div>
                                <div class="cat-item" data-type="sphynx">Cleo</div>
                            </section>

                            <section class="a" v-show="selectedCatType === 't4'">Persina </section>
                            <section class="a" v-show="selectedCatType === 't5'">Empty !! </section>

                            <br>

                            <!-- <div class="form-group">
                                <label>Location</label>
                                <input type="email" class="form-control" placeholder="Town or Postcode">
                            </div> -->
                            <div class="form-submit-button">
                                <router-link to="/petsList"><button type="button" class="btn btn-primary search-button">Add your pet</button></router-link>
                            </div>
                        </div>
                        <div class="form-image">
                            <img src="/src/views/auth/pics/dog-cat.png" alt="dog-and-cat">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <section class="course">
        <h1></h1>

        <p>
            <span>
                Animals bring a unique joy and companionship to our lives. Adopting an animal is not just about
                providing a home to a pet in need, but it’s also about enriching our own lives. Through adoption,
                we gain a loyal friend, learn responsibility, and experience the unconditional love that animals
                offer
                <br><br>
                By choosing to adopt, we not only give these animals a second chance, but we also gain a faithful
                companion. Adoption helps reduce the number of animals in shelters and supports the fight against
                animal homelessness.
                It’s a meaningful gesture that promotes kindness and the well-being of our furry friends.
                <div class="row">
                    <div class="course-col">
                        <h3>Stress Relief</h3>
                        <p>Interacting with pets can lower cortisol levels,
                            reducing stress and promoting
                            relaxation.</p>

                    </div>
                    <div class="course-col">
                        <h3>Social Interaction
                        </h3>
                        <p> Caring for a pet provides structure to your day and a
                            sense of responsibility.</p>
                    </div>

                    <div class="course-col">
                        <h3>Mental Health</h3>
                        <p>Pets provide companionship, reduce feelings of
                            loneliness, and can lift your mood.</p>
                    </div>
                </div>
            </span>
        </p>
    </section>
    <section class="campus">
        <h1>Where to find us</h1>
        <div class="row">
            <div class="campus-col">
                <img src="/src/views/auth/pics/london.png">
                <div class="layer">
                    <h3>TANGER</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="/src/views/auth/pics/newyork.png">
                <div class="layer">
                    <h3>CASA BLANCA</h3>
                </div>
            </div>
            <div class="campus-col">
                <img src="/src/views/auth/pics/washington.png">
                <div class="layer">
                    <h3>RABAT</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="cta">-
        <h1 style="margin-left: 0%;">
            Sign up for our various online activities anywhere in the world</h1>
        <button @click="$router.push('/contacter')">Contact Us</button>
    </section>
</template>

<script>

export default {
    data() {
        return {
            selectedCatType: ''
        };
    },
    watch: {
        selectedCatType(newVal) {
            this.filterCats(newVal);
        }
    },
    methods: {
        filterCats(type) {
            this.selectedCatType = type;
        }
    }
    // mounted() {
    //     document.addEventListener("DOMContentLoaded", function () {
    //         var catItems = document.querySelectorAll('.cat-item');
    //         var sections = document.querySelectorAll('.show');

    //         function filterCats(selectedType) {
    //             // Clear all cat items
    //             catItems.forEach(function (item) {
    //                 item.style.display = 'none';
    //             });
    //             sections.forEach(function (section) {
    //                 section.style.display = 'none'
    //             });
    //             // Show items matching the selected type
    //             switch (selectedType) {
    //                 case 't1':
    //                     document.querySelector('[data-type="ragdoll"]').style.display = 'block';
    //                     break;
    //                 case 't2':
    //                     document.querySelector('[data-type="persian"]').style.display = 'block';
    //                     break;
    //                 case 't3':
    //                     document.querySelector('[data-type="siamese"]').style.display = 'block';
    //                     break;
    //                 case 't4':
    //                     document.querySelector('[data-type="coon"]').style.display = 'block';
    //                     break;
    //                 case 't5':
    //                     document.querySelector('[data-type="sphynx"]').style.display = 'block';
    //                     break;

    //                 default:
    //                     // Initial display of all items
    //                     catItems.forEach(function (item) {
    //                         item.style.display = 'block';
    //                     });
    //                     sections.forEach(function (section) {
    //                         section.style.display = 'block';
    //                     });
    //             }
    //         }
    //         document.getElementById('catTypes').addEventListener('change', function () {
    //             filterCats(this.value);
    //         });

    //         // Optionally, show all items initially if needed
    //         catItems.forEach(function (item) {
    //             item.style.display = 'block';
    //         });
    //         sections.forEach(function (section) {
    //             section.style.display = 'block';
    //         });
    //     });
    // }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Concert+One&display=swap&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap');
/* items */
.cat-item {
    color: #fff;
    margin-left: 10%;
}
.a {
    color: #fff;
    margin-left: 10%;
}
/*donate form */
.form-button-row {
    display: flex;
    flex-direction: row;
}

.form-group {
    margin-right: 2%;
    padding: 2% 2%;
}

input.form-control,
select.form-control {
    font-size: 1em;
    margin-left: 7%;
    padding-left: 16%;

    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 5%;
    background-color: #EBD7C5;
}

.form-group label {
    color: #103546;
    font-family: 'Verdana', sans-serif;
    font-size: 25px;
    font-weight: 400;
    margin-bottom: ;
    font-weight: bold;

}

.form-submit-button .btn-primary:hover,
.btn.btn-primary:hover {
    background: #f6ffee;
    color: #000;
}

.form-and-donate {
    margin-top: 20%;
}

.form-flex-row-img {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.form-flex-column {
    display: flex;
    flex-direction: column;
    background-color: #658494;
    border-radius: 5px;
    padding: 35px 40px;
}

.form-submit-button .btn-primary,
a.btn.donate-button.btn-primary,
.btn.btn-primary {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: white;
    background-color: #0E3142;
    border: 0;
    text-transform: uppercase;
    font-size: 16px;
    padding: 8px 20px;
    margin-left: 10%;
    margin-top: 20%;
    border-radius: 10%;
    letter-spacing: 2px;
}

/*mb-3*/
.mb-3 h2 {
    font-size: 20px;
    margin-top: 5%;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 5%;
    color: #103546;
    letter-spacing: 2px;
}

/*footer*/
.footer {
    width: 50%;
    text-align: center;
    padding: 30px 0;

}

.footer p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}



.icons .fa {
    color: #103546;
    image-resolution: 0 13px;
    cursor: pointer;
    padding: 20px 15px;
}

.fa-heart-o {
    color: #103546;
}

button {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 34px;
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background: transparent;
    position: relative;
    cursor: pointer;
}

/*cta*/

.cta h1 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    color: #fff;
    margin-bottom: 40px;
    padding: 0;

}

.cta {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    margin: 10px auto;
    width: 80%;
    background-color: #5C737F;
    background-position: center;
    background-size: cover;
    border-radius: 10px;

    text-align: center;
    padding: 100px;
}

.row {
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
}

.course-col {
    flex-basis: 31%;
    background: #103546;
    border-radius: 10px;
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 20px 12px;
    box-sizing: border-box;
    transition: 0.5s;
}

h3 {

    font-weight: 20px;
    text-align: center;

    font-family: Verdana, Geneva, Tahoma, sans-serif
}

.course-col:hover {
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.2);
}

h6 {
    margin-bottom: 10%;
}

.course {
    width: 80%;
    margin: auto;

    text-align: center;
    padding-top: 100px;

}

p {
    margin-left: "5%";
    font-size: 1px;
    margin-top: 80px;
    font-weight: 300;
    color: #103546;
    font-family: 'Lato', sans-serif;
    line-height: 22px;
    padding: 10px;
}

.row p {
    margin-left: "5%";
    font-size: 20px;
    margin-top: 20px;
    font-weight: 300;
    color: white;
    font-family: 'Lato', sans-serif;
    line-height: 22px;
    padding: 10px;
}

span {
    margin-top: 20%;
    font-size: 20px;

    font-weight: bold;
    font-family: 'Lato', sans-serif;
}

@media(max-width:700px) {
    .cta h1 {
        font-size: 24px;

    }
}

@media(max-width:700px) {
    .row {
        flex-direction: column;
    }
}


@media(max-width:700px) {
    .text-box h1 {
        font-size: 20px;
    }
}

.text-box h1 {
    color: #5C737F;
    font-size: 42px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.text-box {

    width: 50%;
    font-size: 40px;
    color: #5C737F;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.campus-col {
    flex-basis: 32%;
    border-radius: 10px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
}

.campus-col img {
    width: 100%;
    display: block;
}

.layer {
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}

.layer:hover {
    background: #47626F;
}

.layer h3 {
    width: 100%;
    font-weight: 500;
    color: black;
    font-size: 26px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    transition: 0.5s;
}

.layer:hover h3 {
    bottom: 49%;
    opacity: 1;
}

.campus h1 {
    margin-left: 40%;
}

* {}
</style>