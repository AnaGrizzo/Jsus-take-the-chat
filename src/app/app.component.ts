import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  title = "JsusTakeTheChat";
  description = "Angular-fire-demo";
  itemValue = "";
  items: Observable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    console.log("Aqui 3");
    this.items = db.list("items").valueChanges();
    console.log("Aqui 4");
    this.initializeApp();
  }

  onSubmit() {
    console.log("Aqui");
    this.db.list("items").push({ content: this.itemValue });
    this.itemValue = "";
    console.log("Aqui 2");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
