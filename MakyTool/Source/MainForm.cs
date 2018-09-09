using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MakyTool
{
    public partial class MainForm : Form
    {
        enum PROCESSES { RUN_ANDROID, LAUNCH_EMULATOR, LAUNCH_SERVER }
        private static PROCESSES nextProcess;

        private static String basePath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetEntryAssembly().Location) + "\\MakyTool\\Scripts\\";

        private Process scriptProcess;
        Thread scriptProcessThread;

        public MainForm()
        {
            InitializeComponent();
            CheckForSetup();
        }

        private void CheckForSetup()
        {
            if(Environment.GetEnvironmentVariable("PHOTOBOMB_DIR") == null)
            {
                MessageBox.Show("Run \"Setup.bat\" as Administrator", "Setup", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                System.Environment.Exit(0);
            }
        }

        private void SetNextProcess(PROCESSES processName)
        {
            nextProcess = processName;
        }

        private PROCESSES GetNextProcess()
        {
            return nextProcess;
        }

        private String GetNextProcessBat()
        {
            String processBat = "";

            switch(GetNextProcess())
            {
                case PROCESSES.RUN_ANDROID:
                    processBat = "runAndroid.bat";
                    break;

                case PROCESSES.LAUNCH_EMULATOR:
                    processBat = "launchEmulator.bat";
                    break;

                case PROCESSES.LAUNCH_SERVER:
                    processBat = "launchServer.bat";
                    break;
            }

            return processBat;
        }

        private void RunProcess()
        {
            String fullBatPath = basePath + GetNextProcessBat();

            if (File.Exists(fullBatPath))
            {
                scriptProcess = new Process();

                scriptProcess.StartInfo.FileName = fullBatPath;

                scriptProcess.Start();
            }
        }

        private void RunProcessThread()
        {
            scriptProcessThread = new Thread(RunProcess);
            scriptProcessThread.Start();
        }

        private void button_runAndroid_Click(object sender, EventArgs e)
        {
            SetNextProcess(PROCESSES.RUN_ANDROID);
            RunProcessThread();            
        }

        private void button_launchEmulator_Click(object sender, EventArgs e)
        {
            SetNextProcess(PROCESSES.LAUNCH_EMULATOR);
            RunProcessThread();
        }

        private void button_launchServer_Click(object sender, EventArgs e)
        {
            SetNextProcess(PROCESSES.LAUNCH_SERVER);
            RunProcessThread();
        }
    }
}
