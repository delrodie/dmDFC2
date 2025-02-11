<?php

namespace App\Services;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class MailerService
{
    public function __construct(private MailerInterface $mailer)
    {
    }

    public function sendEmail(string $to, string $subject, string $message): void
    {
        $email = (new Email())
            ->from('delrodieamoikon@gmail.com')
            ->to($to)
            ->subject($subject)
            ->html($message);

        $this->mailer->send($email);
    }
}