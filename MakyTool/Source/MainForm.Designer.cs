namespace MakyTool
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            this.button_runAndroid = new System.Windows.Forms.Button();
            this.button_launchEmulator = new System.Windows.Forms.Button();
            this.button_launchServer = new System.Windows.Forms.Button();
            this.button_openVSProject = new System.Windows.Forms.Button();
            this.button_cleanInstallModules = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button_runAndroid
            // 
            this.button_runAndroid.Location = new System.Drawing.Point(12, 51);
            this.button_runAndroid.Name = "button_runAndroid";
            this.button_runAndroid.Size = new System.Drawing.Size(120, 23);
            this.button_runAndroid.TabIndex = 0;
            this.button_runAndroid.TabStop = false;
            this.button_runAndroid.Text = "Run Android";
            this.button_runAndroid.UseVisualStyleBackColor = true;
            this.button_runAndroid.Click += new System.EventHandler(this.button_runAndroid_Click);
            // 
            // button_launchEmulator
            // 
            this.button_launchEmulator.Location = new System.Drawing.Point(12, 12);
            this.button_launchEmulator.Name = "button_launchEmulator";
            this.button_launchEmulator.Size = new System.Drawing.Size(120, 23);
            this.button_launchEmulator.TabIndex = 1;
            this.button_launchEmulator.TabStop = false;
            this.button_launchEmulator.Text = "Launch Emulator";
            this.button_launchEmulator.UseVisualStyleBackColor = true;
            this.button_launchEmulator.Click += new System.EventHandler(this.button_launchEmulator_Click);
            // 
            // button_launchServer
            // 
            this.button_launchServer.Location = new System.Drawing.Point(12, 90);
            this.button_launchServer.Name = "button_launchServer";
            this.button_launchServer.Size = new System.Drawing.Size(120, 23);
            this.button_launchServer.TabIndex = 2;
            this.button_launchServer.TabStop = false;
            this.button_launchServer.Text = "Launch Server";
            this.button_launchServer.UseVisualStyleBackColor = true;
            this.button_launchServer.Click += new System.EventHandler(this.button_launchServer_Click);
            // 
            // button_openVSProject
            // 
            this.button_openVSProject.Location = new System.Drawing.Point(143, 51);
            this.button_openVSProject.Name = "button_openVSProject";
            this.button_openVSProject.Size = new System.Drawing.Size(120, 23);
            this.button_openVSProject.TabIndex = 3;
            this.button_openVSProject.TabStop = false;
            this.button_openVSProject.Text = "Open VS Project";
            this.button_openVSProject.UseVisualStyleBackColor = true;
            this.button_openVSProject.Click += new System.EventHandler(this.button_openVSProject_Click);
            // 
            // button_cleanInstallModules
            // 
            this.button_cleanInstallModules.Location = new System.Drawing.Point(143, 90);
            this.button_cleanInstallModules.Name = "button_cleanInstallModules";
            this.button_cleanInstallModules.Size = new System.Drawing.Size(120, 23);
            this.button_cleanInstallModules.TabIndex = 4;
            this.button_cleanInstallModules.TabStop = false;
            this.button_cleanInstallModules.Text = "Clean/Install Modules";
            this.button_cleanInstallModules.UseVisualStyleBackColor = true;
            this.button_cleanInstallModules.Click += new System.EventHandler(this.button_cleanInstallModules_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(275, 128);
            this.Controls.Add(this.button_cleanInstallModules);
            this.Controls.Add(this.button_openVSProject);
            this.Controls.Add(this.button_launchServer);
            this.Controls.Add(this.button_launchEmulator);
            this.Controls.Add(this.button_runAndroid);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Location = new System.Drawing.Point(-4, 4);
            this.MaximizeBox = false;
            this.Name = "MainForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "MakyTool";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button button_runAndroid;
        private System.Windows.Forms.Button button_launchEmulator;
        private System.Windows.Forms.Button button_launchServer;
        private System.Windows.Forms.Button button_openVSProject;
        private System.Windows.Forms.Button button_cleanInstallModules;
    }
}

